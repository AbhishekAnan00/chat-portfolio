"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ChatHeader({ botTyping }) {
  const [lastSeen, setLastSeen] = useState(null);

  useEffect(() => {
    if (!botTyping) {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      setLastSeen(formattedTime);
    }
  }, [botTyping]);
  return (
    <div className="flex items-center p-4 bg-[#15443D] text-white shadow">
      <Image
        src="/photo.png" 
        alt="Photo"
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="ml-4">
        <div className="text-lg font-bold">Abhishek Anand</div>
        <div className="text-sm">
          {botTyping ? (
            <span className="text-[#25D366]">typing...</span>
          ) : (
            lastSeen && `last seen at ${lastSeen}`
          )}
        </div>
      </div>
    </div>
  );
}
