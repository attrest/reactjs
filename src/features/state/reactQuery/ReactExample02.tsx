import { useQuery } from "@tanstack/react-query";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const getServerData = async (): Promise<Todo[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_TODOS}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data: Todo[] = await response.json();
  return data;
};

export default function ReactExample02() {
  const { data } = useQuery<Todo[], Error>({
    queryKey: ["data"], // 쿼리 키를 명시적으로 객체 내에 설정
    queryFn: getServerData, // 쿼리 함수도 객체 내에 설정
  });

  return <div>{JSON.stringify(data)}</div>;
}
