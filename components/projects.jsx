import React from 'react';
import './projects.css';
import ImageCarousel from './ImageCarousel.jsx';
import projectOnePhoto from '../assets/project_one_photo.png';
import projectTwoPhoto from '../assets/project_one_photo2.png';
import projectThreePhoto from '../assets/project_one_photo3.JPG';
import projectFourPhoto from '../assets/project_two_photo1.png';
import projectFivePhoto from '../assets/project_two_photo2.JPG';
import projectSixPhoto from '../assets/project_two_photo3.png';
import projectSevenPhoto from '../assets/project_three_photo1.png';
import projectEightPhoto from '../assets/project_three_photo2.png';
import projectNinePhoto from '../assets/project_three_photo3.png';

function Projects() {
    return (
        <div className="projects-container">
            <div className="projects-header">
                <h1>Projects</h1>
            </div>
            <ul className="projects-list">
                    <li className="project-item">
                        <h5>Solar Panel Efficiency Project (Summer 2026 to Present)</h5>
                        <p>The objective of this project is to utilize both my skills in computer science and electrical engineering and apply them to the field of sustainability, a field I'm very passionate about. The goal of this project is to build a web application that takes various specifications of a solar panel as inputs and calculates the solar panel's efficiency. Once the application is complete, I plan to build a real solar panel, measure its efficiency, enter the specifications into my web app, and compare the measured result with the app's result. Currently, I am in the design phase of the application, researching what factors contribute to a solar panel's efficiency and how to accurately model these factors in the application.</p>
                    </li>
                    <li className="project-item">
                        <h5>Personal Website (January 2026 to Present)</h5>
                        <ImageCarousel images={[projectThreePhoto, projectOnePhoto, projectTwoPhoto]} altText="Personal website screenshot" />
                        <p>This project refers to the development of this very website! I've always had an interest in front end development and in my prior job experience, I had the opportunity to become proficient in web development. I used React.js to build this website with an organized component-based architecture that is easy to maintain. I update this website regularly because it gives me a space to showcase my professional development beyond what can be found within the bullet points of a resume.</p>
                    </li>
                    <li className="project-item">
                        <h5>Lego Mindstorm Robot Project (January 2025 to April 2025)</h5>
                        <ImageCarousel images={[projectSevenPhoto, projectEightPhoto, projectNinePhoto]} altText="Lego Storm Robot screenshot" />
                        <p>The Lego Storm Robot Project was a project for my introductory engineering project. I led a team of 4 to build a robot that tracked a black line, picked up boxes, determined the weight of the box, and dropped the boxes off at designated drop-off zones. This project taught me a lot about project constraints, as we were only given a specific set of materials (legos, sensors, etc), and how to work with sensors to achieve project goals. It also was good practice for algorithmic thinking because there were a lot of functions the robot needed to perform and it forced me to think through the logic behind each function before implementing it.</p>
                    </li>
                    <li className="project-item">
                        <h5>Project Robotigo (August 2024 to December 2024)</h5>
                        <ImageCarousel images={[projectFourPhoto, projectFivePhoto, projectSixPhoto]} altText="Project Robotigo screenshot" />
                        <p>Project Robotigo was a project to build a food delivery drone. I led a team of 4 to design a drone that could deliver a 5 kg payload anywhere within a 3 mile radius. At the end of the project, we had built a prototype of the drone that served as proof of concept. From designing and testing, I learned how to manage a team project, use CAD software, and systematically ensure project criteria is met. From building the prototype, I learned a lot of the theory behind electrical component interactions and the physics behind propellor-driver aircrafts.</p>
                    </li>
            </ul>
            <footer className="site-footer">
                <p>2026 Will Acree</p>
            </footer>
        </div>
    );
}

export default Projects;