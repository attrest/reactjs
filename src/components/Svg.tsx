interface SvgProps {
  sizeW?: string
  sizeH?: string
  active?: boolean
  color?: string[]
  className?: string
}

export const RightIcon = ({ active = true, sizeW = "21", sizeH = "21", color = ['black', '#D3D5DA'], className }: SvgProps) => (
  <svg width={sizeW} height={sizeH} viewBox={`0 0 ${sizeW} ${sizeH}`} fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M5.96046e-08 12.25H19L13.541 6.25" stroke={active ? color[0] : color[1]} strokeWidth="1.5" />
  </svg>
)

export const LeftIcon = ({ active = true, sizeW = "21", sizeH = "21", color = ['black', '#D3D5DA'], className }: SvgProps) => (
  <svg width={sizeW} height={sizeH} viewBox={`0 0 ${sizeW} ${sizeH}`} fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M21 12.25H2L7.45903 6.25" stroke={active ? color[0] : color[1]} strokeWidth="1.5" />
  </svg>
)

export const RightIcon2 = ({ active = true, sizeW = "21", sizeH = "21", color = ['black', '#D3D5DA'], className }: SvgProps) => (
  <svg width={sizeW} height={sizeH} viewBox={`0 0 ${sizeW} ${sizeH}`} fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M0 11.5H14M13.541 5.5L19 11.5H14M14 11.5L9 6.5" stroke={active ? color[0] : color[1]} strokeWidth="1.5"/>
    </svg>

)

export const LeftIcon2 = ({ active = true, sizeW = "21", sizeH = "21", color = ['black', '#D3D5DA'], className }: SvgProps) => (
  <svg width={sizeW} height={sizeH} viewBox={`0 0 ${sizeW} ${sizeH}`} fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M21 11.5H7M7.45903 5.5L2 11.5H7M7 11.5L12 6.5" stroke={active ? color[0] : color[1]} strokeWidth="1.5"/>
  </svg>
)

export const CloseIcon = ({ sizeW = "36", sizeH = "36", color = ['white'], className }: SvgProps) => (
  <svg width={sizeW} height={sizeH} viewBox={`0 0 ${sizeW} ${sizeH}`} fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M17.0002 17.335L28.3347 6.00049L29.7489 7.4147L18.4144 18.7492L29.3347 29.6695L27.9205 31.0838L17.0002 20.1634L6.41436 30.7492L5.00015 29.335L15.5859 18.7492L4.58594 7.74923L6.00015 6.33501L17.0002 17.335Z" fill={color[0]} />
  </svg>
)

export const SelectArrow = ({ sizeW = "16", sizeH = "17", className }: SvgProps) => ( // 게시판 select icon
  <svg width={sizeW} height={sizeH} viewBox={`0 0 ${sizeW} ${sizeH}`} fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M2.9203 4.76752L1.97363 5.7134L7.63363 11.4088L13.2936 5.7134L12.347 4.76752L7.63363 9.51035L2.9203 4.76752Z" fill="#050505" />
  </svg>
)

export const SearchIcon = ({ sizeW = "20", sizeH = "20", className }: SvgProps) => ( // 게시판 search icon
  <svg width={sizeW} height={sizeH} viewBox={`0 0 ${sizeW} ${sizeH}`} fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M15.0262 13.8474L18.5951 17.4163L17.4166 18.5948L13.8477 15.0259C12.5644 16.0525 10.937 16.6667 9.16699 16.6667C5.02699 16.6667 1.66699 13.3067 1.66699 9.16669C1.66699 5.02669 5.02699 1.66669 9.16699 1.66669C13.307 1.66669 16.667 5.02669 16.667 9.16669C16.667 10.9367 16.0528 12.5641 15.0262 13.8474ZM13.3542 13.229C14.3732 12.1789 15.0003 10.7464 15.0003 9.16669C15.0003 5.94377 12.3899 3.33335 9.16699 3.33335C5.94408 3.33335 3.33366 5.94377 3.33366 9.16669C3.33366 12.3896 5.94408 15 9.16699 15C10.7467 15 12.1792 14.3729 13.2293 13.3539L13.3542 13.229Z" fill="#1D1D1D" />
  </svg>
)

