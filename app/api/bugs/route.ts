import connectDB from "@/lib/db";
import Bug from "@/models/Bug";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";

export async function GET() {
  try {
    await connectDB();

    const token = (await cookies()).get(
      "token"
    )?.value;

    if (!token) {
      return Response.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const decoded: any =
      verifyToken(token);

    const bugs = await Bug.find({
      userId: decoded.id,
    });

    return Response.json(bugs);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch bugs" },
      { status: 500 }
    );
  }
}

export async function POST(
  req: Request
) {
  try {
    await connectDB();

    const token = (await cookies()).get(
      "token"
    )?.value;

    if (!token) {
      return Response.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const decoded: any =
      verifyToken(token);

    const body = await req.json();

    const bug = await Bug.create({
      ...body,
      userId: decoded.id,
    });

    return Response.json(bug);
  } catch (error) {
    console.log(error);

    return Response.json(
      { error: "Failed to create bug" },
      { status: 500 }
    );
  }
}