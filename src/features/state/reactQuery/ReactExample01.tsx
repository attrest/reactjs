import { useEffect, useState } from "react";

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

export default function ReactExample01() {
  const [state, setState] = useState<any[]>([]);

  useEffect(() => {
    getServerData()
      .then((dataList) => setState(dataList))
      .catch((e) => setState([]));
  }, []);

  return <div>{JSON.stringify(state)}</div>;
}
