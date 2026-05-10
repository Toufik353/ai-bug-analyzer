import Bug from "@/models/Bug";
import connectDB from "@/lib/db";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";

export async function DELETE(
  req: Request,
  { params }: any
) {
  await connectDB();

  // ✅ NEXTJS 15/16 FIX
  const { id } = await params;

  const token = (await cookies()).get(
    "token"
  )?.value;

  if (!token) {
    return Response.json(
      {
        error: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  const decoded: any =
    verifyToken(token);

  if (!decoded) {
    return Response.json(
      {
        error: "Invalid token",
      },
      {
        status: 401,
      }
    );
  }

  const bug = await Bug.findById(id);

  if (!bug) {
    return Response.json(
      {
        error: "Bug not found",
      },
      {
        status: 404,
      }
    );
  }

  // ✅ AUTHORIZATION
  if (bug.userId !== decoded.id) {
    return Response.json(
      {
        error: "Forbidden",
      },
      {
        status: 403,
      }
    );
  }

  await Bug.findByIdAndDelete(id);

  return Response.json({
    message: "Bug deleted",
  });
}

export async function PUT(
  req: Request,
  { params }: any
) {
  await connectDB();

  // ✅ NEXTJS 15/16 FIX
  const { id } = await params;

  const token = (await cookies()).get(
    "token"
  )?.value;

  if (!token) {
    return Response.json(
      {
        error: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  const decoded: any =
    verifyToken(token);

  if (!decoded) {
    return Response.json(
      {
        error: "Invalid token",
      },
      {
        status: 401,
      }
    );
  }

  const body = await req.json();

  const bug = await Bug.findById(id);

  if (!bug) {
    return Response.json(
      {
        error: "Bug not found",
      },
      {
        status: 404,
      }
    );
  }

  // ✅ AUTHORIZATION
  if (bug.userId !== decoded.id) {
    return Response.json(
      {
        error: "Forbidden",
      },
      {
        status: 403,
      }
    );
  }

  const updatedBug =
    await Bug.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
      }
    );

  return Response.json(updatedBug);
}