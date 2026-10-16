
(() => {
  if (document.getElementById("karma-bot-button")) return;

  const style = document.createElement("style");
  style.textContent = `
    #karma-bot-button {
      position: fixed;
      right: 20px;
      bottom: 20px;
      z-index: 9999;
      border: 0;
      border-radius: 30px;
      padding: 14px 20px;
      background: #7c3aed;
      color: white;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 0 4px 20px #0006;
    }
    #karma-bot-panel {
      position: fixed;
      right: 20px;
      bottom: 85px;
      z-index: 9999;
      width: min(350px, calc(100vw - 30px));
      height: 430px;
      background: #111827;
      color: white;
      border: 1px solid #374151;
      border-radius: 16px;
      display: none;
      flex-direction: column;
      overflow: hidden;
      font-family: Arial, sans-serif;
      box-shadow: 0 8px 30px #0008;
    }
    #karma-bot-header {
      padding: 16px;
      background: #6d28d9;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
    }
    #karma-bot-messages {
      flex: 1;
      padding: 12px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .karma-bot-message {
      padding: 10px 12px;
      border-radius: 12px;
      max-width: 85%;
      white-space: pre-wrap;
      overflow-wrap: anywhere;
      font-size: 14px;
    }
    .karma-bot-bot {
      align-self: flex-start;
      background: #263244;
    }
    .karma-bot-user {
      align-self: flex-end;
      background: #6d28d9;
    }
    #karma-bot-form {
      display: flex;
      padding: 10px;
      gap: 8px;
      border-top: 1px solid #374151;
    }
    #karma-bot-input {
      flex: 1;
      min-width: 0;
      padding: 11px;
      border-radius: 9px;
      border: 1px solid #4b5563;
      background: #1f2937;
      color: white;
      outline: none;
    }
    #karma-bot-form button {
      border: 0;
      border-radius: 9px;
      padding: 0 14px;
      background: #7c3aed;
      color: white;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  const button = document.createElement("button");
  button.id = "karma-bot-button";
  button.textContent = "✨ Ask KarmaBot";

  const panel = document.createElement("section");
  panel.id = "karma-bot-panel";
  panel.innerHTML = `
    <div id="karma-bot-header">
      <span>✨ KarmaBot</span>
      <button id="karma-bot-close"
        aria-label="Close chat"
        style="background:none;border:0;color:white;font-size:20px;cursor:pointer">
        ×
      </button>
    </div>
    <div id="karma-bot-messages" aria-live="polite"></div>
    <form id="karma-bot-form">
      <input id="karma-bot-input"
        placeholder="Ask about anime..."
        autocomplete="off"
        aria-label="Your message"
        required>
      <button type="submit">Send</button>
    </form>
  `;

  document.body.append(button, panel);

  const messages = panel.querySelector("#karma-bot-messages");
  const input = panel.querySelector("#karma-bot-input");
  const form = panel.querySelector("#karma-bot-form");

  function addMessage(text, sender) {
    const bubble = document.createElement("div");
    bubble.className = `karma-bot-message karma-bot-${sender}`;
    bubble.textContent = text;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
    return bubble;
  }

  button.addEventListener("click", () => {
    panel.style.display = "flex";
    button.style.display = "none";

    if (!messages.children.length) {
      addMessage(
        "Hey! I'm KarmaBot 👋 Ask me about anime or how to use this website!",
        "bot"
      );
    }
    input.focus();
  });

  panel.querySelector("#karma-bot-close").addEventListener("click", () => {
    panel.style.display = "none";
    button.style.display = "block";
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const question = input.value.trim();
    if (!question) return;

    addMessage(question, "user");
    input.value = "";
    input.disabled = true;

    const reply = addMessage("Thinking...", "bot");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Chat service unavailable.");
      }

      reply.textContent = data.reply || "I couldn't generate a reply.";
    } catch (error) {
      reply.textContent =
        "I can't connect to my AI service yet. Let's finish setting up KarmaBot!";
    } finally {
      input.disabled = false;
      input.focus();
      messages.scrollTop = messages.scrollHeight;
    }
  });
})();
