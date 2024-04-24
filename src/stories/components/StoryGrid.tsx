"use client";

import React from "react";
import { cn } from "@/shared/utils/utils";
import "./StoryGrid.scss";

interface StoryGridProps {
  items: React.ReactNode[];
  cols?: number;
}

interface StoryGridItemProps {
  item: React.ReactNode;
}

const StoryGridItem = ({ item }: StoryGridItemProps) => {
  let componentName = "";

  // React 요소인지 확인하고, 가능하면 type에서 이름 가져오기
  if (React.isValidElement(item)) {
    componentName = (item.type as any).displayName || (item.type as any).name || "Unknown component";
  }
  return (
    <div className="story-grid-item">
      <div className="comp-item">{item}</div>
      <footer className="comp-name">{componentName}</footer>
    </div>
  );
};

const StoryGrid = ({ items, cols, ...props }: StoryGridProps) => {
  return (
    <div className="story-grid-container">
      <div className={cn("story-grid", cols && `col-${cols}`)}>
        {items.map((elem, idx) => {
          return <StoryGridItem key={idx} item={elem} />;
        })}
      </div>
    </div>
  );
};

export default StoryGrid;
