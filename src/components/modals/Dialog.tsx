import Dimm from "@/components/modals/Dimm";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export interface DialogProps {
  show: boolean;
  onClose?: () => void;
  content?: string;
  description?: string;
  onConfirm?: () => void | Promise<void> | undefined;
  dimmClick?: boolean;
  onConfirmText?: string;
  onCancelText?: string;
  closeOnEsc?: boolean;
}

const Dialog = ({
  show,
  onClose = () => {},
  content,
  description,
  onConfirm,
  dimmClick = false,
  onConfirmText = "확인",
  onCancelText = "취소",
}: /* closeOnEsc = !onConfirm, */
DialogProps) => {
  const [isDialogVisible, setIsDialogVisible] = useState<boolean>(show);

  useEffect(() => {
    setIsDialogVisible(show);
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    /* if (closeOnEsc) { */
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "Enter" && onConfirm) {
        onConfirm();
      }
    };
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscKey);
    };
    /* } else {
      return () => {
        document.body.style.overflow = 'unset'
      }
    } */
  }, [show, onClose]);

  const handleDimmClick = () => {
    if (dimmClick) {
      onClose();
    }
  };

  return (
    <>
      {isDialogVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-[10000]">
          {dimmClick ? <Dimm onClick={handleDimmClick} /> : <Dimm onClick={() => {}} />}
          <div className="relative w-[368px] min-w-[232px] max-w-[560px] bg-white shadow-md rounded-2xl p-8 flex flex-col z-10 sm:mx-0 mx-6">
            <div>
              <h3 className="text-lg lg:text-18 font-bold whitespace-pre-wrap">{content}</h3>
            </div>
            {description && (
              <div className="mt-2">
                <p className="text-sm lg:text-14">{description}</p>
              </div>
            )}
            <div className="flex justify-end items-start mt-14 gap-2 font-pretendard">
              {onConfirm ? (
                <>
                  <Button className="px-3 py-2.5" onClick={onClose} size="sm">
                    {onCancelText}
                  </Button>
                  <Button className="px-3 py-2.5" onClick={onConfirm} size="sm">
                    {onConfirmText}
                  </Button>
                </>
              ) : (
                <Button className="px-3 py-2.5" onClick={onClose} size="sm">
                  {onConfirmText}
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;
