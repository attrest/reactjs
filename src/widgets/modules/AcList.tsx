import { cn } from "@/shared/utils/utils";
import React from "react";
import { AcThumbnail } from "./AcThumbnail";

interface AcListProps {
  items?: AcListItemProps[];
  children?: React.ReactNode;
  className?: string;
  thumbClassName?: string;
  thumbSize?: string;
}

const AcList = ({ items, children, className, thumbClassName, thumbSize }: AcListProps) => {
  return (
    <div className={cn("ac-list", className && className)}>
      {children && children}
      {items &&
        items.map((item, idx) => {
          return (
            <AcListItem
              {...item}
              {...(thumbClassName && { thumbClassName: thumbClassName })}
              {...(thumbSize && { thumbSize: thumbSize })}
              key={idx}
            />
          );
        })}
    </div>
  );
};
AcList.displayName = "AcList";

interface AcListHeaderProps {
  title: string;
  description?: string;
  href?: string;
  className?: string;
}

const AcListHeader = ({ title, description, href, className }: AcListHeaderProps) => {
  return (
    <div className={cn("ac-list-header text-lg font-bold pb-3 border-b mt-10", className && className)}>
      <h2 className="ac-list-header-title">{href ? <a href={href}>{title}</a> : title}</h2>
      <p className="ac-list-header-description">{description}</p>
    </div>
  );
};
AcListHeader.displayName = "AcListHeader";

interface AcListItemProps extends AcListHeaderProps {
  href: string;
  src?: string;
  thumbClassName?: string;
  thumbSize?: string;
}

const AcListItem = ({ title, href, description, src, className, thumbClassName, thumbSize }: AcListItemProps) => {
  return (
    <div className={cn("ac-list-item flex justify-between w-full border-b py-4", className && className)}>
      <div className="ac-list-item-header">
        <a href={href}>
          <h3 className="ac-list-item-title text-xl">{title}</h3>
          {description && <p className="ac-list-item-description mt-1">{description}</p>}
        </a>
      </div>
      {src && (
        <div className={cn("ac-list-item-thumb ml-4", thumbClassName && thumbClassName)}>
          <AcThumbnail src={src} title={title} {...(thumbSize && { size: thumbSize })} />
        </div>
      )}
    </div>
  );
};
AcListItem.displayName = "AcListItem";

export { AcList, AcListHeader, AcListItem };
