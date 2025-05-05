"use client";

import { getPayloadWithPassword } from "@/app/api/devlogs/passwordManager";
import { createDevlogSchema } from "@/app/api/validationSchemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import AdminDevlogForm from "../_components/AdminDevlogForm";

type DevlogForm = z.infer<typeof createDevlogSchema>;

const AdminDevlogNewDetails = () => {
  const router = useRouter();
  const params = useSearchParams();

  const onSubmit = async (data: DevlogForm) => {
    try {
      const response = await axios.post(
        `/api/devlogs/`,
        getPayloadWithPassword(params, data)
      );
      if (response.status === 201) {
        toast.success("Devlog created successfully!");
        router.push("/admin/devlogs");
        router.refresh();
      }
    } catch (error: unknown) {
      const errorMsg = axios.isAxiosError(error)
        ? error.response?.data?.error ||
          error.response?.data?.message ||
          error.message
        : error instanceof Error
        ? error.message
        : "An unknown error occurred.";
      toast.error("Failed to update devlog", { description: errorMsg });
    }
  };

  const form = useForm<DevlogForm>({
    resolver: zodResolver(createDevlogSchema),
    defaultValues: {
      title: "",
      description: "",
      videoUrl: "",
      photoUrl: "",
    },
  });

  return (
    <Card className="w-xl mx-auto mt-8">
      <CardContent>
        <h2 className="text-xl font-bold my-4">Create Devlog</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <AdminDevlogForm<DevlogForm> form={form} />

            <div className="flex justify-between items-center">
              <Button type="submit">Create Devlog</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AdminDevlogNewDetails;
