import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { getPassword } from "../api/devlogs/passwordManager";

const AdminPage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const password = getPassword(params);

  useEffect(() => {
    if (password) router.push("/admin/devlogs");
  }, [router, password]);

  return <div>Routing to /admin/devlogs...</div>;
};

export const dynamic = "force-dynamic";

export default AdminPage;
