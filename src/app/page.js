"use client";

import { useState, useEffect } from "react";
import ChatHeader from "./components/ChatHeader";
import ChatBubble from "./components/ChatBubble";
import ChatInput from "./components/ChatInput";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [botTyping, setBotTyping] = useState(false);

  useEffect(() => {
    setBotTyping(true);
    const timer = setTimeout(() => {
      setBotTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: 1,
          sender: "bot",
          text: `
          Hello there 👋🏻 
          <br/><br/>
          My name is <strong>Abhishek Anand</strong>.
          <br/><br/>
          I am a full-stack Engineer, 
          currently experimenting mostly on DevOps and Ai engineering 👨🏻‍💻📚.
          I have experience in NextJs,MERN stack along with various database with modern tools & technologies.
          <br/><br/>
          Send <strong>'more'</strong> to know more about me.
        `,
        },
      ]);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleUserCommand = (command) => {
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
          <strong>'skills'</strong> - to know my skills<br/>
          <strong>'resume'</strong> - to get my resume<br/>
          <strong>'education'</strong> - to get my education details<br/>
          <strong>'address'</strong> - to get my address<br/>
          <strong>'contact'</strong> - to get ways to connect with me<br/>
          <strong>'projects'</strong> - to get details of my projects<br/>
          <strong>'clear'</strong> - to clear conversation
        `;
        break;

      case "skills":
        botResponse = "I am proficient in JavaScript, NextJs, MERN, DevOps, and more.";
        break;

      case "education":
        botResponse = "I completed a B.Tech. degree in Mechanical Engineering. <br/><br/> Skills matter, so you don't need to know why did i get rid of mechanical engineering?😄";
        break;

      case "address":
        botResponse = "I am based in India.";
        break;

      case "resume":
        botResponse = `
          Resume to be updated fully !!!<br/><br/>
          <div style="
            display: flex;
            align-items: center;
            background: #1F2C34;
            padding: 8px;
            border-radius: 6px;
            margin-bottom: 8px;
          ">
            <img src="/resume_icon.jpeg" alt="File Icon" style="width:24px; margin-right:8px;" />
            <span style="color: #fff; font-weight: 500;">Abhishek Resume.pdf</span>
            <a 
              href="/resume.pdf" 
              download 
              style="
                margin-left: auto; 
                color: #fff; 
                text-decoration: none; 
                background: #075E54;
                padding: 4px 8px;
                border-radius: 4px;
                display: flex;
                align-items: center;
              "
            >
              <img src="/download_icon.jpeg" alt="Download" style="width:16px; margin-right:4px;" />
              Download
            </a>
          </div>
        `;
        break;

      case "contact":
        botResponse = `
          <div style="
            display: flex;
            flex-direction: column;
            gap: 8px;
          ">
            <!-- Email -->
            <div style="
              display: flex; 
              justify-content: center; 
              align-items: center; 
              background: #1F2C34; 
              width: 180px; 
              height: 50px; 
              border-radius: 6px;
              margin: 0 auto;
            ">
              <a href="mailto:email.abhishek00@gmail.com" target="_blank" style="text-decoration: none;">
                <img src="/email_icon.jpeg" alt="Email" style="width:24px;" />
              </a>
            </div>
            <!-- GitHub -->
            <div style="
              display: flex; 
              justify-content: center; 
              align-items: center; 
              background: #1F2C34; 
              width: 180px; 
              height: 50px; 
              border-radius: 6px;
              margin: 0 auto;
            ">
              <a href="https://github.com/AbhishekAnan00" target="_blank" style="text-decoration: none;">
                <img src="/github_icon.jpeg" alt="GitHub" style="width:24px;" />
              </a>
            </div>
            <!-- Instagram -->
            <div style="
              display: flex; 
              justify-content: center; 
              align-items: center; 
              background: #1F2C34; 
              width: 180px; 
              height: 50px; 
              border-radius: 6px;
              margin: 0 auto;
            ">
              <a href="https://linkedin.com/in/abhishekanan00" target="_blank" style="text-decoration: none;">
                <img src="/linkedin_icon.jpeg" alt="Linkedin" style="width:24px;" />
              </a>
            </div>
            <!-- Twitter -->
            <div style="
              display: flex; 
              justify-content: center; 
              align-items: center; 
              background: #1F2C34; 
              width: 180px; 
              height: 50px; 
              border-radius: 6px;
              margin: 0 auto;
            ">
              <a href="https://twitter.com/AbhishekAnan00" target="_blank" style="text-decoration: none;">
                <img src="/twitter_icon.jpeg" alt="Twitter" style="width:24px;" />
              </a>
            </div>
          </div>
        `;
        break;

      case "projects":
        botResponse = `
          Many finished & unfinished 😅<br/>
          As of now, you can just jump into my GitHub Account.<br/><br/>
          <div style="
            display: flex;
            justify-content: center;
            align-items: center;
            background: #1F2C34;
            width: 180px;
            height: 50px;
            border-radius: 6px;
            margin: 0 auto;
          ">
            <a href="https://github.com/AbhishekAnan00" target="_blank" style="text-decoration: none; color: #fff; display: flex; align-items: center;">
              <img src="/github_icon.jpeg" alt="GitHub" style="width:24px; margin-right:8px;" />
              GitHub
            </a>
          </div>
        `;
        break;

      case "clear":
        setMessages([
        ]);
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
  }, 2000);
};

  return (
    <main className="flex flex-col h-screen bg-[#ECE5DD]">
      <ChatHeader botTyping={botTyping} />
      <div className="flex-1 p-4 overflow-y-auto">
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

