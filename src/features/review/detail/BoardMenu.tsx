"use client";

import { Button } from "@/widgets/ui/button";
import { useState } from "react";
import PasswordPop from "./PasswordPop";

export const BoardMenuIcon = (
  { className }: { className?: string } // 게시판 상세 > 수정, 삭제 icon
) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" className={className}>
    <circle cx="18" cy="8" r="2" fill="#D3D5DA" />
    <circle cx="18" cy="18" r="2" fill="#D3D5DA" />
    <circle cx="18" cy="28" r="2" fill="#D3D5DA" />
  </svg>
);

const BoardMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [actionType, setActionType] = useState("");

  const toggleMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };

  const handleMenu = (type: string) => {
    setShowPopup((prev) => !prev);
    setActionType(type);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setMenuOpen(false);
    }, 200);
  };

  return (
    <>
      <div className="relative" onBlur={handleBlur}>
        <Button type="button" className="p-0 w-9 h-9" onClick={() => toggleMenu()}>
          <BoardMenuIcon />
        </Button>
        {menuOpen && (
          <div className="absolute right-0 w-30 h-22 bg-white border border-gray7 shadow-m">
            <Button
              type="button"
              name="modify"
              onClick={() => handleMenu("modify")}
              className="w-full h-11 text-black font-pretendard"
            >
              수정하기
            </Button>
            <Button
              type="button"
              name="delete"
              onClick={() => handleMenu("delete")}
              className="w-full h-11 border-t border-gray7 text-black font-pretendard"
            >
              삭제하기
            </Button>
          </div>
        )}
        <PasswordPop active={showPopup} actionType={actionType} onClose={() => setShowPopup((prev) => !prev)} />
      </div>
    </>
  );
};

export default BoardMenu;
