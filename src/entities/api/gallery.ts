import { DataItem } from "@/shared/types/common";
import { Api } from "./Api";
import { useQuery } from "@tanstack/react-query";
import { GalleryDetailResponse, GalleryItem } from "@/shared/types/gallery";

/* 갤러리 목록 조회 */
export const useGallerys = (page?: number, size?: number) => {
  const path = "/api/gallery";

  const params = {
    size: size ?? 9,
    page: page ?? 0,
    mainYn: "Y",
  };

  const query = async (): Promise<DataItem<GalleryItem>> => {
    const response = await Api.get<any>(`${path}`, { params: params });
    return response.data.data;
  };

  return useQuery<DataItem<GalleryItem>>({
    queryKey: [path, params],
    queryFn: query,
    refetchOnWindowFocus: false,
  });
};

/* 갤러리 상세 조회 */
export const useGalleryDetail = (id?: string) => {
  const path = `/api/gallery`;

  const query = async (): Promise<GalleryDetailResponse> => {
    const response = await Api.get<any>(`${path}/${id}`);
    return response.data.data;
  };

  return useQuery<GalleryDetailResponse>({
    queryKey: [path, id],
    queryFn: query,
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
};
