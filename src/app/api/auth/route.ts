import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import axios from "axios";

const SECRET_KEY = "your_secret_key";
const TOKEN_EXPIRY = "1h"; // 1시간

interface User {
  id: number;
  username: string;
  password: string;
  role: string;
}

interface LoginResponse {
  id: number;
  username: string;
  role: string;
  token: string;
}

export async function POST(request: NextRequest) {
  const { username, password }: { username: string; password: string } = await request.json();

  try {
    // json-server로부터 사용자 데이터를 가져오기
    const { data: users } = await axios.get<User[]>("http://localhost:3009/users");
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, {
        expiresIn: TOKEN_EXPIRY,
      });
      const response: LoginResponse = {
        id: user.id,
        username: user.username,
        role: user.role,
        token,
      };
      return NextResponse.json(response, { status: 200 });
    } else {
      return NextResponse.json({ message: "Invalid username or password" }, { status: 401 });
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
