import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { hash } from "bcryptjs";
import { UserRole } from "@prisma/client";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, role, name } = body as {
      email?: string;
      password?: string;
      role?: UserRole;
      name?: string;
    };

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email и пароль обязательны" },
        { status: 400 },
      );
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json(
        { error: "Пользователь с таким email уже существует" },
        { status: 400 },
      );
    }

    const passwordHash = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        role: role ?? UserRole.FARMER,
        name: name ?? null,
      },
    });

    return NextResponse.json({ id: user.id, email: user.email });
  } catch (error) {
    console.error("Registration error", error);
    return NextResponse.json(
      { error: "Ошибка при регистрации" },
      { status: 500 },
    );
  }
}

