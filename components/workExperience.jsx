import React from 'react';
import './workExperience.css';

function WorkExperience({ setCurrentPage }) {
    return (
        <div className="work-experience-container">
{/*Work Experience section header*/}
            <div className="work-experience-header">
                <h1>Work Experience</h1>
            </div>

{/*Skills developed through past work experience*/}
            <div className="work-experience-section">
                <h2>Polygon Solutions Internship</h2>
                <p>During my internship at <a href="https://polygonsol.com/" target="_blank" rel="noopener noreferrer">Polygon Solutions</a>, I developed both soft skills and technical skills relevant to the field of electrical engineering. Some of these skills include:</p>
                <div className="work-experience-grid">
                    <div className="work-experience-card">
                        <div>
                            <h5>Large Language Models</h5>
                                <p>At Polygon, I had a unique opportunity to train and configure a large language model called Pulse BI. This LLM was designed to take a user input and based on that input, generate a chart/dashboard that is tailored to the user's specific needs, allowing the user to visualize data and identify correlations. This project was demo'd to the City of Columbus to demonstrate how the company was integrating AI into software products.</p>
                        </div>
                    </div>
                    <div className="work-experience-card">
                        <div>
                            <h5>Back End Development</h5>
                                <p>During my internship, I gained experience building back ends for various software products. I used 3rd party APIs and libraries to integrate interactive maps and dashboards into applications from various sources.</p>
                        </div>
                    </div>
                    <div className="work-experience-card">
                        <div>
                            <h5>Spatial Data Analysis</h5>
                                <p>During my internship, I performed data analysis and transformations on spatial datasets with over 50,000 records, gaining experience with softwares such as <a href="https://www.esri.com/en-us/arcgis/products/arcgis-pro/" target="_blank" rel="noopener noreferrer">ARCGIS</a> and <a href="https://www.safe.com/" target="_blank" rel="noopener noreferrer">FME,</a> helping the company to keep their data accurate and up-to-date.</p>
                        </div>
                    </div>
                    <div className="work-experience-card">
                        <div>
                            <h5>Technical Documentation</h5>
                                <p>Part of my role as a technology intern was to create and maintain technical documentation and user guides for various ongoing projects. This allowed projects to be handed off smoothly to other team members, minimizing the time needed for other developers to familiarize themselves with the project's architecture.</p>
                        </div>
                    </div>
                    <div className="work-experience-card">
                        <div>
                            <h5>Front End Development</h5>
                                <p>During my internship, I gained experience building front ends for various software products, focusing on high quality user experience. I used various front end languages such as HTML, CSS, and JavaScript, as well as frameworks such as ReactJS, NodeJS, and Bootstrap to create responsive and interactive user interfaces.</p>
                        </div>
                    </div>
                    <div className="work-experience-card">
                        <div>
                            <h5>Teamwork</h5>
                                <p>During my internship, I had the opportunity to be part of a team with people of many different backgrounds and skillsets. I participated in regular meetings and discussions, ensuring effective communication with team members.</p>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="site-footer">
                <p>2026 Will Acree</p>
            </footer>
        </div>
           
    );
}

export default WorkExperience;
