import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // 비즈니스 로직 실행
  const data = { message: "Hello from the API" };

  // JSON 형태로 응답 반환
  return new NextResponse(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
