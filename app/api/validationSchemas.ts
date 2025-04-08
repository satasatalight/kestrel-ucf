import { NextRequest } from "next/server";

import { z } from "zod";

export const createDevlogSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters long" })
    .max(100, { message: "Title must be at most 100 characters long" }),

  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters long" })
    .max(1000, { message: "Description must be at most 1000 characters long" }),

  videoUrl: z.string().optional(),
  photoUrl: z.string().optional(),
  password: z.string().nullable().optional(),
});

// Patch schema: allows any subset of the fields to be updated.
export const patchDevlogSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters long" })
    .max(100, { message: "Title must be at most 100 characters long" })
    .optional(),

  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters long" })
    .max(1000, { message: "Description must be at most 1000 characters long" })
    .optional(),

  videoUrl: z.string().optional(),
  photoUrl: z.string().optional(),
  password: z.string().nullable().optional(),
});

export const schemaIdInput = z.object({
  id: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, { message: "Invalid MongoDB ObjectId" }),
});

export async function parseRequestBody(request: NextRequest) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}
