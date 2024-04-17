"use client";

import { useDialog } from "@/widgets/modals/DialogContext";
import PopupModal from "@/widgets/modals/PopupModal";
import { Button } from "@/widgets/ui/button";
import { Input } from "@/widgets/ui/input";
import { useReviews } from "@/entities/api/review";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

interface PasswordPopProps {
  data?: string;
  active: boolean;
  onClose: () => void;
  actionType?: string;
}

const PasswordPopup = ({ active, onClose, actionType }: PasswordPopProps) => {
  const params = useParams();
  const router = useRouter();
  const [password, setPassword] = useState<string>("");
  const { deleteMutation, atuhChkMutation } = useReviews();
  const { showDialog, closeDialog } = useDialog();

  const onPasswordChk = () => {
    const payload = {
      id: params.id[0],
      password: password,
    };

    if (password.length === 0) {
      showDialog({
        content: `비밀번호를 입력해주세요.`,
      });
    } else if (password.length < 4) {
      showDialog({
        content: `숫자 4자리 입력해주세요.`,
      });
    } else {
      atuhChkMutation.mutate(payload, {
        onSuccess: (data) => {
          if (actionType === "delete") {
            showDialog({
              content: `게시글을 삭제 하시겠습니까?`,
              onConfirm: () => {
                onDelete(data.data.verifyToken);
                closeDialog();
                setPassword("");
              },
            });
          } else {
            router.push(`/review/write/${payload.id}`);
            localStorage.setItem("id", payload.id);
            localStorage.setItem("token", data.data.verifyToken);
          }
        },
        onError: (error: any) => {
          const errorData = error.response.data;
          if (errorData.code === "FORBIDDEN_EXCEED_COUNT") {
            showDialog({
              content: `비밀번호 입력 오류가 5회 이상으로 10분 동안 사용이 제한되었습니다.`,
              onClose: () => {
                onClose();
                closeDialog();
              },
            });
          } else {
            showDialog({
              content: `비밀번호가 틀립니다.`,
            });
          }
        },
      });
    }
  };

  const onDelete = (token: string) => {
    const formData = new FormData();

    formData.append("id", params.id[0]);
    formData.append("token", token);

    deleteMutation.mutate(formData, {
      onSuccess: () => {
        router.push(`/review`);
      },
    });
  };

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter') {
  //     onPasswordChk()
  //   }
  // }

  return (
    <PopupModal
      active={active}
      title={
        <>
          <h3 className="text-2xl lg:text-[26px] font-semibold">비밀번호 입력</h3>
          <button
            className="absolute top-4 right-4 lg:top-6 lg:right-6 cursor-pointer border-none bg-transparent"
            onClick={onClose}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </>
      }
      onClose={onClose}
    >
      <div className="font-pretendard">
        <p className="text-black text-sm lg:text-base">후기 게시글 등록 시 설정한 비밀번호를 입력해 주세요.</p>
        <div className="pt-4 pb-5">
          <Input
            type="password"
            placeholder="숫자 4자리 입력해 주세요"
            maxLength={4}
            variant="password"
            value={password}
            onChange={(e) => setPassword(e.target.value.replace(/[^0-9]/g, ""))}
            // onKeyDown={handleKeyDown}
          />
        </div>
        <div className="space-y-2.5 lg:space-y-2">
          <p className="relative pl-2.5 lg:pl-4 text-light-gray text-xs lg:text-sm">
            <span className="absolute top-0 left-0">※</span>비밀번호 5회 이상 오류 시 10분 동안 사용이 제한됩니다.
          </p>
        </div>
      </div>
      <div className="mt-10 text-center">
        <Button type="button" variant="color" className="px-15 lg:text-base" onClick={onPasswordChk}>
          확인
        </Button>
      </div>
    </PopupModal>
  );
};

export default PasswordPopup;
