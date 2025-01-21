import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export const GET = async (req, res) => {
  try {
    console.log("Headers:", req.headers);
    console.log("Cookies:", req.cookies);
    await handleAuth()(req, res);
  } catch (error) {
    console.error("handleAuth error:", error);
    res.status(500).json({ error: "Kinde callback error" });
  }
};
