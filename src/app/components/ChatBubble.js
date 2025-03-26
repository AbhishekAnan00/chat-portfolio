export default function ChatBubble({ sender, text }) {
  const isUser = sender === "user";
  const content =
    typeof text === "string" ? (
      <span dangerouslySetInnerHTML={{ __html: text }} />
    ) : (
      text
    );

  return (
      <div className={`flex ${isUser ? "justify-end" : "justify-start"}` } 
>
      <div
        className="rounded-lg p-3 max-w-xs mb-2"
        style={{
          backgroundColor: isUser ? "#2F6173" : "#0B141A",
          color: isUser ? "#000" : "#fff",
        }}
      >
        {content}
      </div>
    </div>
  );
}


