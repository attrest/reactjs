'use client'

import { NotitxtIcon, ReviewfileAddIcon } from "@/components/Svg";
import { useDialog } from "@/components/modals/DialogContext";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Loading from "@/components/ui/loading";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import Agree from "@/features/review/write/agree";
import { FileUpload } from "@/features/review/write/fileUpload";
import ToolTip from "@/features/review/write/tooltip";
import { useReviews, useReviewsDetail } from "@/hooks/api/review";
import { FileProps } from "@/types/common";
import { FormReview } from "@/types/review";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { decode } from 'html-entities';
import Image from 'next/image';
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import uuid from 'react-uuid';
import * as z from "zod";

const FileDeleteIcon = ({ className }: { className?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M16.0003 29.3337C8.63653 29.3337 2.66699 23.3641 2.66699 16.0003C2.66699 8.63653 8.63653 2.66699 16.0003 2.66699C23.3641 2.66699 29.3337 8.63653 29.3337 16.0003C29.3337 23.3641 23.3641 29.3337 16.0003 29.3337ZM16.0003 14.1147L12.2291 10.3435L10.3435 12.2291L14.1147 16.0003L10.3435 19.7715L12.2291 21.6571L16.0003 17.8859L19.7715 21.6571L21.6571 19.7715L17.8859 16.0003L21.6571 12.2291L19.7715 10.3435L16.0003 14.1147Z" fill="#EBEBEB" />
      <path d="M15.9996 14.114L12.2284 10.3428L10.3428 12.2284L14.114 15.9996L10.3428 19.7708L12.2284 21.6564L15.9996 17.8852L19.7708 21.6564L21.6564 19.7708L17.8852 15.9996L21.6564 12.2284L19.7708 10.3428L15.9996 14.114Z" fill="#666666" />
    </svg>
  )
}

const formSchema = z.object({ // 양식 정의
  title: z
    .string({required_error: "제목을 입력해 주세요."})
    .min(1, {
      message: "제목을 입력해 주세요."
    })
    .max(50, {
      message: "최대 50자까지 입력할 수 있습니다.",
    }),
  contents: z
    .string({required_error: "내용을 입력해 주세요."})
    .min(1, {
      message: "내용을 입력해 주세요."
    }),
  rating: z.string(),
  images: z.any().array(),
  name: z
    .string({required_error: "이름을 입력해 주세요."})
    .min(1, {
      message: "이름을 입력해 주세요."
    })
    .refine((val) => (/^[가-힣a-zA-Z]+$/).test(val), {
      message: "한글/영문만 입력할 수 있습니다."
    }),
  password: z
  .string({required_error: "숫자 4자리를 입력해 주세요."})
    .min(4, {
      message: "숫자 4자리를 입력해 주세요.",
    })
    .refine((val) => !(/(.)\1{2}/).test(val) , {
      message: "동일한 숫자 3개 이상 연속 사용이 불가합니다."
    }),
  termYn: z.boolean({required_error: "개인정보 수집 및 이용에 동의해 주세요."})
})

