import { useQuery, QueryFunctionContext } from "@tanstack/react-query";

// queryKey의 타입을 정의하면서 QueryFunctionContext 사용
const getServerData = async ({ queryKey }: QueryFunctionContext<string[]>) => {
  const key = queryKey[1] as string; // 적절한 타입 어설션 추가
  console.log("key => ", key);

  // 예를 들어, key에 따라 다른 URL로 요청을 보낼 수 있습니다.
  const response = await fetch(`http://localhost:3009/${key}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

export default function ReactExample03() {
  // 첫 번째 데이터 쿼리
  const { data: data1 } = useQuery({
    queryKey: ["data", "todos"],
    queryFn: getServerData,
  });

  // 두 번째 데이터 쿼리 (data1에 의존적)
  const { data: data2 } = useQuery({
    queryKey: ["data", "reactQuery"],
    queryFn: getServerData,
    enabled: !!data1, // data1이 존재할 때만 이 쿼리가 활성화 됨
  });

  return (
    <div>
      <p>Data1: {JSON.stringify(data1)}</p>
      <p>Data2: {JSON.stringify(data2)}</p>
    </div>
  );
}
