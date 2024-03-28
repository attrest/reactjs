"use client"

import { Button } from "@/components/ui/button";
import PaginationGroup from "@/components/ui/paginationGroup";
import GalleryList, { PlusIcon } from "@/features/gallery/GelleryList";
import SlidePopup from "@/features/gallery/SlidePopup";
import { Api } from "@/hooks/api/Api";
import { DataItem } from "@/types/common";
import { GalleryItem } from "@/types/gallery";
import { useCallback, useEffect, useState } from "react";

const IconImage = () => {
  return (
    <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30.9998 56.8334C45.2672 56.8334 56.8332 45.2674 56.8332 31.0001C56.8332 16.7327 45.2672 5.16675 30.9998 5.16675C16.7325 5.16675 5.1665 16.7327 5.1665 31.0001C5.1665 45.2674 16.7325 56.8334 30.9998 56.8334Z" fill="#D3D5DA"/>
      <path d="M40.3335 22.8333H21.6668V39.1667L32.5078 28.3242C32.9634 27.8686 33.702 27.8686 34.1577 28.3241L40.3335 34.5121V22.8333ZM19.3335 21.659C19.3335 21.0189 19.8647 20.5 20.4906 20.5H41.5097C42.1488 20.5 42.6668 21.0191 42.6668 21.659V40.341C42.6668 40.9811 42.1356 41.5 41.5097 41.5H20.4906C19.8516 41.5 19.3335 40.9809 19.3335 40.341V21.659ZM26.3335 29.8333C25.0448 29.8333 24.0002 28.7887 24.0002 27.5C24.0002 26.2113 25.0448 25.1667 26.3335 25.1667C27.6222 25.1667 28.6668 26.2113 28.6668 27.5C28.6668 28.7887 27.6222 29.8333 26.3335 29.8333Z" fill="white"/>
    </svg>
  )
}

const Gallery = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [popupData, setPopupData] = useState<GalleryItem>()
  const [pageNum, setPageNum] = useState<number>(0) // page 정보
  // const { data } = useGallerys(pageNum)
  const [ galleryList, setGalleryList ]= useState<GalleryItem[]>()
  const [ dataInfo, setDataInfo ] = useState<DataItem<GalleryItem>>()
  const [ mobile, setMobile ] = useState<boolean>(false)

  const fetchGallerys = useCallback(async (pageNum:number) => {
    const path = '/api/gallery'

    const fetchList = await Api.get<any>(`${path}`,{ params: {page:pageNum, size:9 }})
    setDataInfo(fetchList.data.data)

    if(mobile) {
      if(pageNum === 0) {
        setGalleryList(fetchList.data.data.content)
      }else {
        galleryList && setGalleryList([...galleryList, ...fetchList.data.data.content])
      }
    } else {
      setGalleryList(fetchList.data.data.content)
    }

  },[pageNum])

  const handleUserNamePopup = () => {
    setShowPopup(false)
  }

  const galleryClick = (data:GalleryItem) => {
    setShowPopup(true)
    setPopupData(data)
  }

  const onMoreList = () => {
    setMobile(true)
    setPageNum(pageNum + 1)
  }

  useEffect(() => {
    fetchGallerys(pageNum)
  }, [pageNum])

  return (
    <>
      {galleryList ? 
        <>
        {dataInfo && galleryList.length > 0 ?  
          <>
            <GalleryList data={galleryList} onClick={galleryClick}/>
            { dataInfo.totalPages > 1 && 
              <>
              {!dataInfo.last && 
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
          <div className="pt-[172px] pb-[170px] lg:pt-[137px] lg:pb-[140px] text-center lg:border-b lg:border-gray2">
            <div className="w-14 h-14 lg:w-[62px] lg:h-[62px] m-auto">
              <IconImage />
            </div>
            <p className="mt-7.5 font-semibold text-gray text-lg">등록된 갤러리 사진이 없습니다.</p>
          </div>   
        }
      </> 
      : 
      <div className="h-[600px]"/>
      }
      

      {popupData && <SlidePopup active={showPopup} data={popupData} onClose={handleUserNamePopup} /> }
    </>
    
  )
}

export default Gallery