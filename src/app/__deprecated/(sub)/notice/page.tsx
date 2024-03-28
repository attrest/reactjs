"use client"

import { Button } from "@/components/ui/button";
import PaginationGroup from "@/components/ui/paginationGroup";
import { NoResultIcon } from "@/components/Svg"
import NoticeList, { PlusIcon } from "@/features/notice/NoticeList";
import Search from "@/features/search";
import { useCallback, useEffect, useState } from "react";
import { NoticeItem } from "@/types/notice";
import { Api } from "@/hooks/api/Api";
import { DataItem } from "@/types/common";

function Notice() {
  const [ pageNum, setPageNum]  = useState<number>(0)
  const [ searchKeyword, setSaerchKeyword ] = useState<string>('')
  const [ searchType, setSaerchType ] = useState<string>('A')
  const [ noticeList, setNoticeList ]= useState<NoticeItem[]>()
  const [ dataInfo, setDataInfo ] = useState<DataItem<NoticeItem>>()
  const [ init, setInit ] = useState<boolean>(false)
  const [ mobile, setMobile ] = useState<boolean>(false)

  const fetchNotices = useCallback(async () => {
    const path = '/api/notices'
    const fetchList = await Api.get<any>(`${path}`,{ params: {page:pageNum, searchKeyword:searchKeyword, searchType:searchType, size:9}})
    
    setDataInfo(fetchList.data.data)

    if(mobile) { // 모바일 더보기
      if(pageNum === 0 && init) { // 0 번째 페이지이거나 검색결과이면
        setNoticeList(fetchList.data.data.content)
        setInit(false)
      }else {
        noticeList && setNoticeList([...noticeList, ...fetchList.data.data.content])
      }
    } else { // 피시이면
      setNoticeList(fetchList.data.data.content)
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

  useEffect(() => {
    fetchNotices()
  }, [pageNum, searchKeyword, searchType])

  return (
    <>
      {noticeList ? 
        <>
        <Search 
          num={dataInfo ? dataInfo.totalElements : 0} 
          text='공지사항이' 
          onSearch={(keyword,serachType) => onSeacrh(keyword,serachType)} 
          searchText={searchKeyword} 
          searchType={searchType}
        />
          {noticeList.length > 0 ? 
          <>
            <NoticeList data={noticeList} />
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
          </> : 
          <>
            <div className="pt-[172px] pb-[170px] lg:pt-[137px] lg:pb-[140px] text-center lg:border-b lg:border-gray2">
              <div className="w-14 h-14 lg:w-[62px] lg:h-[62px] m-auto">
                <NoResultIcon />
              </div>
              <p className="mt-7.5 font-semibold text-gray text-lg">{init ? '검색결과가 없습니다.' : '등록된 공지사항이 없습니다.'}</p>
            </div>
          </>
        }
        </>
      : 
        <div className="h-[600px]"/>
      }
      
    </>
  )
}

export default Notice