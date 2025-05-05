"use client";
import { Suspense } from "react";
import AdminPage from "./AdminPage";

const AdminPageElement = () => {
  return (
    <Suspense>
      <AdminPage />
    </Suspense>
  );
};

export const dynamic = "force-dynamic";

export default AdminPageElement;
