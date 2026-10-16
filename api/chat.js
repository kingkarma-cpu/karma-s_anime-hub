
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const { message } = req.body || {};

  if (
    typeof message !== "string" ||
    !message.trim() ||
    message.length > 1000
  ) {
    return res.status(400).json({
      error: "Please send a message under 1000 characters."
    });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: "The AI service hasn't been configured yet."
    });
  }

  try {
    const response = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4.1-mini",
          instructions:
            "You are KarmaBot, the friendly anime assistant for Karma's Anime Hub. Help users discover anime, explain anime genres, answer anime questions, and explain how to use the website. Be friendly, concise, and honest. Do not claim to know the site's current catalogue unless that information is provided. Never invent streaming links.",
          input: message,
          max_output_tokens: 400
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("AI API error:", data.error?.message);

      return res.status(502).json({
        error: "The AI service couldn't answer right now."
      });
    }

    const reply = (data.output || [])
      .flatMap(item => item.content || [])
      .filter(item => item.type === "output_text")
      .map(item => item.text)
      .join("\n");

    return res.status(200).json({
      reply: reply || "I couldn't generate a reply. Try again!"
    });
  } catch (error) {
    console.error("KarmaBot error:", error);

    return res.status(500).json({
      error: "Something went wrong. Please try again."
    });
  }
}
