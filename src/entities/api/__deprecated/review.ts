import { DataItem } from "@/shared/types/common";
import { Api } from "./Api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addMonths, format } from "date-fns";
import { ReviewItem } from "@/shared/types/__deprecated/review";

/* 리뷰 목록 조회 */
export const useReviewsList = (page?: number, searchKeyword?: string, searchType?: string) => {
  const path = "/api/reviews";

  const params = {
    searchKeyword: searchKeyword ?? "",
    searchType: searchType,
    size: 9,
    page: page,
  };

  const query = async (): Promise<DataItem<ReviewItem>> => {
    const response = await Api.get<any>(`${path}`, { params: params });
    return response.data.data;
  };

  return useQuery<DataItem<ReviewItem>>({
    queryKey: [path, params],
    queryFn: query,
    select: (data) => {
      return {
        ...data,
        content: data.content.map((i, index) => {
          return { ...i, num: data.totalElements - data.size * data.number - index };
        }),
      };
    },
    refetchOnWindowFocus: false,
  });
};

/* 리뷰 상세 조회 */
export const useReviewsDetail = (id?: string) => {
  const path = `/api/reviews`;

  const query = async (): Promise<ReviewItem> => {
    const response = await Api.get<any>(`${path}/${id}`);
    return response.data.data;
  };

  return useQuery<ReviewItem>({
    queryKey: [path, id],
    queryFn: query,
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
};

/* 등록 수정 삭제 */
export const useReviews = () => {
  const path = `/api/reviews`;

  const save = async (condition: FormData) => {
    const response = await Api.post<any>(`${path}`, condition);
    return response.data;
  };

  const update = async (condition: FormData) => {
    const response = await Api.put<any>(`${path}/${condition.getAll("id")}`, condition);
    return response.data;
  };

  const remove = async (condition: FormData) => {
    const response = await Api.delete<any>(`${path}/${condition.getAll("id")}`, { data: condition });
    return response.data;
  };

  const authChk = async (condition: { id: string; password: string }) => {
    const response = await Api.post<any>(`${path}/${condition.id}/password-verification`, {
      password: condition.password,
    });
    return response.data;
  };

  const createMutation = useMutation({
    mutationFn: (request: FormData) => save(request),
  });
  const updateMutation = useMutation({
    mutationFn: (request: FormData) => update(request),
  });
  const deleteMutation = useMutation({
    mutationFn: (request: FormData) => remove(request),
  });
  const atuhChkMutation = useMutation({
    mutationFn: (request: { id: string; password: string }) => authChk(request),
  });

  return {
    createMutation,
    updateMutation,
    deleteMutation,
    atuhChkMutation,
  };
};
