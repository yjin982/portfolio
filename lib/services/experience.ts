"use server";

import { sql } from "@vercel/postgres";
import { Experience } from "@/lib/types/about";

export async function getExpData(): Promise<Experience[]> {
  try {
    const { rows } = await sql<Experience>`
      SELECT 
        id,
        company_name as "companyName",
        start_date as "startDate",
        end_date as "endDate",
        is_current as "isCurrent",
        role,
        description,
        display_order as "displayOrder"
      FROM experiences
      ORDER BY start_date DESC
    `;

    return rows;
  } catch (error) {
    throw new Error("Failed to fetch");
  }
}
