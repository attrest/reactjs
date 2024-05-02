import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/widgets/ui/breadcrumb";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/widgets/ui/dropdown-menu";
import Link from "next/link";

export interface AcBreadcrumbItemsProps {
  title: string;
  href: string;
  items?: AcBreadcrumbItemsProps[];
}

interface AcBreadcrumbProps {
  items: AcBreadcrumbItemsProps[];
  className?: string;
}

export const AcBreadcrumb = ({ items, className }: AcBreadcrumbProps) => {
  const renderItems = (itemList: AcBreadcrumbItemsProps[]) => {
    return itemList.map((item, idx) => {
      // console.log("item => ", item);
      // console.log("idx => ", idx, "itemList.length => ", itemList.length - 1, idx === itemList.length - 1);
      if (item.items) {
        return (
          <React.Fragment key={idx}>
            {idx !== 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem key={idx} {...(className && { className: className })}>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <BreadcrumbEllipsis className="h-4 w-4" />
                  <span className="sr-only">{item.title}</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {item.items.map((subItem, idx2) => {
                    return (
                      <DropdownMenuItem key={idx2}>
                        <Link href={subItem.href}>{subItem.title}</Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment key={idx}>
            {idx !== 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              {idx !== itemList.length - 1 ? (
                <BreadcrumbLink href={item.href}>{item.title}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.title}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        );
      }
    });
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>{renderItems(items)}</BreadcrumbList>
    </Breadcrumb>
  );
};

AcBreadcrumb.displayName = "AcBreadcrumb";
