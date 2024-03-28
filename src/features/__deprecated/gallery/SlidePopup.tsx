import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import GallerySlide from './Slide'
import { Button } from '@/components/ui/button'
import { CloseIcon } from '@/components/Svg'
import { GalleryItem } from '@/types/gallery'
import Image from 'next/image'

type PopupModalProps = {
  active: boolean
  onClose?: () => void
  className?: string
  data:GalleryItem
}

const SlidePopup = ({
  active,
  data,
  onClose = () => {}
}: PopupModalProps) => {
  return (
    <Transition appear show={active} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Dialog.Panel>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-[90]"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black" />
          </Transition.Child>

          <div className="fixed left-0 top-0 w-full h-full inset-0 sm:overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center relative">

              <div className='absolute top-3 right-3 flex justify-end w-full xl:hidden'>
                <Button size='icon' onClick={onClose}> 
                  <CloseIcon className='w-6 h-6  xl:w-auto xl:h-auto'/>
                  <span className='sr-only'>닫기</span>
                </Button>
              </div>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-full flex flex-col sm:h-auto transform pt-4 pb-6 text-left align-middle transition-all">
                  <div className='justify-end w-full mt-3 pr-3 xl:w-[41.429%] xl:my-0 xl:mx-auto xl:flex xl:pr-0 hidden'>
                    <Button onClick={onClose} className='mb-7.5' size='icon'> 
                      <CloseIcon className='w-6 h-6 xl:w-auto xl:h-auto focus:outline-none'/>
                      <span className='sr-only'>닫기</span>
                    </Button>
                  </div>
                  {data.files.length > 1 ? 
                    <GallerySlide list={data.files} title={data.title}/> :
                    <div className='xl:w-[41.429%] xl:my-0 xl:mx-auto xl:flex flex-col'>
                      <div className='w-full h-0 pt-[56.25%] relative overflow-hidden'>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_FILE_PATH}/${data.files[0].fileId}`}
                          fill
                          alt={data.title + ' 이미지'}
                          className='absolute top-0 left-0 object-cover object-center'
                        />
                      </div>
                      <p className='text-white mt-5 text-base ml-6 xl:ml-0 lg:text-xl'>{data.title}</p>
                    </div>
                  }
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  )
}

export default SlidePopup
