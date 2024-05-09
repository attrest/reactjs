// pages/api/profile/route.ts

import { NextRequest, NextResponse } from "next/server";
import verifyToken, { CustomNextApiRequest } from "@/lib/verifyToken";

interface UserProfile {
  id: number;
  username: string;
  role: string;
}

export async function GET(request: NextRequest) {
  const customRequest = request as unknown as CustomNextApiRequest;
  const isValidToken = await verifyToken(customRequest);

  if (!isValidToken) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
  }

  const profile: UserProfile = {
    id: customRequest.user!.id,
    username: customRequest.user!.role === "admin" ? "Admin User" : "Regular User",
    role: customRequest.user!.role,
  };

  return NextResponse.json(profile, { status: 200 });
}
