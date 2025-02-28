import { NextRequest, NextResponse } from "next/server";
import { mongo_uri } from "@/constant";
import connectDB from "@/database";
import { Blog } from "@/models/blog";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB(mongo_uri);
    const blog = await Blog.findById(params.id);
    return NextResponse.json({
      success: true,
      data: blog,
    });
  } catch (error: any) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return NextResponse.json(
        {
          success: false,
          message: "resource error",
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  return new NextResponse(`DELETE BLOG Detail ${params.id}`);
}
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  return new NextResponse(`Update BLOG Detail ${params.id}`);
}
