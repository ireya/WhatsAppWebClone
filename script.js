const chatData = {
    "rose": [],
    "lisa": [],
    "jisoo": [],
    "jennie": [],
    "jungkook": [],
    "jimin": []
};

let currentChat = "rose";

document.querySelectorAll(".chat-item").forEach(item => {
    item.addEventListener("click", function() {
        const chatName = this.textContent.trim();
        currentChat = this.getAttribute("data-chat");
        document.getElementById("chat-header-name").textContent = chatName;
        document.getElementById("chat-messages").innerHTML = "";
        chatData[currentChat].forEach(msg => {
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("message", msg.type);
            messageDiv.textContent = msg.text;
            document.getElementById("chat-messages").appendChild(messageDiv);
        });
    });
});

document.getElementById("send-button").addEventListener("click", function() {
    var input = document.getElementById("message-input");
    var messageText = input.value.trim();
    if (messageText !== "") {
        var chatMessages = document.getElementById("chat-messages");
        var messageDiv = document.createElement("div");
        messageDiv.classList.add("message", "sent");
        messageDiv.textContent = messageText;
        chatMessages.appendChild(messageDiv);
        input.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        chatData[currentChat].push({ text: messageText, type: "sent" });
    }
});