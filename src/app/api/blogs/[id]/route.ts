import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  return new NextResponse(`GET BLOG Detail ${params.id}`);
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
