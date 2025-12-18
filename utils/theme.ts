import { cookies } from "next/headers";

export async function getServerTheme(): Promise<"light" | "dark"> {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value;
  return (theme as "light" | "dark") || "light";
}
