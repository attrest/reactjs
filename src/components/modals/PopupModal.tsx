import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'

type PopupModalProps = {
  active: boolean
  onClose?: () => void
  title: ReactNode
  children: ReactNode
  className?: string
}

const PopupModal = ({
  active,
  onClose = () => {},
  title,
  children,
  className,
}: PopupModalProps) => {
  return (
    <Transition appear show={active} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-65" />
        </Transition.Child>

        <div className="fixed top-0 left-0 w-full h-full inset-0 sm:overflow-y-auto flex items-center justify-center">
          <div className="flex px-6 lg:p-0 lg:mx-auto h-auto lg:h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex flex-col w-full lg:w-[522px] h-auto transform bg-white px-5 pt-11 pb-7.5 lg:px-9 lg:py-15 text-left sm:align-middle sm:shadow-xl transition-all">
                <Dialog.Title as="div" className={`${className ? className : ''} mb-10 lg:mb-6 break-keep w-full`}>
                  {title}
                </Dialog.Title>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default PopupModal
