import chatbotContext from "./chatbotKontext.txt?raw";

const input = document.getElementById("input");
const outputContent = document.getElementById("outputContent");
const send = document.getElementById("send");

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
const placeholder = '<span class="placeholder">Antwort erscheint hier</span>';

function buildPrompt(message) {
  return `Hier sind ein paar wichtige informationen die beim beantworten der frage hilfreich sein können: ${chatbotContext} jetzt, du, der hilfreiche Bildungsassistenten und personalassistent sollst nun meine, einen unwissenden Hilflosen schöler folgende frage beantworten SO KURZ UND SIMPEL WIE MÖGLICH: ${message}`;
}

function getTextFromResponse(data) {
  if (!data || !Array.isArray(data.output)) return "";

  let text = "";

  for (const item of data.output) {
    if (!item || !Array.isArray(item.content)) continue;

    for (const part of item.content) {
      if (part && part.type === "output_text" && typeof part.text === "string") {
        text += part.text;
      }
    }
  }

  return text.trim();
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function renderText(text) {
  return escapeHtml(text)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\n/g, "<br>");
}

async function typeText(element, text, delay = 12) {
  let current = "";
  for (let i = 0; i < text.length; i++) {
    current += text[i];
    element.innerHTML = renderText(current);
    element.scrollTop = element.scrollHeight;
    await new Promise(resolve => setTimeout(resolve, delay));
  }
}

async function sendMessage() {
  const message = input.value.trim();

  if (!apiKey) {
    outputContent.textContent = "OPENAI_API_KEY fehlt in der .env Datei.";
    return;
  }

  if (!message) {
    outputContent.textContent = "Bitte gib eine Frage ein.";
    return;
  }

  try {
    outputContent.textContent = "Personalassistent denkt...";

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey
      },
      body: JSON.stringify({
        model: "gpt-5.4",
        input: buildPrompt(message)
      })
    });

    const data = await response.json();

    if (!response.ok) {
      outputContent.textContent = data?.error?.message || "Request failed.";
      return;
    }

    const text = getTextFromResponse(data);

    if (!text) {
      outputContent.textContent = "No response text returned.";
      return;
    }

    await typeText(outputContent, text, 12);
  } catch (error) {
    outputContent.textContent = error.message;
  }
}

send.addEventListener("click", sendMessage);
input.addEventListener("keydown", event => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
    sendMessage();
  }
});
