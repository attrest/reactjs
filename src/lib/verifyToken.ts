// JWT 토큰 검증을 위한 미들웨어 함수

import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = "your_secret_key";

interface JwtPayload {
  id: number;
  role: string;
}

export interface CustomNextApiRequest extends NextRequest {
  user?: JwtPayload;
}

export default async function verifyToken(req: CustomNextApiRequest): Promise<boolean> {
  const authHeader = req.headers.get("authorization");

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.substring(7, authHeader.length); // "Bearer " 이후의 문자열을 추출
    try {
      const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;
      req.user = decoded;
      return true;
    } catch (err) {
      return false;
    }
  } else {
    return false;
  }
}
