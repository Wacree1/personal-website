import React from 'react';
import './skills.css';

function Skills({ setCurrentPage }) {
    return (
        <div className="skills-container">
{/*Skills section header*/}
            <div className="skills-header">
                <h1>Education</h1>
            </div>
            <div className="skills-section">

{/*Skills developed through University of Cincinnati courses*/}
                <h2>University of Cincinnati</h2>
                <p>As an electrical engineering student at the University of Cincinnati, I have taken a variety of courses that have provided me with a solid understanding of electrical engineering concepts and principles. Some of the key courses I have taken include:</p>
                <div className="skills-grid">
                    <div className="skill-card">
                        <div>
                        <h5>Digital Design</h5>
                        <p>In Digital Design, I learned the fundamentals of digital circuit design, including combinational and sequential logic design, flip-flops, and the use of hardware description languages such as Verilog.</p>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div>
                        <h5>Electronics</h5>
                        <p>In Electronics, I learned how to combine linear and non-linear electrical components to design circuits with specific functionalities such as voltage clipping, voltage shifting, and ac rectification.</p>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div>
                        <h5>Semiconductor Physics/Devices</h5>
                        <p>Between my two semiconductor courses, I learned about the fundamentals of doping and p-n junctions, and how these properties can be harnessed to create components such as diodes, transistors, and integrated circults as well as how they are used in industry to build practical electronic systems such as solar cells, LED's, and microprocessors.</p>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div>
                        <h5>Network Analysis</h5>
                        <p>In Network Analysis, I learned how to analyze electrical circuits using the I-V relationships of components such as resistors, capacitors, and inductors and how these components are used to functionally to design mechanisms such as 3-phase power systems and magnetic coupling.</p>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div>
                        <h5>Signals &amp; Systems</h5>
                        <p>In Signals &amp; Systems, I studied the mathematical representation of signals and systems, including time and frequency domain analysis, convolution, and the use of transforms such as the Fourier and Laplace transforms.</p>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div>
                        <h5>Computer Science</h5>
                        <p>I went into Computer Science already knowing how to program, but what made this class really valuable was learning how to approach problems systematically. This class taught me the importance of thinking through the steps to solve a problem before applying technical skills, which has benefitted me in all aspects of my studies.</p>
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

export default Skills;