import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const ProjectsContainer = styled.div`
  background: #1e2b32;
  color: white;
  padding: 15px;
  border-radius: 12px;
  max-width: 80%;
`;

const GithubButton = styled.a`
  display: flex;
  align-items: center;
  background: #a5c1b0;
  padding: 10px;
  border-radius: 10px;
  color: black;
  font-weight: bold;
  text-decoration: none;
  margin-top: 10px;
  justify-content: center;
`;

const ProjectsUI = () => {
  return (
    <ProjectsContainer>
      <p>Many finished & unfinished 😅</p>
      <p>As of now, you can just jump into my GitHub account.</p>
      <GithubButton href="https://github.com/yourgithub">
        <FaGithub size={20} />
      </GithubButton>
    </ProjectsContainer>
  );
};

export default ProjectsUI;