const GalleryWrite = () => {
  const params = useParams()
  const router = useRouter()
  const [targetId, setTargetId] = useState<string>()
  const InputFileRef = useRef<HTMLInputElement>(null)
  const { showDialog, closeDialog } = useDialog()
  const { createMutation, updateMutation } = useReviews()
  const [showPopup, setShowPopup] = useState(false)
  const { data } = useReviewsDetail(targetId)
  const [loading, setLoading] = useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: '5',
      images: []
    },
    criteriaMode: 'all',
    mode:'onChange'
  })

  const onSave = (values: z.infer<typeof formSchema>) => {
    setLoading(true)
    const params: FormReview = {
      id: targetId ? targetId : undefined,
      title: values.title,
      contents: values.contents,
      rating: Number(values.rating),
      regId: values.name,
      password: values.password,
      token: localStorage.getItem('token')
    }
    const formData = new FormData();

    values.images.map((item) => {
      if(item.file) {
        formData.append('files', item.file)
      }
      formData.append('fileIds', item.fileId)
    })

    for (const key in params) {
      const value = params[key]
      formData.append(key, value)
    }

    if (params.id) {
      updateMutation.mutate(formData, {
        onSuccess: () => {
          router.push('/review')
          localStorage.removeItem('id')
          localStorage.removeItem('token')
          reset()
        },
      })
    } else {
      createMutation.mutate(formData, {
        onSuccess: () => {
          router.push('/review')
          localStorage.removeItem('id')
          localStorage.removeItem('token')
          reset()
        },
      })
    }
  }

  const handletermsPopup = (checekd:boolean) => {
    if(checekd) {
      form.setValue('termYn', true)
    }
    setShowPopup((prev) => !prev)
  }

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if(values.termYn){
      showDialog({
        content: `작성하신 글을 ${targetId ? '수정' : '등록'}하시겠습니까?`,
        onConfirm: () => {
          onSave(values)
          closeDialog()
        },
      })
    }else {
      form.setError('termYn',{type:'required', message:'약관체크는 필수값입니다.'})
    }
    
  }

  const reset = () => {
    form.reset()
  }

  const onBack = () => {
    showDialog({
      content: `작성중인 글을 취소하시겠습니까?\n취소 선택 시, 작성된 글은 저장되지 않습니다.`,
      onConfirm: () => {
        router.push('/review')
        closeDialog()
      },
    })
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const images = form.getValues('images')
      if (images && images.length + e.target.files.length > 5) {
        e.target.value = ''
        showDialog({
          content: `이미지는 5개까지 추가 가능합니다.`,
        })
        
      } else {
        const targetFiles = Array.from(e.target.files)
        let fileSizeYn: boolean = true

        targetFiles.map(async (file) => {
          const maxSize = 5 * 1024 * 1024
          if (file.size > maxSize) {
            e.target.value = ''
            showDialog({
              content: `첨부파일은 5Mb를 초과할 수 없습니다.`,
            })
            fileSizeYn = false
          }
        })

        if (fileSizeYn) {
          targetFiles.map(async (file) => {
            if (!file) return

            const id = uuid()
            const blob = new Blob([file])
            const blobURL = URL.createObjectURL(blob)
            const files = form.getValues('images')
            const data = { fileId: id, blobURL, fileLocal: true , file: file}

            form.setValue('images', files ? [...files, data] : [data])

          })
        }
      }
    }

  }
  const handleFileAdd = () => {
    const images = form.getValues('images')
    if (images && images.length >= 5) {
      showDialog({
        content: `첨부파일은 5개까지 추가 가능합니다.`,
      })
    } else {
      InputFileRef.current?.click()
    }
  }

  const handleFileDelete = (file: FileProps) => {
    // 파일 삭제
    const files = form.getValues('images')
    form.setValue('images', files.filter((item) => item.fileId !== file.fileId))
  }

  const clickCheck = (checked:boolean) => {
    if(checked === undefined || !checked){
      setShowPopup(true)
    }
  }

  useEffect(() => {
    if (data) {
      form.setValue('title', data.title)
      form.setValue('contents', data.contents)
      form.setValue('rating', data.rating.toString())
      form.setValue('name', data.regId )
      form.resetField('password')
      form.setValue('images', data.files)
    }
  }, [data, form])

  
  useEffect(() => {
    if(params.id){
      const token = localStorage.getItem('token')
      localStorage.removeItem('id')
      localStorage.removeItem('token')
      if(!token){
        router.push('/review')
      }else {
        setTargetId(params.id[0])
      }
    }
  },[params.id])

  useEffect(() => {
    if(loading){
      document.body.style.overflow = 'hidden'
    }else {
      document.body.style.overflow = 'unset'
    }
  },[loading])

  return (
    <>
      <div className="pt-25 pb-4 lg:pt-15 lg:pb-7.5 bg-white border-b border-gray flex justify-between items-end">
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-black">후기 작성</h2>
        <p className="relative">
          <span className="absolute top-0 bottom-0 my-auto w-[5px] h-[5px] rounded-full bg-red"></span>
          <span className="font-pretendard text-light-gray text-sm lg:text-base pl-[10px]">필수항목</span>
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="pt-7.5">
          <FormField control={form.control} name="rating" render={({ field }) => (
            <FormItem className="grid grid-cols-12">
              <div className="col-span-12 xl:col-span-1 lg:col-span-2">
                <FormLabel required>별점</FormLabel>
              </div>
              <FormControlWrap>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue="5"
                    className="flex flex-row items-center gap-3 lg:gap-2"
                    value={field.value}
                  >
                    {[...Array(5)].map((i, index) =>
                      <FormItem className="inline-flex items-center my-0 !py-0" key={index}>
                        <FormControl className="sr-only">
                          <RadioGroupItem value={(index + 1).toString()} />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          <Star on={field.value >= (index + 1).toString()} />
                        </FormLabel>
                      </FormItem>
                    )}
                  </RadioGroup>
                </FormControl>
              </FormControlWrap>
            </FormItem>
          )} />

          <FormField control={form.control} name="title" render={({ field }) => (
            <FormItem className="grid grid-cols-12">
              <div className="col-span-12 xl:col-span-1 lg:col-span-2">
                <FormLabel required>제목</FormLabel>
              </div>
              <FormControlWrap>
                <FormControl>
                  <Input
                    variant="underline"
                    {...field}
                    placeholder="제목을 입력해 주세요.(최대 50자)"
                    value={decode(field.value) || ''}
                  />
                  
                </FormControl>
                <FormMessage />
              </FormControlWrap>
            </FormItem>
          )} />

          <FormField control={form.control} name="contents" render={({ field }) => (
            <FormItem className="grid grid-cols-12">
              <div className="col-span-12 xl:col-span-1 lg:col-span-2">
                <FormLabel required>내용</FormLabel>
              </div>
              <FormControlWrap>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="내용을 입력해 주세요."
                    value={decode(field.value) || ''}
                  />
                </FormControl>
                <FormMessage />
              </FormControlWrap>
            </FormItem>
          )} />

          <FormField control={form.control} name="images" render={({ field }) => (
            <FormItem className="grid grid-cols-12">
              <div className="col-span-12 xl:col-span-1 lg:col-span-2">
                <FormLabel>이미지 첨부</FormLabel>
              </div>
              <div className={clsx("w-[calc(100%_+_24px)] overflow-hidden lg:w-auto lg:overflow-auto lg:pt-0 col-span-12 lg:col-span-11 relative", field.value.length > 0 ? 'pt-[6px] lg:-mt-2.5' : 'pt-4') }>
                <FormControl>
                  <div className="w-full overflow-x-scroll lg:w-auto lg:overflow-x-auto">
                    <div className={clsx("flex items-end", field.value.length > 1 ? 'overflow-x-scroll lg:overflow-visible' : '')}>
                      {field.value.length > 0 && (
                        <div className="flex gap-2.5 w-auto h-32.5 lg:h-[162px] mr-2.5 items-end">
                          {field.value.map((file, index) => {
                            return (
                              <div key={file.fileId}>
                                <div className="relative w-30 h-30 lg:w-[152px] lg:h-[152px]">
                                  <div className="absolute top-1.5 left-1.5 flex items-center justify-center rounded-full w-6 h-6 bg-[#050505]/[.3] font-pretendard text-base font-semibold text-white">{index + 1}</div>
                                  <div className="w-full h-full cursor-pointer">
                                    {!file.fileLocal ?
                                      <Image
                                        src={`${process.env.NEXT_PUBLIC_FILE_PATH}/${file.fileId}`}
                                        width={152}
                                        height={152}
                                        className="w-full h-full object-cover"
                                        alt=""
                                      />
                                      :
                                      <Image
                                        src={`${file.blobURL}`}
                                        width={152}
                                        height={152}
                                        className="w-full h-full object-cover"
                                        alt=""
                                      />
                                    }
                                  </div>
                                  <button
                                    type="button"
                                    className="absolute -top-2.5 -right-2.5 flex items-center justify-center w-6 h-6 lg:w-8 lg:h-8 border-solid rounded-full bg-secondary"
                                    onClick={() => handleFileDelete(file)}
                                  >
                                    <FileDeleteIcon />
                                  </button>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      )}
                      <Button
                        type="button"
                        size="file"
                        className="min-w-30 w-30 h-30 lg:w-[152px] lg:h-[152px] bg-gray3 rounded-md"
                        onClick={() => handleFileAdd()}
                      >
                        <div className="w-8 h-8 lg:w-12 lg:h-12">
                          <ReviewfileAddIcon />
                        </div>
                        <FileUpload
                          ref={InputFileRef}
                          allowExtType="IMAGE"
                          customAllowExt="jpg|jpeg|png"
                          maxSizeMB={10}
                          accept={'image/jpg, image/jpeg, image/png'}
                          onChange={handleFileChange}
                          multiple={true}
                        />
                        <span className="sr-only">첨부하기</span>
                      </Button>
                    </div>
                  </div>
                </FormControl>
                <FormDescription className="relative w-[calc(100%_-_24px)] lg:w-full pl-2 lg:pl-2.5 mt-4 font-pretendard text-light-gray text-sm"><span className="absolute top-0 left-0">*</span>사진은 최대 5MB 이하의 PNG, JPG 파일 5장까지 첨부 가능합니다.​ 영상 첨부는 불가능합니다.</FormDescription>
              </div>
            </FormItem>
          )} />

          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem className="grid grid-cols-12">
              <div className="col-span-12 xl:col-span-1 lg:col-span-2">
                <FormLabel required>이름</FormLabel>
              </div>
              <FormControlWrap>
                <FormControl>
                  <Input
                    variant="underline"
                    placeholder="이름을 입력해 주세요."
                    {...field}
                    value={field.value || ''}
                    readOnly={targetId ? true: false}
                    maxLength={11}
                  />
                </FormControl>
                <FormMessage />
              </FormControlWrap>
            </FormItem>
          )} />

          <FormField control={form.control} name="password" render={({ field }) => (
            <FormItem className="grid grid-cols-12">
              <div className="col-span-12 xl:col-span-1 lg:col-span-2">
                <FormLabel required>비밀번호</FormLabel>
                <ToolTip className="ml-[6px] align-middle">
                  <ul>
                    <li className="relative pl-3">
                      <span className="absolute top-0 bottom-0 left-0 m-auto">•</span>숫자 4자리를 입력해 주세요.
                    </li>
                    <li className="relative pl-3">
                      <span className="absolute top-0 bottom-0 left-0 m-auto">•</span>동일한 숫자 3개 이상 연속 사용이 불가합니다.
                    </li>
                  </ul>
                </ToolTip>
              </div>
              <FormControlWrap>
                <FormControl>
                  <Input
                    variant="underline"
                    placeholder="숫자 4자리 입력해 주세요​."
                    type="password"
                    {...field}
                    value={field.value || ''}
                    maxLength={4}
                    onChange={(e) => field.onChange(e.target.value.replace(/[^0-9]/g, ''))}
                  />
                </FormControl>
                <FormMessage />
              </FormControlWrap>
            </FormItem>
          )} />

          <FormField control={form.control} name="termYn" render={({ field }) => (
            <FormItem className="relative mt-7.5 py-7.5 pl-7.5 bg-gray3">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={() => field.onChange(false)}
                  onClick={() => clickCheck(field.value)}
                />
              </FormControl>
              <FormLabel className="ml-4 mr-2 lg:mr-4 text-base lg:text-xl">개인정보 수집 및 이용 동의</FormLabel>
              <Button type="button" variant="underline" size="underline" onClick={() => setShowPopup(true)} className="text-xs lg:text-base">내용보기</Button>
              <Agree active={showPopup} onClose={handletermsPopup} />
              <FormMessage className="absolute bottom-[-30px] left-0"/>
            </FormItem>
          )} />

          <div className="mt-15 lg:flex lg:items-center lg:justify-between lg:flex-wrap">
            <div className="relative">
              <NotitxtIcon className="absolute top-[4px] lg:top-[3px] left-0 w-4 h-4 lg:w-5 lg:h-5" />
              <p className="pl-[26px] lg:pl-7 text-base lg:text-xl text-gold2 font-pretendard">등록된 후기 내용은 관리자가 확인한 후에 후기 게시판에 게시됩니다.</p>
            </div>
            <div className="mt-15 lg:mt-0 lg:space-x-4 grid grid-cols-12 gap-x-1.5 lg:block">
              <Button type="button" variant="border" size="lg" onClick={onBack} className="col-span-6">취소</Button>
              <Button type="submit" variant="color" size="lg" className="col-span-6" onClick={() => console.log(' durl')}>{targetId ? '수정': '등록'}</Button>
            </div>
          </div>

        </form>
      </Form>

      {loading &&
        <Loading
          loading={loading}
        />
      }
    </>
  )
}

export default GalleryWrite

const FormControlWrap = ({children, className}:{children:React.ReactNode, className?:string}) => {
  return(
    <div className={clsx("pt-4 lg:pt-0 col-span-12 lg:col-span-10 xl:col-span-11", className)}>
      {children}
    </div>
  )
}

const Star = ({ on }: { on?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="100%"
    height="100%"
    style={{ fill: on ? '#FFC223' : '#EBEBEB' }}
    className="lg:w-[21px] lg:h-5 w-7.5 h-7.5"
  >
    <path d="M29.9125 11.332C29.6852 10.6025 29.0346 10.1066 28.3017 10.1066H19.3697L16.6105 1.22541C16.3832 0.495902 15.7326 0 14.9997 0C14.2668 0 13.6123 0.495902 13.3889 1.22541L10.6297 10.1066H1.69381C0.960911 10.1066 0.310313 10.6025 0.0829954 11.332C-0.144322 12.0615 0.106511 12.8607 0.69832 13.3115L7.92545 18.7992L5.16629 27.6803C4.93897 28.4098 5.18588 29.209 5.78161 29.6598C6.37342 30.1107 7.18079 30.1107 7.7726 29.6598L14.9997 24.1721L22.2269 29.6598C22.5247 29.8852 22.8735 30 23.2224 30C23.5712 30 23.92 29.8893 24.2178 29.6598C24.8097 29.209 25.0605 28.4098 24.8332 27.6803L22.074 18.7992L29.3011 13.3115C29.8969 12.8607 30.1438 12.0615 29.9165 11.332H29.9125Z"/>
  </svg>
);