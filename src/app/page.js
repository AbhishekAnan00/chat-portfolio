"use client";
import { useState, useEffect } from "react";
import ChatHeader from "./components/ChatHeader";
import ChatBubble from "./components/ChatBubble";
import ChatInput from "./components/ChatInput";
import ProjectsUI from "./components/ProjectUI";
import ContactUI from "./components/ContactUI";
import ResumeUI from "./components/ResumeUI";

const defaultBotMessage = {
  id: 1,
  sender: "bot",
  text: `
          Hello there 👋🏻 
          <br/><br/>
          My name is <strong style="color: #f1c40f;">Abhishek Anand</strong>.
          <br/><br/>
          I am a full-stack Engineer, 
          currently experimenting mostly on DevOps and Ai engineering 👨🏻‍💻📚.
          I have experience in NextJs, MERN stack along with various databases with modern tools & technologies.
          <br/><br/>
          Send <strong>'more'</strong> to know more about me.
        `,
};

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [botTyping, setBotTyping] = useState(false);

  useEffect(() => {
    setBotTyping(true);
    const timer = setTimeout(() => {
      setBotTyping(false);
      setMessages([defaultBotMessage]);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleUserCommand = (command) => {

    const messageSound = new Audio("/message_sound.mp3");
    messageSound.play().catch((error) => {
      console.error("Error playing sound:", error);
    });
  
    const userMessage = {
      id: messages.length + 1,
      sender: "user",
      text: command,
    };
    setMessages((prev) => [...prev, userMessage]);
    setBotTyping(true);

    setTimeout(() => {
      let botResponse = "";

      switch (command.toLowerCase()) {
        case "more":
          botResponse = `
            Send a keyword to get what you want to know about me...<br/><br/>
            <strong style="color: #f1c40f;">'skills'</strong> - to know my skills<br/>
            <strong style="color: #f1c40f;">'resume'</strong> - to get my resume<br/>
            <strong style="color: #f1c40f;">'education'</strong> - to get my education details<br/>
            <strong style="color: #f1c40f;">'address'</strong> - to get my address<br/>
            <strong style="color: #f1c40f;">'contact'</strong> - to get ways to connect with me<br/>
            <strong style="color: #f1c40f;">'projects'</strong> - to get details of my projects<br/>
            <strong style="color: #f1c40f;">'clear'</strong> - to clear conversation
          `;
          break;
        case "skills":
          botResponse = "I am proficient in JavaScript, NextJs, MERN, DevOps, and more.";
          break;
        case "education":
          botResponse = "I completed a B.Tech. degree in Mechanical Engineering. <br/><br/> Skills matter, so you don't need to know why did I get rid of mechanical engineering?😉";
          break;
        case "address":
          botResponse = "I am based in India.";
          break;
        case "resume":
          botResponse = <ResumeUI/>;
          break;
        case "contact":
          botResponse = <ContactUI/>
          break;
        case "projects":
          botResponse = <ProjectsUI/>
          break;
        case "clear":
          setMessages([defaultBotMessage]);
          setBotTyping(false);
          return;
        default:
          botResponse = "Sorry, I didn't get you.";
          break;
      }

      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, sender: "bot", text: botResponse },
      ]);
      setBotTyping(false);
    }, 1000);
  };

  return (
    <main className="flex flex-col h-screen w-screen bg-[#ECE5DD]">
      <ChatHeader botTyping={botTyping} />
      <div className="flex-1 p-4 overflow-y-auto" style={{backgroundImage:"url('/whatsapp_image.jpg')"}}>
        <div className="mb-4 space-y-2">
          {messages.map((msg) => (
            <ChatBubble key={msg.id} sender={msg.sender} text={msg.text} />
          ))}
        </div>
      </div>
      <ChatInput onSend={handleUserCommand} />
    </main>
  );
}


