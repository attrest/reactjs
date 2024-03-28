'use client'

import React, { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button";
import NoticeDetailItem from "@/features/notice/NoticeDetail"
import { useNoticeDetail } from "@/hooks/api/notice"
import { useDialog } from "@/components/modals/DialogContext";

function NoticeDetail() {

  const params = useParams()
  const router = useRouter()
  const [targetId, setTargetId] = useState<string>()  // 페이지 넘어왔을 때
  const { data, isError } = useNoticeDetail(targetId)
  const { showDialog, closeDialog } = useDialog()

  const toList = () => {
    router.push('/notice')
  }

  useEffect(() => {
    if (params.id) {
      setTargetId(params.id[0])
    }
  }, [params])

  useEffect(() => {
    if(isError) {
      showDialog({
        content: `잘못된 접근이거나 요청하신 페이지를 찾을 수 없습니다.`,
        onClose: () => {
          router.push('/')
          closeDialog()
        },
      })
    }
  }, [isError])
  
  return (
    <>
      { data &&
        <>
          <NoticeDetailItem data={data} />
          <div className="mt-15 grid lg:justify-items-end">
            <Button type="button" variant="border" className="w-full lg:w-auto text-base lg:text-16" onClick={toList}>목록</Button>
          </div>
        </>
      }
    </>
  )
}

export default NoticeDetail