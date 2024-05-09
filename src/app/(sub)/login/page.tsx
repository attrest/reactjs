// src/app/(sub)/login/page.tsx

"use client";

import { useRouter } from "next/navigation";
import React from "react";
import LoginForm from "@/features/LoginForm";

const LoginPage = () => {
  const router = useRouter();

  const handleLoginSuccess = (token: string) => {
    router.push("/profile");
  };

  return (
    <div>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default LoginPage;
