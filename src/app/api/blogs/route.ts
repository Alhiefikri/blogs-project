import { mongo_uri } from "@/constant";
import connectDB from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectDB(mongo_uri);
  return new NextResponse("GET BLOGS");
}
export async function POST(req: NextRequest) {
  return new NextResponse("ADD BLOGS");
}
