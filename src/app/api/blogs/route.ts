import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return new NextResponse("GET BLOGS");
}
export async function POST(req: NextRequest) {
  return new NextResponse("ADD BLOGS");
}
