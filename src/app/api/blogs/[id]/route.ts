/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";

import connectDB from "@/database";
import { Blog } from "@/models/blog";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB(process.env.MONGODB_URI);
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
  try {
    await connectDB(process.env.MONGODB_URI);
    await Blog.deleteOne({ _id: params.id });
    return NextResponse.json({
      success: true,
      message: "Blog Removed",
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
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { title, description, imageURL } = await req.json();
    await connectDB(process.env.MONGODB_URI);
    const blog = await Blog.findOne({ _id: params.id });

    blog.title = title;
    blog.description = description;
    blog.imageURL = imageURL;

    const updatedBlog = await blog.save();

    return NextResponse.json({
      success: true,
      data: updatedBlog,
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
