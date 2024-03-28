'use client'

import { ForwardedRef, forwardRef, useState } from 'react'

type allowExtType = 'IMAGE' | 'VIDEO' | 'FILE' | 'ALL'
const allowExt = {
  IMAGE: 'jpg|jpeg|gif|bmp|png',
  VIDEO: 'mp4|m4v|avi|asf|wmv|mkv|ts|mpg|mpeg|mov|flv|ogv',
  FILE: 'tif|tiff|tga|psd|ai|mp3|wav|flac|tta|tak|aac|wma|ogg|m4a|doc|docx|hwp|txt|rtf|xml|pdf|wks|wps|xps|md|odf|odt|ods|odp|csv|tsv|xls|xlsx|ppt|pptx|pages|key|numbers|show|ce|zip|gz|bz2|rar|7z|lzh|alz',
}
interface FileUploadProps {
  allowExtType: allowExtType
  customAllowExt?: string
  maxSizeMB?: number
  accept?: string
  multiple?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onError?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  (
    {
      allowExtType,
      customAllowExt,
      maxSizeMB = 5,
      accept = 'image/jpeg, image/png',
      multiple = false,
      onChange,
      onError,
    }: FileUploadProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {

    const [data, setValue] = useState([])
    
    // 파일 확장자 유효성 체크
    const fileExtensionValid = ({ name }: { name: string }): boolean => {
      const lastIndex = name.lastIndexOf('.')
      const ext = name.substring(lastIndex + 1).toLowerCase()

      let regex
      if (allowExtType == 'ALL') {
        regex = new RegExp('(' + Object.values(allowExt).join('|') + ')', 'i')
      } else {
        regex = new RegExp('(' + allowExt[allowExtType] + ')', 'i')
      }

      if (!regex.test(ext)) return false

      if (customAllowExt) {
        regex = new RegExp('(' + customAllowExt + ')', 'i')
        if (!regex.test(ext) || ext === '') {
          return false
        }
      }
      return true
    }

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      
      const file = e.target.files && e.target.files[0]
      if (!file) {
        if (onError) {
          onError(e)
        }
        return
      }

      // 파일 확장자 체크
      if (!fileExtensionValid(file)) {
        e.target.value = ''
        const errorMessage = allowExtType == 'ALL'
          ? `첨부 불가능한 파일이 포함되어 있습니다.`
          : `(${customAllowExt != ''
            ? customAllowExt?.replace(/\|/g, ', ')
            : allowExt[allowExtType]?.replace(/\|/g, ', ')
          }) 확장자만 업로드 가능합니다.`

        if (onError) {
          onError(e)
        }
        return
      }

      // 파일 용량 체크
      if (file.size > maxSizeMB * 1024 * 1024) {
        e.target.value = ''
        const errorMessage = '업로드 가능한 최대 용량은 5MB입니다.'
        if (onError) {
          onError(e)
        }
        return
      }

      if (onChange) {
        onChange(e)
      }

    }

    return (
      <>
        <input
          ref={ref}
          type="file"
          className="hidden"
          accept={accept}
          multiple={multiple}
          onChange={handleFileChange}
        />
      </>
    )
  },
)


FileUpload.displayName = "FileUpload";
