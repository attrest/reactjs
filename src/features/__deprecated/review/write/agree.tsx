// import PopupModal from "@/widgets/modals/PopupModal";
// import { Button } from "@/widgets/ui/button";

// interface AgreeProps {
//   active: boolean;
//   onClose: (checekd: boolean) => void;
// }

// const PopCloseIcon = ({ className }: { className?: string }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       className={className}
//     >
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M13.3388 11.3393L20.5559 18.5563L19.4952 19.617L12.2782 12.4L5.061 19.6172L4.00034 18.5565L11.2175 11.3393L3.93886 4.06065L4.99952 2.99999L12.2782 10.2787L19.5567 3.00015L20.6174 4.06081L13.3388 11.3393Z"
//         fill="#1D1D1D"
//       />
//     </svg>
//   );
// };

// const Agree = ({ active, onClose }: AgreeProps) => {
//   return (
//     <PopupModal
//       active={active}
//       title={
//         <>
//           <div className="mb-3 flex items-center justify-between text-left">
//             <h3 className="text-2xl lg:text-[26px] font-semibold">개인정보 수집 및 이용 동의</h3>
//             <button
//               className="absolute top-4 right-4 lg:top-6 lg:right-6 cursor-pointer border-none bg-transparent"
//               onClick={() => onClose(false)}
//             >
//               <PopCloseIcon />
//             </button>
//           </div>
//         </>
//       }
//       onClose={() => onClose(false)}
//     >
//       <div className="text-black font-pretendard space-y-7 break-keep">
//         <div>
//           <h4 className="text-sm lg:text-lg font-bold">1. 개인정보의 수집 · 이용 목적</h4>
//           <p className="pl-3 lg:pl-4 text-sm lg:text-base">후기 게시판 게시글 등록</p>
//         </div>
//         <div>
//           <h4 className="text-sm lg:text-lg font-bold">2. 수집하려는 개인정보의 항목</h4>
//           <p className="pl-3 lg:pl-4 text-sm lg:text-base">필수 항목 : 이름</p>
//         </div>
//         <div>
//           <h4 className="text-sm lg:text-lg font-bold">3. 개인정보의 보유 및 이용기간(근거법률)</h4>
//           <p className="pl-3 lg:pl-4 text-sm lg:text-base">
//             개인정보 처리 목적에 달성된 개인정보는 지체없이 파기합니다.{" "}
//           </p>
//         </div>
//         <p className="relative pl-2.5 lg:pl-4 mt-10 lg:mt-7.5 pt-4 text-xs lg:text-base border-t border-gray2 text-light-gray break-keep">
//           <span className="absolute top-4 left-0">※</span>귀하께서는 이에 대한 동의를 거부할 수 있으며, 동의 거부 시
//           [후기 게시판] 게시물 등록이 불가능 할 수도 있음을 알려드립니다.
//         </p>
//       </div>
//       <div className="sm:text-center">
//         <Button
//           onClick={() => onClose(true)}
//           className="mt-7.5 w-full text-sm sm:text-base sm:!w-fit sm:px-15"
//           type="button"
//           variant="color"
//         >
//           확인
//         </Button>
//       </div>
//     </PopupModal>
//   );
// };

// export default Agree;
