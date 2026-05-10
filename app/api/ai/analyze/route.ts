import { analyzeBug } from "@/lib/groq";

export async function POST(req: Request) {
  try {
    const { description } = await req.json();

    const result = await analyzeBug(description);

    // Remove markdown formatting
    const cleanedResult = result
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(cleanedResult);

    return Response.json(parsed);
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        severity: "Medium",
        category: "Backend",
        summary: "Parsing failed",
        suggestedFix:
          "Ensure AI returns valid JSON",
      },
      { status: 500 }
    );
  }
}