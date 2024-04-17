"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationNextGroup,
  PaginationPrevGroup,
  PaginationPrevious,
} from "@/widgets/ui/pagination";
import { DataItem, PageProps } from "@/shared/types/common";
import clsx from "clsx";

interface PaginationProps {
  data: DataItem<any>;
  className?: string;
  moveNum: (num: number) => void;
  pageRangeDisplayed?: number;
}
const PaginationGroup = ({ data, className, moveNum, pageRangeDisplayed = 10 }: PaginationProps) => {
  const movePage = (num: number) => {
    moveNum(num);
    window.scrollTo(0, 0);
  };
  const pageable = data.pageable;

  const prevGroupNum = pageable.pageNumber - pageRangeDisplayed > 0 ? pageable.pageNumber - pageRangeDisplayed : 0;
  const nextGroupNum =
    pageable.pageNumber + pageRangeDisplayed <= data.totalPages - 1
      ? pageable.pageNumber + pageRangeDisplayed
      : data.totalPages - 1;

  return (
    <Pagination className={clsx(className, "mt-15 border-t pt-15 border-gray2")}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevGroup
            className={clsx(data.first ? "" : "cursor-pointer")}
            on={!data.first ? true : false}
            onClick={() => {
              data.first ? null : movePage(prevGroupNum);
            }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious
            className={clsx(data.first ? "" : "cursor-pointer")}
            on={!data.first ? true : false}
            onClick={() => {
              data.first ? null : movePage(pageable.pageNumber - 1);
            }}
          />
        </PaginationItem>
        {[...Array(data.totalPages)].map((i, index) => {
          const pageGroupNum = Math.ceil((pageable.pageNumber + 1) / pageRangeDisplayed);
          if (
            index < pageRangeDisplayed * pageGroupNum - pageRangeDisplayed ||
            index >= pageRangeDisplayed * pageGroupNum
          )
            return null;
          return (
            <PaginationItem key={index}>
              {index === pageable.pageNumber ? (
                <PaginationLink href="#" isActive onClick={() => movePage(index)}>
                  {index + 1}
                </PaginationLink>
              ) : (
                <PaginationLink href="#" onClick={() => movePage(index)}>
                  {index + 1}
                </PaginationLink>
              )}
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext
            className={clsx(data.last ? "" : "cursor-pointer")}
            on={!data.last ? true : false}
            onClick={() => {
              data.last ? null : movePage(pageable.pageNumber + 1);
            }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNextGroup
            className={clsx(data.last ? "" : "cursor-pointer")}
            on={!data.last ? true : false}
            onClick={() => {
              data.last ? null : movePage(nextGroupNum);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationGroup;
