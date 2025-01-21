"use server";

import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getAuthStatus = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user?.id || !user.email) {
    console.error("Missing user data:", user);
    throw new Error("Invalid user data");
  }

  const existingUser = await db.user.findFirst({
    where: { id: user.id },
  });

  console.log("Existing user in database:", existingUser);

  return { success: true };
};
