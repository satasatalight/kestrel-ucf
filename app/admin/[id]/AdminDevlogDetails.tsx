"use client";

import { patchDevlogSchema } from "@/app/api/validationSchemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { Devlog } from "@prisma/client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import AdminDeleteConfirmDialog from "../_components/AdminDeleteConfirmDialog";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import AdminDevlogForm from "../_components/AdminDevlogForm";
import { Form } from "@/components/ui/form";

type DevlogForm = z.infer<typeof patchDevlogSchema>;

const AdminDevlogDetails = ({ devlog }: { devlog: Devlog }) => {
  const router = useRouter();

  const onSubmit = async (data: DevlogForm) => {
    try {
      const response = await axios.patch(`/api/devlogs/${devlog.id}`, data);
      if (response.status === 200) {
        toast.success("Devlog updated successfully!");
        router.push("/admin");
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

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/api/devlogs/${devlog.id}`);
      if (response.status === 200) {
        toast.success("Devlog deleted successfully!");
        router.push("/admin");
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
      toast.error("Failed to delete devlog", { description: errorMsg });
    }
  };

  const form = useForm<DevlogForm>({
    resolver: zodResolver(patchDevlogSchema),
    defaultValues: {
      title: devlog.title,
      description: devlog.description,
      videoUrl: devlog.videoUrl || "",
      photoUrl: devlog.photoUrl || "",
    },
  });

  return (
    <Card className="w-xl mx-auto mt-8">
      <CardContent>
        <h2 className="text-xl font-bold my-4">Edit Devlog</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <AdminDevlogForm<DevlogForm> form={form} />

            <div className="flex justify-between items-center">
              <Button type="submit">Update Devlog</Button>
              <AdminDeleteConfirmDialog
                handleDelete={handleDelete}
                name="devlog"
              />
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AdminDevlogDetails;
