// ** JWT 검증용 미들웨어

import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const SECRET_KEY = "your_secret_key";

interface JwtPayload {
  id: number;
  role: string;
}

export interface CustomNextApiRequest extends NextApiRequest {
  user?: JwtPayload;
}

export default function verifyToken(
  req: CustomNextApiRequest,
  res: NextApiResponse,
  next: () => void
) {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.substring(7, authHeader.length); // "Bearer " 이후의 문자열을 추출
    try {
      const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;
      req.user = decoded;
      next();
    } catch (err) {
      res.status(403).json({ message: "Invalid or expired token" });
    }
  } else {
    res.status(403).json({ message: "No token provided" });
  }
}
