import { useState } from "react";
import { MdSend } from 'react-icons/md';
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
      style={{background:"#15443D"}}
    >
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 p-2 rounded-full  focus:outline-none text-white"
      />
      <button type="submit" className="ml-2 bg-[#075E54] text-white p-2 rounded-full">
      <MdSend size={24} color="#fff" />
      </button>
    </form>
  );
}
