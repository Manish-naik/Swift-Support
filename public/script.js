const sendBtn = document.getElementById("send-btn");
const inputField = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");
const typing = document.getElementById("typing-indicator");
const clearBtn = document.getElementById("clear-history");

const STORAGE_KEY = "chat_history_v1";
const CLIENT_KEY = "chat_client_id";

function getClientId() {
  let id = localStorage.getItem(CLIENT_KEY);
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem(CLIENT_KEY, id);
  }
  return id;
}

function loadHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch { return []; }
}

function saveHistory(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function renderHistory(items) {
  chatBox.innerHTML = "";
  for (const msg of items) {
    const el = createMessageElement(msg.role, msg.text);
    chatBox.appendChild(el);
  }
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Auto-grow textarea
function autosize() {
  inputField.style.height = "auto";
  inputField.style.height = Math.min(inputField.scrollHeight, 160) + "px";
}
inputField.addEventListener("input", autosize);

// Keyboard behavior: Enter to send, Shift+Enter = newline
inputField.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

sendBtn.addEventListener("click", sendMessage);
clearBtn?.addEventListener("click", () => {
  saveHistory([]);
  renderHistory([]);
});

function createMessageElement(role, text) {
  const wrapper = document.createElement("div");
  wrapper.className = `message ${role}`;

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = role === "user" ? "🧑" : "🤖";

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;

  wrapper.appendChild(avatar);
  wrapper.appendChild(bubble);
  return wrapper;
}

async function sendMessage() {
  const userText = inputField.value.trim();
  if (!userText) return;

  // UI state
  sendBtn.disabled = true;
  typing.classList.remove("hidden");

  // Render user bubble
  const userElem = createMessageElement("user", userText);
  chatBox.appendChild(userElem);
  inputField.value = "";
  autosize();
  chatBox.scrollTop = chatBox.scrollHeight;

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userText, clientId: getClientId() })
    });

    const data = await response.json();
    const botText = data?.reply ?? "Sorry, I couldn’t get a response.";

    const botElem = createMessageElement("bot", botText);
    chatBox.appendChild(botElem);
    chatBox.scrollTop = chatBox.scrollHeight;

    // persist
    const history = loadHistory();
    history.push({ role: "user", text: userText });
    history.push({ role: "bot", text: botText });
    saveHistory(history);
  } catch (error) {
    const errElem = createMessageElement("bot", "Error: Could not reach the server.");
    chatBox.appendChild(errElem);
  } finally {
    typing.classList.add("hidden");
    sendBtn.disabled = false;
    inputField.focus();
  }
}

// Initial render
renderHistory(loadHistory());
