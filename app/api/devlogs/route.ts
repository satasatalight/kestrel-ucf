import { NextRequest, NextResponse } from "next/server";
import { createDevlogSchema, parseRequestBody } from "../validationSchemas";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const body = await parseRequestBody(request);
  if (!body) {
    return NextResponse.json(
      { error: "Request body is empty or contains invalid JSON." },
      { status: 400 }
    );
  }

  const result = createDevlogSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(result.error.errors, { status: 400 });
  }

  try {
    const newDevlog = await prisma.devlog.create({
      data: {
        title: body.title,
        description: body.description,
        videoUrl: body.videoUrl, //optional
        photoUrl: body.photoUrl, //optional
      },
    });
    return NextResponse.json(newDevlog, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating video." },
      { status: 500 }
    );
  }
}
