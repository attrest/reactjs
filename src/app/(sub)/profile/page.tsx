"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "@/widgets/ui/button";

interface UserProfile {
  id: number;
  username: string;
  role: string;
}

const ProfilePage = () => {
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/login");
        return;
      }

      const response = await fetch("/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const profileData: UserProfile = await response.json();
        setProfile(profileData);
      } else {
        setError("Failed to fetch profile.");
        router.push("/login");
      }
    };

    fetchProfile();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl">Profile Page</h1>
      <p>
        <strong>ID:</strong> {profile.id}
      </p>
      <p>
        <strong>Username:</strong> {profile.username}
      </p>
      <p>
        <strong>Role:</strong> {profile.role}
      </p>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default ProfilePage;
