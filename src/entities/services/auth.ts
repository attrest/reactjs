// ** 로그인 API 호출용 서비스 모듈

export interface LoginResponse {
  id: number;
  username: string;
  role: string;
  token: string;
}

export async function login(username: string, password: string): Promise<LoginResponse> {
  const response = await fetch("/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error("Invalid username or password");
  }

  return await response.json();
}
