import React from 'react';
import "/frontend/index.css";
import ThreeDText from './ThreeDText'; 

const Intro = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="intro-line">  
                    <h1 className="intro-heading">Hi, I'm</h1>       
                    <ThreeDText />
                </div>
                <div className="para-line">
                    <h2 className="creative-director-heading">Creative Director, UI/UX Designer 
                    & Multi-Disciplinary Artist</h2>
                    <p className="intro-paragraph">
                        "Greetings! I'm a digital creator at heart, ever on the quest for new knowledge. 
                        In the seamless blend of art and technology, - my canvas just happens to be the digital world. 
                        I like to weave together technology and creativity to bring visions to life. 
                        I believe that every byte of code and brushstroke tells a story. 
                        Join me as I script a tale of innovation, 
                        exploring the delicate dance between art and technology in my portfolio. 
                        Together, let's shape a more vibrant, artistic future."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Intro;