export const ReviewCharacter = ({ sizeW = "55", sizeH = "55", className }: SvgProps) => ( // 후기게시판 상세 > 관리자 이미지
  <svg width={sizeW} height={sizeH} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="27.5" cy="27.5" r="27" fill="white" stroke="#EBEBEB" />
    <g clipPath="url(#clip0_403_10492)">
      <path d="M19.1656 22.6564L14.7998 21V24.3129L19.1656 22.6564Z" fill="#0D3E21" />
      <path d="M9.57544 24.0132L10.964 27.1696H11.024L12.4143 24.0132H13.9829V29.0234H12.7493V25.9094H12.7043L11.3974 28.9956H10.5956L9.28705 25.8948H9.24205V29.0234H8.00684V24.0132H9.57544Z" fill="#0D3E21" />
      <path d="M16.0634 29.0235H14.7998V22.4182H16.0634V29.0235Z" fill="#0D3E21" />
      <path d="M19.3859 24.9826C18.5941 24.9797 18.1073 25.5425 18.1073 26.5191C18.1073 27.4957 18.6057 28.0557 19.3775 28.0557C19.9576 28.0557 20.3577 27.7648 20.4544 27.2735L21.7329 27.2808C21.6329 28.1741 20.8111 29.0937 19.3559 29.0937C17.9006 29.0937 16.8154 28.1668 16.8154 26.5191C16.8154 24.8715 17.9223 23.9446 19.3559 23.9446C20.6444 23.9446 21.5996 24.6259 21.7329 25.8203H20.4544C20.3844 25.3042 19.986 24.9797 19.3842 24.9826H19.3859Z" fill="#0D3E21" />
      <path d="M22.4707 24.0132H23.7343V26.0337H25.8963V24.0132H27.1598V29.0234H25.8963V26.9956H23.7343V29.0234H22.4707V24.0132Z" fill="#0D3E21" />
      <path d="M27.9785 24.0132H31.7008V24.9752H29.2421V26.0337H31.5091V26.9956H29.2421V28.0614H31.7092V29.0234H27.9785V24.0132Z" fill="#0D3E21" />
      <path d="M32.5127 24.0132H33.7762V28.0614H36.035V29.0234H32.5127V24.0132Z" fill="#0D3E21" />
      <path d="M36.5254 29.0234L38.354 24.0132H40.0327L41.853 29.0234H40.4927L40.1293 27.9503H38.2574L37.894 29.0234H36.5271H36.5254ZM39.8243 27.0512L39.2142 25.2515H39.1692L38.5607 27.0512H39.8243Z" fill="#0D3E21" />
      <path d="M46.9885 29.0234H45.9117L43.728 26.0819H43.6913V29.0234H42.4277V24.0132H43.5196L45.6816 26.9547H45.7266V24.0132H46.9902V29.0234H46.9885Z" fill="#0D3E21" />
      <path d="M19.2699 31.3231C18.9149 31.3231 18.6565 31.5658 18.6582 32.0015C18.6582 32.4415 18.9115 32.6857 19.2799 32.6857C19.6133 32.6857 19.825 32.5088 19.8317 32.2339H19.32V31.9591H20.2151V32.1915C20.2151 32.6901 19.825 32.9986 19.2799 32.9986C18.6715 32.9986 18.2581 32.6184 18.2598 32.0044C18.2598 31.3831 18.6898 31.0103 19.2683 31.0103C19.7534 31.0103 20.1301 31.2749 20.1968 31.6535H19.7917C19.72 31.4474 19.5383 31.3217 19.2716 31.3217L19.2699 31.3231Z" fill="#231916" />
      <path d="M21.7169 32.9971C21.1368 32.9971 20.7051 32.6272 20.7051 32.0029C20.7051 31.3787 21.1352 31.0088 21.7169 31.0088C22.2987 31.0088 22.7288 31.3772 22.7288 32.0029C22.7288 32.6272 22.2953 32.9971 21.7169 32.9971ZM21.7169 32.6842C22.077 32.6842 22.3304 32.4445 22.3287 32.0029C22.3287 31.5614 22.077 31.3217 21.7169 31.3217C21.3569 31.3217 21.1035 31.5614 21.1051 32.0029C21.1051 32.4445 21.3585 32.6842 21.7169 32.6842Z" fill="#231916" />
      <path d="M23.2686 31.0366H23.6636V32.677H24.6388V32.9708H23.2686V31.0366Z" fill="#231916" />
      <path d="M25.1426 31.0366H26.5562V31.3276H25.5393V31.8568H26.4595V32.1477H25.5393V32.9708H25.1442V31.0366H25.1426Z" fill="#231916" />
      <path d="M27.9062 31.0366H29.6632V31.3276H28.9848V32.9708H28.5897V31.3276H27.9079V31.0366H27.9062Z" fill="#231916" />
      <path d="M31.0216 32.9971C30.4415 32.9971 30.0098 32.6272 30.0098 32.0029C30.0098 31.3787 30.4398 31.0088 31.0216 31.0088C31.6034 31.0088 32.0334 31.3772 32.0334 32.0029C32.0334 32.6272 31.6 32.9971 31.0216 32.9971ZM31.0216 32.6842C31.3817 32.6842 31.635 32.4445 31.6334 32.0029C31.6334 31.5614 31.3817 31.3217 31.0216 31.3217C30.6615 31.3217 30.4082 31.5614 30.4098 32.0029C30.4098 32.4445 30.6632 32.6842 31.0216 32.6842Z" fill="#231916" />
      <path d="M34.3645 31.0366V32.2998C34.3645 32.715 34.0061 33.0001 33.4694 33.0001C32.9326 33.0001 32.5759 32.715 32.5742 32.2998V31.0366H32.9693V32.2705C32.9693 32.5147 33.1643 32.6887 33.4694 32.6901C33.7744 32.6901 33.9661 32.5147 33.9661 32.2705V31.0366H34.3645Z" fill="#231916" />
      <path d="M34.959 31.0366H35.7875C36.2925 31.0366 36.5626 31.2852 36.5643 31.6536C36.5643 31.9167 36.4259 32.1112 36.1675 32.2033L36.6443 32.9694H36.2025L35.7708 32.2618H35.3574V32.9694H34.9623V31.0352L34.959 31.0366ZM35.7258 31.9708C36.0242 31.9708 36.1575 31.8597 36.1575 31.6536C36.1575 31.4474 36.0242 31.3276 35.7258 31.3276H35.3541V31.9708H35.7258Z" fill="#231916" />
      <path d="M16.8348 32.0847H8" stroke="#0D3E21" strokeWidth="0.5" strokeMiterlimit="10" />
      <path d="M46.9996 32.0847H38.1631" stroke="#0D3E21" strokeWidth="0.5" strokeMiterlimit="10" />
    </g>
    <defs>
      <clipPath id="clip0_403_10492">
        <rect width={sizeW} height={sizeH} fill="white" transform="translate(8 21)" />
      </clipPath>
    </defs>
  </svg>
)

