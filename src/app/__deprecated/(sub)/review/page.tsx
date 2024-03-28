"use client"

import { useRouter } from "next/navigation"
import { NoResultIcon } from "@/components/Svg";
import { Button } from "@/components/ui/button";
import PaginationGroup from "@/components/ui/paginationGroup";
import { PlusIcon } from "@/features/gallery/GelleryList";
import CardList from "@/features/review/CardList";
import Search from "@/features/search";
import { Api } from "@/hooks/api/Api";
import { DataItem } from "@/types/common";
import { ReviewItem } from "@/types/review";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ReviewWriteIcon, NoDataIcon } from "@/components/Svg"

const Review = () => {
  const router = useRouter()
  const [pageNum, setPageNum] = useState<number>(0)
  const [searchKeyword, setSaerchKeyword] = useState<string>('')
  const [searchType, setSaerchType] = useState<string>('A')
  const [ reviewList, setReviewList ]= useState<ReviewItem[]>()
  const [ dataInfo, setDataInfo ] = useState<DataItem<ReviewItem>>()
  const [init ,setInit] = useState<boolean>(false)
  const [ mobile, setMobile ] = useState<boolean>(false)

  const fetchReviews = useCallback(async () => {
    const path = '/api/reviews'
    const fetchList = await Api.get<any>(`${path}`,{ params: {page:pageNum, searchKeyword:searchKeyword, searchType:searchType, size:9}})
    
    setDataInfo(fetchList.data.data)

    if(mobile) { // 모바일 더보기
            if(pageNum === 0 && init) { // 0 번째 페이지이거나 검색결과이면
        setReviewList(fetchList.data.data.content)
        setInit(false)
      }else {
        reviewList && setReviewList([...reviewList, ...fetchList.data.data.content])
      }
    } else { // 피시이면
      setReviewList(fetchList.data.data.content)
    }
    
  },[pageNum, searchKeyword, searchType])

  const onSeacrh = (keyword:string, type:string) => {
    setInit(true)
    setPageNum(0)
    setSaerchKeyword(keyword)
    setSaerchType(type)
  }

  const onMoreList = () => {
    setMobile(true)
    setPageNum(pageNum + 1)
  }
  
  const toWrite = () => {
    router.push('/review/write')
  }

  useEffect(() => {
    fetchReviews()
  }, [pageNum, searchKeyword, searchType])

  return (
    <>
    {reviewList ? 
      <>
        <div className="relative hidden lg:block">
          <div className="absolute top-[-80px] right-0">
            <Button asChild className="px-5 py-5 bg-black rounded-none">
              <Link href={'/review/write'}><span className="font-pretendard font-medium text-16 text-white">후기 작성하기</span></Link>
            </Button>
          </div> 
        </div>
        <>
          <Search 
              num={dataInfo ? dataInfo.totalElements : 0} 
              onSearch={(keyword,serachType) => onSeacrh(keyword,serachType)} 
              searchText={searchKeyword} 
              searchType={searchType}
              regType
            />
            {reviewList?.length > 0 ? 
              <>
                <CardList data={reviewList} />
                {dataInfo && dataInfo.totalPages > 1 && 
                  <>
                    { !dataInfo.last && 
                      <div className="block sm:hidden mt-15">
                        <Button variant="fill" className="w-full text-black" onClick={onMoreList}>
                          더보기
                          <PlusIcon className="ml-[5px]"/>
                        </Button>
                      </div>
                    }
                    <div className="hidden sm:block">
                      <PaginationGroup data={dataInfo} moveNum={setPageNum} />
                    </div>
                  </>
                }
              </>
            :
              <>
                <div className="pt-[172px] pb-[170px] lg:pt-[137px] lg:pb-[140px] text-center lg:border-b lg:border-gray2">
                  <div className="w-14 h-14 lg:w-[62px] lg:h-[62px] m-auto">
                    {init ? <NoResultIcon /> : <NoDataIcon />}
                  </div>
                  <p className="mt-7.5 font-semibold text-gray text-lg">{init ? '검색결과가 없습니다.' : '등록된 후기 게시글이 없습니다.'}</p>
                </div>
              </>
            }
        </>
        <div className="block lg:hidden fixed bottom-7 right-4 z-10">
          <Button type="button" className="p-0 w-[70px] h-[70px]" onClick={toWrite}>
            <ReviewWriteIcon />
            <span className="sr-only">후기 작성하기</span>
          </Button>
        </div>
      </>
    :
    <div className="h-[600px]"/>
    }
      
    </>
  )
}

export default Review
