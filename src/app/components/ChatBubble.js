export default function ChatBubble({ sender, text }) {
  const isUser = sender === "user";

  if (!isUser) {
    return (
      <div className="flex justify-start">
        <div
          className="rounded-lg p-3 max-w-xs mb-2"
          style={{
            backgroundColor: "#0B141A", 
            color: "#fff",
          }}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    );
  }
  return (
    <div className="flex justify-end">
      <div
        className="rounded-lg p-3 max-w-xs mb-2"
        style={{
          backgroundColor: "#DCF8C6", 
          color: "#000",
        }}
      >
        {text}
      </div>
    </div>
  );
}

