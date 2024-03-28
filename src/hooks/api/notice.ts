import { DataItem } from "@/types/common"
import { Api } from "./Api"
import { useQuery } from "@tanstack/react-query"
import { NoticeDetailResponse, NoticeItem } from "@/types/notice"

/* 공지사항 목록 조회 */
export const useNotices = (page?:number, searchKeyword?:string, searchType?:string, size?:number)  => {
  const path = '/api/notices'

  const params = {
    searchKeyword:searchKeyword ?? '',
    searchType: searchType ?? 'A',
    size: size ?? 9,
    page: page ?? 0,
    viewYn:'Y',
    sort:'id,desc'
  }

  const query = async (): Promise<DataItem<NoticeItem>> => {
    const response = await Api.get<any>(`${path}`, { params: params})
    return response.data.data
  }
   
  return useQuery<DataItem<NoticeItem> >({
    queryKey: [path, params],
    queryFn: query,
    refetchOnWindowFocus: false,
  })
}

/* 공지사항 상세 조회 */
export const useNoticeDetail = (id?:string) => {
  const path = `/api/notices`

  const query = async (): Promise<NoticeDetailResponse> => {
    const response = await Api.get<any>(`${path}/${id}`)
    return response.data.data
  }

  return useQuery<NoticeDetailResponse>({
    queryKey: [path,id],
    queryFn: query,
    refetchOnWindowFocus: false,
    enabled: !!id,
    retry: false,
  })
}