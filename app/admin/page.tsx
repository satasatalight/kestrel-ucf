"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const AdminPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/admin/devlogs");
  }, [router]);

  return <div>Routing to /admin/devlogs...</div>;
};

export default AdminPage;