export const ReviewWriteIcon = ({ sizeW = "70", sizeH = "70", className }: SvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox={`0 0 ${sizeW} ${sizeH}`} fill="none" className={className}>
    <circle cx="35" cy="35" r="35" fill="#C99F32" />
    <path d="M22.5456 36.0305L33.8956 25.7851L38.9813 31.7055L27.1263 42.1607L20.9675 42.1607L22.5456 36.0305ZM44.8709 26.5113L42.2433 28.8287L37.0466 22.9408L39.8713 20.3909C39.9781 20.2946 40.1439 20.3079 40.2339 20.4201L43.427 24.4022L43.4316 24.408L43.4364 24.4137L44.8975 26.1636C44.9843 26.2676 44.9725 26.4217 44.8709 26.5113Z" fill="white" stroke="white" strokeWidth="1.5" />
    <path d="M20.748 46.125V45.75H45.498V46.125H20.748Z" stroke="white" strokeWidth="1.5" />
  </svg>
)

export const NoResultIcon = ({ sizeW = "62", sizeH = "62", className }: SvgProps) => ( // 게시판 결과 없을 경우
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox={`0 0 ${sizeW} ${sizeH}`} fill="none" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M31.0003 56.8332C45.2677 56.8332 56.8337 45.2672 56.8337 30.9998C56.8337 16.7325 45.2677 5.1665 31.0003 5.1665C16.733 5.1665 5.16699 16.7325 5.16699 30.9998C5.16699 45.2672 16.733 56.8332 31.0003 56.8332ZM33.067 19.8915H28.9337V35.3915H33.067V19.8915ZM28.9337 37.9749H33.067V42.1082H28.9337V37.9749Z" fill="#D3D5DA" />
  </svg>
)

