import ChatHeader from "./components/ChatHeader";

export default function ChatPage() {
  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <ChatHeader />
      <div className="flex-1 p-4 text-white">Chat messages go here...</div>
    </div>
  );
}
