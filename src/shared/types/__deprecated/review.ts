import { FileProps, ContentProps, FormRequest, DetailPageProps } from "../common";

// 리뷰
export interface ReviewItem extends ContentProps {
  rating: string;
  answerYn: "N" | "Y";
  files: FileProps[];
  comment?: string;
  prevReview: DetailPageProps;
  nextReview: DetailPageProps;
}

export interface FormReview extends FormRequest {
  comment?: string;
  [key: string]: any;
}
