import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import cli from "../public/images/cli.png";
import mShop from "../public/images/mShop.webp";
import dynamicPortfolio from "../public/images/dynamicPortfolio.png";
import todo from "../public/images/todo.png";
import dashboard from "../public/images/dashboard.webp";
import Image from "next/image";
import ProjectCard from "./ProjectCard";


const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 place-items-center">
        <ProjectCard
          content={cli.src}
          title="Typecript CLI-based"
          link="https://github.com/sahamahmed/projects/tree/main/wmd"
          desc="These are 11 cli-based projects made with typescript and demonstrate good understanding of programming logic."
        />
        <ProjectCard
          content={todo.src}
          title="TODO-APP"
          link="https://github.com/sahamahmed/TODO-APP"
          desc="A TODO app based on vanilla js, html and css allows user to manage tasks. The data is stored using Local storage"
        />
      </div>
    </div>
  );
};

export default Projects;