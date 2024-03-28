'use client'

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { useReviewsDetail } from "@/hooks/api/review"
import ReviewDetailItem from "@/features/review/detail/ReviewDetail"
import { Button } from "@/components/ui/button"
import { ReviewWriteIcon } from "@/components/Svg"

const ReviewDetail = () => {
  const params = useParams()
  const router = useRouter()
  const [targetId, setTargetId] = useState<string>()
  const { data } = useReviewsDetail(targetId)

  const toList = () => {
    router.push('/review')
  }

  const toWrite = () => {
    router.push('/review/write')
  }

  useEffect(() => {
    if (params.id) {
      setTargetId(params.id[0])
    }
  }, [params])

  return (
    <>
      {data &&
        <>
          <ReviewDetailItem data={data} />
          <div className="mt-15 flex flex-col lg:flex-row lg:justify-end lg:space-x-2.5">
            <Button type="button" variant="border" className="lg:w-auto text-base" onClick={toList}>목록</Button>
            <Button type="button" variant="color" className="hidden lg:block lg:w-auto text-base" onClick={toWrite}>후기 작성하기</Button>
          </div>
          <div className="block lg:hidden fixed bottom-7 right-4 z-10">
            <Button type="button" className="p-0 w-[70px] h-[70px]" onClick={toWrite}>
              <ReviewWriteIcon />
              <span className="sr-only">후기 작성하기</span>
            </Button>
          </div>
        </>
      }
    </>
  )
}

export default ReviewDetail