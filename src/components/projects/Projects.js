import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, profileFive } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
          src={profileFive}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="CHAT AGENT"
          des=" A React-based chatbot interface powered by Anthropic's Claude API. It features persistent chat history, API key management, and a modern responsive UI. Built using Vite, Tailwind CSS, and TypeScript.!"
          src={projectOne}
          url={'https://github.com/12jyo/Chat-Agent'}
          isGlobeIcon = {true}
          globeUrl= {'https://conversational-interface.netlify.app/'}
        />
        <ProjectsCard
          title="SPACEX MISSION TRACKER"
          des=" A React-based application that fetches and displays launch data from the SpaceX API, featuring authentication, enriched detail views, and deep linking. Built with Mantine UI, React Query, Zustand, and React Router."
          src={projectTwo}
          url={'https://github.com/12jyo/spacex-mission-tracker'}
          isGlobeIcon = {true}
          globeUrl= {'https://spacecraze.netlify.app/'}
        />
        <ProjectsCard
          title="SCRATCH STARTER"
          des=" An interactive visual playground inspired by Scratch, built with React, Vite, and Framer Motion. This tool allows users to create, move, animate, and control sprites with a simplified command interface."
          src={projectThree}
          url={'https://github.com/12jyo/scratch-starter'}
          isGlobeIcon = {true}
          globeUrl= {'https://scratchy-launcher.netlify.app/'}
        />
      </div>
    </section>
  );
}

export default Projects