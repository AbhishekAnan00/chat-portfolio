import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [command, setCommand] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!command.trim()) return;
    onSend(command);
    setCommand("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center p-2 bg-white border-t border-gray-300"
    >
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 p-2 rounded-full border border-gray-300 focus:outline-none text-black"
      />
      <button type="submit" className="ml-2 bg-[#075E54] text-white p-2 rounded-full">
        Send
      </button>
    </form>
  );
}