export const NoDataIcon = ({ sizeW = "62", sizeH = "62", className }: SvgProps) => ( // 등록된 후기 게시글이 없을 경우
  <svg width={sizeW} height={sizeH} viewBox={`0 0 ${sizeW} ${sizeH}`} fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M31.0003 56.8337C45.2677 56.8337 56.8337 45.2677 56.8337 31.0003C56.8337 16.733 45.2677 5.16699 31.0003 5.16699C16.733 5.16699 5.16699 16.733 5.16699 31.0003C5.16699 45.2677 16.733 56.8337 31.0003 56.8337Z" fill="#D3D5DA" />
    <path d="M42 27.4173V19.3333C42 18.597 41.4031 18 40.6667 18H39.3333C36.6952 20.6382 31.7369 22.1164 28.6667 22.8171V37.1829C31.7369 37.8836 36.6952 39.3619 39.3333 42H40.6667C41.4031 42 42 41.4031 42 40.6667V32.5827C43.1501 32.2867 44 31.2425 44 30C44 28.7575 43.1501 27.7133 42 27.4173ZM20.6667 23.3333C19.1939 23.3333 18 24.5272 18 26V34C18 35.4728 19.1939 36.6667 20.6667 36.6667H22L23.3333 43.3333H26V23.3333H20.6667Z" fill="white" />
  </svg>
)

export const NotitxtIcon = ({ sizeW = "100%", sizeH = "100%", className }: SvgProps) => {
  return (
    <svg width={sizeW} height={sizeH} viewBox={`0 0 20 20`} fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="20" height="20" rx="10" fill="#D4B156" />
      <path d="M11.1562 4.6875L10.9531 12.6094H8.95312L8.75 4.6875H11.1562ZM9.96875 16.1406C9.23438 16.1406 8.64062 15.5469 8.65625 14.8281C8.64062 14.1094 9.23438 13.5312 9.96875 13.5312C10.6562 13.5312 11.2656 14.1094 11.2656 14.8281C11.2656 15.5469 10.6562 16.1406 9.96875 16.1406Z" fill="white" />
    </svg>
  )

}

export const ReviewfileAddIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 48 48" fill="none">
      <path d="M38.1421 38.1421C30.3316 45.9526 17.6683 45.9525 9.85787 38.1421C2.04738 30.3316 2.04738 17.6683 9.85787 9.85784C17.6683 2.04742 30.3316 2.04735 38.1421 9.85784C45.9526 17.6683 45.9526 30.3317 38.1421 38.1421ZM22 22L14 22V26L22 26L22 33.9999L25.9999 33.9999L26 26H33.9999V22H26L25.9999 14L22 14L22 22Z" fill="#EBEBEB" />
      <path d="M22 22L14 22V26L22 25.9999L22 33.9999L25.9999 33.9999L26 25.9999L33.9999 25.9999V22L26 22L25.9999 14L22 14L22 22Z" fill="#666666" />
    </svg>
  )
}

export const ErrorIcon = ({ className }: SvgProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 90 90" fill="none" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M45 82.5C65.7107 82.5 82.5 65.7107 82.5 45C82.5 24.2893 65.7107 7.5 45 7.5C24.2893 7.5 7.5 24.2893 7.5 45C7.5 65.7107 24.2893 82.5 45 82.5ZM48 28.875H42V51.375H48V28.875ZM42 55.125H48V61.125H42V55.125Z" fill="#D3D5DA" />
    </svg>
  )
}

export const InfoIcon = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1256_7316)">
        <path d="M9.99967 19.1668C15.0623 19.1668 19.1663 15.0628 19.1663 10.0002C19.1663 4.93755 15.0623 0.833496 9.99967 0.833496C4.93706 0.833496 0.833008 4.93755 0.833008 10.0002C0.833008 15.0628 4.93706 19.1668 9.99967 19.1668Z" fill="#D3D5DA"/>
        <path d="M9.9079 6.42513C10.4579 6.42513 10.8246 6.05846 10.8246 5.50846C10.8246 4.95846 10.4579 4.5918 9.9079 4.5918C9.3579 4.5918 8.99123 4.95846 8.99123 5.50846C8.89956 6.05846 9.3579 6.42513 9.9079 6.42513Z" fill="white"/>
        <path d="M10.8251 13.5749V8.80824V7.5249H9.54173H7.9834V8.80824H9.54173V13.5749H8.35006V14.8582H9.54173H10.8251H12.0167V13.5749H10.8251Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0_1256_7316">
          <rect width="20" height="20" fill="white"/>
        </clipPath>
        </defs>
    </svg>

  )
}

export const ToolTipIcon = ({ className }: SvgProps) => {
 return (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 6" fill="none" className={className}>
    <path d="M9.5002 1.7L13.8002 6L5.2002 6L9.5002 1.7Z" fill="white"/>
  </svg>
 ) 
}