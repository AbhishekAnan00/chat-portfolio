import styled from 'styled-components';
import { FaEnvelope, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactContainer = styled.div`
  background: #1e2b32;
  color: white;
  padding: 15px;
  border-radius: 12px;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #a5c1b0;
  padding: 10px;
  border-radius: 10px;
  color: black;
  font-weight: bold;
  text-decoration: none;
  font-size: 20px;
`;

const ContactUI = () => {
  return (
    <ContactContainer>
      <ContactButton href="mailto:your-email@example.com">
        <FaEnvelope />
      </ContactButton>
      <ContactButton href="https://github.com/yourgithub">
        <FaGithub />
      </ContactButton>
      <ContactButton href="https://instagram.com/yourinstagram">
        <FaInstagram />
      </ContactButton>
      <ContactButton href="https://twitter.com/yourtwitter">
        <FaTwitter />
      </ContactButton>
    </ContactContainer>
  );
};

export default ContactUI;
