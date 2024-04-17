import clsx from "clsx"
import { Oval } from "react-loader-spinner"

const Loading = ({ loading }: { loading: boolean }) => {
  return (
    <>
      <div className="fixed top-0 left-0 bg-loadingBg w-full h-full z-10"></div>
      <LoadingWrap>
        <div className="lg:w-25 lg:h-25 w-30 h-30">
          <Oval
            color="#1d1d1d"
            visible={loading}
            width="100%"
            height="100%"
            ariaLabel="loading"
            secondaryColor="#EBEBEB"
          />
        </div>
      </LoadingWrap>
      <LoadingWrap>
        <LoadingIcon
          className="lg:w-7 lg:h-7 w-8.5 h-8.5"
        />
      </LoadingWrap>
    </>
  )
}

export default Loading

const LoadingWrap = ({children, className}:{children:React.ReactNode, className?:string}) => {
  return (
    <div className={clsx("fixed top-0 left-0 w-full h-full flex justify-center items-center z-50", className)}>
      {children}
    </div>
  )
}

const LoadingIcon = ({ className }: { className?: string }) => {
  return (
    <>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path fillRule="evenodd" clipRule="evenodd" d="M13.8553 17.6399L7.34938 0H0V28H5.78735V10.5153H5.99822L12.1292 27.8448H15.8859L22.0091 10.597H22.22V20.6667H27.9995V0H20.6501L14.1364 17.6399H13.8553ZM25.1673 27.9999C26.732 27.9999 28.0006 26.7314 28.0006 25.1666C28.0006 23.6017 26.732 22.3332 25.1673 22.3332C23.6025 22.3332 22.334 23.6017 22.334 25.1666C22.334 26.7314 23.6025 27.9999 25.1673 27.9999Z" fill="#1D1D1D" />
      </svg>
    </>
  )
}