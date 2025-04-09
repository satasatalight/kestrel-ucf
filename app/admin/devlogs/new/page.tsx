import React, { Suspense } from "react";
import AdminDevlogNewDetails from "./AdminDevlogNewDetails";

const AdminDevlogNewPage = () => {
  return (
    <Suspense>
      <AdminDevlogNewDetails />
    </Suspense>
  );
};

export const dynamic = "force-dynamic";

export default AdminDevlogNewPage;
