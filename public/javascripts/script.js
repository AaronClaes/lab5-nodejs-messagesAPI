fetch("/api/v1/messages")
  .then((response) => response.json())
  .then((data) => {
    messages = data.data.message;
    messages.forEach((message) => {
      let ul = document.querySelector(".messagesList");
      let li = document.createElement("li");
      ul.appendChild(li);
      li.textContent = `${message.user}: ${message.text}`;
    });
  });
