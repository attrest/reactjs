"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "@/components/Svg"
import { useEffect, useState } from "react"

interface SearchProps {
  num: number
  text?: string
  onSearch: (searchText:string, searchType:string) => void
  searchType:string
  searchText:string
  regType?:boolean
}

const Search = ({num, text="후기가", onSearch, searchType, searchText, regType} : SearchProps ) => {

  const [keyword, setKeyword] = useState<string>(searchText)
  const [selectValue, setSelectValue] = useState<string>(searchType)
  const [open, isOpen] = useState<boolean>(false)

  const handleInputChange = (event:any) => {
    setKeyword(event.target.value)
  }
  const handleSelectChange = (value:string) => {
    setSelectValue(value)
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(keyword, selectValue)
    }
  }

  useEffect(() => {
    if(open){
      document.body.classList.add('!overflow-visible')
      document.body.classList.add('!mr-0')
    }
    return () => {
      document.body.classList.remove('!overflow-visible')
      document.body.classList.remove('!mr-0')
    }
  },[open])

  return (
    <>
      <div className="hidden lg:block">
        <div className="mt-5 flex justify-between items-center">
          <p className="font-pretendard">총 <strong className="text-gold2">{num}건</strong>의 {text} 있습니다.</p>
          <div className="flex">
            <Select value={selectValue} onValueChange={handleSelectChange} defaultValue="A" onOpenChange={(open) => isOpen(open)}>
              <SelectTrigger className="w-[84px]">
                <SelectValue placeholder="전체"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A">전체</SelectItem>
                <SelectItem value="T">제목</SelectItem>
                <SelectItem value="C">내용</SelectItem>
                {regType && <SelectItem value="R">작성자</SelectItem>}
              </SelectContent>
            </Select>
            <div className="relative max-w-[250px]">
              <Input
                type="text"
                variant="fill"
                placeholder="검색어를 입력해주세요."
                value={keyword}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <div className="absolute top-0 right-0 bottom-0 my-auto">
                <Button onClick={() => onSearch(keyword, selectValue)} size='icon'>
                  <SearchIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden -mt-5">
        <div className="grid grid-cols-12 border-b border-gray"> 
          <Select value={selectValue} onValueChange={handleSelectChange}  defaultValue="A">
            <SelectTrigger className="h-15 col-span-4 sm:col-span-3 md:col-span-2">
              <SelectValue placeholder="전체" />
            </SelectTrigger>
            <SelectContent>
             <SelectItem value="A">전체</SelectItem>
              <SelectItem value="T">제목</SelectItem>
              <SelectItem value="C">내용</SelectItem>
              {regType && <SelectItem value="R">작성자</SelectItem>}
              
            </SelectContent>
          </Select>
          <div className="relative col-span-8 sm:col-span-9 md:col-span-10">
            <Input
              type="text"
              placeholder="검색어를 입력해주세요."
              value={keyword}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="pr-9 h-full text-sm"
            />
            <Button onClick={() => onSearch(keyword, selectValue)} size='icon' className="absolute top-0 right-0 bottom-0 my-auto">
              <SearchIcon />
            </Button>
          </div>
        </div>
        <div className="mt-15 text-gray text-sm">
          <p className="font-pretendard">총 <span className="font-semibold text-gold2">{num}건</span>의 {text} 있습니다.</p>
        </div>
      </div>
    </>
  )
}

export default Search