import React from 'react';
import Icon from './homeIcon.jsx';
import './home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-icon-wrapper">
                    <Icon />
                </div>
                <div className="home-text">
                    <h1>Welcome!</h1>
                    <h3>About Me</h3>
                    <p>Hi! My name is Will Acree. I am currently a 2nd year student at the University of Cincinnati pursuing a Bachelor's degree in electrical engineering. Additionally, I plan to enter the Accend program to earn a Master of Engineering with a focus in sustainable energy without changing my expected graduation date. I am currently seeking co-op/internship opportunities for Summer 2026 and Spring 2027. Feel free to reach out!</p>                    <br />
                    <h3>Why Hire Me?</h3>
                    <p>As a former computer science major, not only do I offer strong electrical engineering skills, but also a solid foundation in computer science and software development. My interdisciplinary skillset gives me the ability to understand full system-architectures and how hardware and software components interact, rather than only being able to focus on individual components. I didn't leave computer science behind; I brought it with me.</p>
                    
                </div>
            </div>
            <footer className="site-footer">
                <p>2026 Will Acree</p>
            </footer>
        </div>
    );
}

export default Home;