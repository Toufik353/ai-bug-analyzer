import connectDB from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { generateToken } from "@/lib/jwt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectDB();

  const { email, password } =
    await req.json();

  const user = await User.findOne({
    email,
  });

  if (!user) {
    return Response.json(
      {
        message: "User not found",
      },
      {
        status: 404,
      }
    );
  }

  const isMatch =
    await bcrypt.compare(
      password,
      user.password
    );

  if (!isMatch) {
    return Response.json(
      {
        message:
          "Invalid credentials",
      },
      {
        status: 401,
      }
    );
  }

  const token = generateToken({
    id: user._id.toString(),
    email: user.email,
  });

  const response =
    NextResponse.json({
      message: "Login successful",
    });

  response.cookies.set(
    "token",
    token,
    {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
    }
  );

  return response;
}