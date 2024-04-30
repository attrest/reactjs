import React, { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/widgets/ui/select";

interface AcSelectItemProps {
  label: string;
  value: string;
}

interface AcSelectProps {
  items: AcSelectItemProps[];
  className?: string;
  placeholder?: string;
  onValueChange: (value: string) => void;
}

export const AcSelect = ({ items, className = "w-[8rem]", placeholder = "선택", onValueChange }: AcSelectProps) => {
  // 초기 선택값을 설정합니다 (예: 첫 번째 아이템의 값)
  const [selectedValue, setSelectedValue] = useState(items[0].value);

  // 내부 상태를 업데이트하고 부모 컴포넌트의 함수를 호출합니다.
  const handleChange = (value: string) => {
    setSelectedValue(value); // 상태 업데이트
    onValueChange(value); // 부모 컴포넌트에 선택된 값 전달
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder}>{items.find((item) => item.value === selectedValue)?.label}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value} onSelect={() => handleChange(item.value)}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

AcSelect.displayName = "AcSelect";
