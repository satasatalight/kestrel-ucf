"use client";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getPassword } from "../api/devlogs/passwordManager";

const AdminPage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const password = getPassword(params);

  useEffect(() => {
    if (password) router.push("/admin/devlogs");
  }, [router]);

  return <div>Routing to /admin/devlogs...</div>;
};

export default AdminPage;
