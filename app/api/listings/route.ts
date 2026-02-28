import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET() {
  try {
    const listings = await prisma.listing.findMany({
      take: 20,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ listings });
  } catch (error) {
    console.error("Failed to load listings", error);
    return NextResponse.json(
      { error: "Failed to load listings" },
      { status: 500 },
    );
  }
}

