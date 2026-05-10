export const analyzeBug = async (
  description: string
) => {
  try {

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "user",
              content: `
Analyze this software bug.

Bug:
${description}

Return ONLY valid JSON:

{
  "severity": "Low | Medium | High",
  "category": "UI | Backend | API | Database",
  "summary": "short summary",
  "suggestedFix": "fix suggestion"
}
              `,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    console.log(data);

    if (!data.choices) {
      throw new Error(
        data.error?.message || "Groq API Error"
      );
    }

    return data.choices[0].message.content;
  } catch (error) {
    console.log(error);

    return JSON.stringify({
      severity: "Medium",
      category: "Backend",
      summary: "AI analysis failed",
      suggestedFix:
        "Check Groq API key or model",
    });
  }
};