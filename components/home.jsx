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
                    <p>My name is Will Acree. I am currently a 2nd year student at the University of Cincinnati pursuing a degree in electrical engineering. Through a combination of coursework, hands-on engineering projects, and internships, I have developed a strong foundation in both electrical engineering principles and computer science. I also plan to enter the accend program at UC to acquire a Master of Engineering with a focus in sustainable energy.</p>
                    <br />
                    <br />
                    <h3>Why Hire Me?</h3>
                    <p>As a former computer science major, not only do I offer strong electrical engineering skills, but also a solid foundation in computer science and software development, giving me a unique and versatile skill set. I didn't leave Computer Science; I brought it with me. </p>
                </div>
            </div>
            <footer className="site-footer">
                <p>2026 Will Acree</p>
            </footer>
        </div>
    );
}

export default Home;