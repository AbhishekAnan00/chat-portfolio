import styled from 'styled-components';
import { FaFilePdf } from 'react-icons/fa';

const ResumeContainer = styled.div`
  background: #1e2b32;
  color: white;
  padding: 15px;
  border-radius: 12px;
  max-width: 80%;
`;

const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  background: #a5c1b0;
  padding: 10px;
  border-radius: 10px;
  color: black;
  font-weight: bold;
  text-decoration: none;
  margin-top: 10px;
`;

const ResumeUI = () => {
  return (
    <ResumeContainer>
      <p>Resume to be updated fully !!!</p>
      <DownloadButton href="/path-to-your-resume.pdf" download>
        <FaFilePdf size={20} style={{ marginRight: '8px' }} />
        Download Resume
      </DownloadButton>
    </ResumeContainer>
  );
};

export default ResumeUI;
