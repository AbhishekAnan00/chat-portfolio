import styled from 'styled-components';
import { FaEnvelope, FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactContainer = styled.div`
  background: #1e2b32;
  color: white;
  padding: 15px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #a5c1b0;
  border-radius: 10px;
  color: black;
  font-weight: bold;
  padding: 10px;
  text-decoration: none;
  font-size: 40px;
  width: 150px;
  height: 40px;
`;

const ContactUI = () => {
  return (
    <ContactContainer>
      <ContactButton href="mailto:email.abhishek00@gmail.com">
        <FaEnvelope />
      </ContactButton>
      <ContactButton href="https://github.com/AbhishekAnan00">
        <FaGithub />
      </ContactButton>
      <ContactButton href="https://linkedin.com/in/abhishekanan00">
        <FaLinkedin />
      </ContactButton>
      <ContactButton href="https://twitter.com/AbhishekAnan00">
        <FaTwitter />
      </ContactButton>
    </ContactContainer>
  );
};

export default ContactUI;
