'use client'

import { useRouter } from "next/navigation"
import { NoticeItem } from "@/types/notice"
import { format } from "date-fns"
import { PointerEventHandler, useState } from "react"
import { decode } from 'html-entities';

export const PlusIcon = ({ className }: { className?: string }) => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect y="5.14258" width="12" height="1.5" fill="#1D1D1D" />
      <rect x="6.85742" width="12" height="1.5" transform="rotate(90 6.85742 0)" fill="#1D1D1D" />
    </svg>
  )
}

const NoticeList = ({ data }: { data: NoticeItem[] }) => {
  const [pointerHasDown, setPointerHasDown] = useState<boolean>(false)
  const router = useRouter()

  const goDetail = (id: number) => {
    if(pointerHasDown) {
      router.push(`/notice/detail/${id}`)
      setPointerHasDown(false)
    }
  }

  return (
    <>
      <div className="mt-2.5 lg:mt-7.5 grid grid-cols-1 gap-x-7.5 gap-y-2.5 lg:gap-y-7.5 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <NoticeItem key={item.id} data={item} onClick={() => goDetail(item.id)} onPointerDown={() => setPointerHasDown(true)}/>
        ))
        }
      </div>
    </>
  )
}

const NoticePin = ({ className }: { className?: string }) => ( // 공지사항 고정 icon
  <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="56" height="56" fill="#C7A040" />
    <mask id="path-1-inside-1_718_3219" fill="white">
      <path d="M32 30.936L37.4801 25.4559L30.4762 18.4521L24.9962 23.9322L19.4002 23.8162L17.5735 25.6429L23.2577 31.3272L16.8643 37.7206L18.2041 39.0604L24.5975 32.667L30.3603 38.4298L32.187 36.6031L32 30.936Z" />
    </mask>
    <path d="M37.4801 25.4559L38.5408 26.5165L39.6014 25.4559L38.5408 24.3952L37.4801 25.4559ZM32 30.936L30.9393 29.8754C30.6459 30.1688 30.4871 30.5707 30.5008 30.9855L32 30.936ZM32.187 36.6031L33.2476 37.6637C33.5411 37.3703 33.6999 36.9684 33.6862 36.5536L32.187 36.6031ZM30.3603 38.4298L29.2997 39.4904L30.3603 40.5511L31.421 39.4904L30.3603 38.4298ZM24.5975 32.667L25.6582 31.6064L24.5975 30.5457L23.5369 31.6064L24.5975 32.667ZM18.2041 39.0604L17.1435 40.1211L18.2041 41.1817L19.2648 40.1211L18.2041 39.0604ZM16.8643 37.7206L15.8036 36.6599L14.7429 37.7206L15.8036 38.7812L16.8643 37.7206ZM23.2577 31.3272L24.3183 32.3879L25.379 31.3272L24.3184 30.2666L23.2577 31.3272ZM17.5735 25.6429L16.5128 24.5822C15.927 25.168 15.927 26.1178 16.5128 26.7036L17.5735 25.6429ZM19.4002 23.8162L19.4312 22.3166C19.0227 22.3081 18.6284 22.4667 18.3395 22.7556L19.4002 23.8162ZM24.9962 23.9322L24.9651 25.4318C25.3736 25.4403 25.7679 25.2817 26.0568 24.9928L24.9962 23.9322ZM30.4762 18.4521L31.5369 17.3914L30.4762 16.3308L29.4156 17.3914L30.4762 18.4521ZM36.4195 24.3952L30.9393 29.8754L33.0606 31.9967L38.5408 26.5165L36.4195 24.3952ZM30.5008 30.9855L30.6878 36.6526L33.6862 36.5536L33.4992 30.8866L30.5008 30.9855ZM31.1263 35.5424L29.2997 37.3691L31.421 39.4904L33.2476 37.6637L31.1263 35.5424ZM31.421 37.3691L25.6582 31.6064L23.5369 33.7277L29.2997 39.4904L31.421 37.3691ZM23.5369 31.6064L17.1434 37.9997L19.2648 40.1211L25.6582 33.7277L23.5369 31.6064ZM19.2648 37.9997L17.9249 36.6599L15.8036 38.7812L17.1435 40.1211L19.2648 37.9997ZM17.9249 38.7812L24.3183 32.3879L22.197 30.2665L15.8036 36.6599L17.9249 38.7812ZM24.3184 30.2666L18.6341 24.5823L16.5128 26.7036L22.197 32.3879L24.3184 30.2666ZM18.6341 26.7036L20.4608 24.8769L18.3395 22.7556L16.5128 24.5822L18.6341 26.7036ZM19.3691 25.3159L24.9651 25.4318L25.0272 22.4325L19.4312 22.3166L19.3691 25.3159ZM26.0568 24.9928L31.5369 19.5127L29.4156 17.3914L23.9355 22.8715L26.0568 24.9928ZM38.5408 24.3952L31.5369 17.3914L29.4156 19.5128L36.4195 26.5165L38.5408 24.3952Z" fill="white" mask="url(#path-1-inside-1_718_3219)" />
    <path d="M31.5352 15.2718L40.7275 24.4642" stroke="white" strokeWidth="1.5" />
  </svg>
)

const NoticeItem = ({ data, onClick, onPointerDown }: { data: NoticeItem, onClick: () => void ,onPointerDown:PointerEventHandler<HTMLButtonElement>}) => {
  const listClass = "relative flex flex-wrap flex-col justify-between border border-gray2 py-6 pl-5 pr-10 h-[136px] lg:pt-15 lg:px-10 lg:pb-[64px] lg:h-[304px] lg:hover:border-transparent lg:hover:after:w-[calc(100%_+_2px)] lg:hover:after:h-[calc(100%_+_2px)] lg:hover:after:border-gold2 lg:hover:after:border-[3px] lg:hover:after:absolute lg:hover:after:-top-px lg:hover:after:-left-px"

  return (
    <button type="button" onClick={onClick} title="상세페이지" onPointerDown={onPointerDown}>
      <div className="group relative">
        <div className={listClass}>
          {data.topYn === 'Y' &&
            <div className="absolute top-0 right-0 lg:w-14 lg:h-14 w-9 h-9">
              <NoticePin />
            </div>
          }
          <p className="text-left text-base lg:text-xl text-black font-bold line-clamp-2">{decode(data.title)}</p>
          <p className="flex items-center text-sm text-gray font-pretendard font-normal">
            <span>{format(new Date(data.modDt), 'yyyy.MM.dd')}</span>
          </p>
        </div>
      </div>
    </button>
  )
}

export default NoticeList