import { FileProps, ContentProps, FormRequest } from "../common";

// 갤러리
export interface GalleryItem extends ContentProps {
  mainYn: "N" | "Y";
  date: {
    from: string;
    to: string;
  };
  images: any[];
  files: FileProps[];
}
export interface GalleryDetailResponse extends ContentProps {
  startDt: string;
  endDt: string;
  files: FileProps[];
  topYn: string;
  date: {
    from: string;
    to: string;
  };
  mainYn: "N" | "Y";
  images: FileProps[];
}

export interface FormGallery extends FormRequest {
  mainYn: "Y" | "N";
  files?: string[];
  [key: string]: any;
}
