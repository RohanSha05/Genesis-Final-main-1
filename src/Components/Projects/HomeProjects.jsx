import { Link } from "react-router-dom";
import ProjectsCard from "./ProjectsCard";
import Brands from "../Brands/Brands";

import './HomeProjects.css';



// Dummy data for cards
const cardsData = [
  { image: "https://i.postimg.cc/Qtm1sct1/Rectangle-47.png", title: "The Prothom Alo", subtitle: "- Industry" },
  { image: "https://i.postimg.cc/Qtm1sct1/Rectangle-47.png", title: "Playdom Bangladesh Limited", subtitle: "- Industry" },
  { image: "https://i.postimg.cc/Qtm1sct1/Rectangle-47.png", title: "VFS Global", subtitle: "- Industry" },
  { image: "https://i.postimg.cc/Qtm1sct1/Rectangle-47.png", title: "Philips Bangladesh Ltd", subtitle: "- Industry" },
];

const HomeProjects = () => {
  return (
    <div className=" py-10 home-projects ">
         <div className="mb-16">
            <h1 className="font-semibold text-lg font-rajdhani text-[#00A1E6] underline pb-3.5 text-center  ">
              Latest Projects
            </h1>
            <h2 className="text-5xl  text-center font-bold font-rajdhani leading-[58px] mb-10">
            Let’s Have a Look At Our <br /> Latest Projects
            </h2>
          </div>
      <div className=" px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        {cardsData.map((card, index) => (
          <ProjectsCard key={index} image={card.image} title={card.title} subtitle={card.subtitle} />
        ))}
      </div>
      <p className="text-center mt-4 font-bold">If you want to explore more projects just <span><Link className="text-[#0786fc]" to='/all-projects'>Click Here</Link></span> & See all Projects</p>

      <Brands></Brands>
    </div>
  );
};

export default HomeProjects;