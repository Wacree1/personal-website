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
                    <p>Hi! My name is Will Acree. I am currently a 3rd year student at the University of Cincinnati pursuing a Bachelor's degree in electrical engineering. Additionally, I plan to enter the Accend program to earn a Master of Engineering with a focus in sustainable energy without changing my expected graduation date. I am currently seeking co-op/internship opportunities for Spring 2027. Feel free to reach out!</p>                    <br />
                    <h3>Why Hire Me?</h3>
                    <p>I love the challenge of learning new things and thrive in work settings that require me to think critically and solve problems, which is essential in a field that is as broad as electrical engineering. Additionally, as a former computer science major, I have a foundation in programming and algorithmic thinking on top of a strong electrical engineering skillset. This allows to me understand system-architectures and the interactions between hardware and software components at a deeper level.</p>
                    
                </div>
            </div>
            <footer className="site-footer">
                <p>2026 Will Acree</p>
            </footer>
        </div>
    );
}

export default Home;