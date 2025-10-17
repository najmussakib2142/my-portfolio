import React from 'react';

const About = () => {
    return (
        <div>
            <section id="about" className="py-20 px-6 md:px-16 bg-base-100">
                <div className="container mx-auto max-w-4xl text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4 text-primary">About Me</h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        I started learning web development out of curiosity — fascinated by how
                        websites function behind the scenes. Over time, I’ve become passionate about
                        crafting engaging user experiences with clean, modern UI and efficient
                        code. Outside of programming, I enjoy football, sketching, and reading
                        technology blogs — keeping both my creativity and curiosity alive.
                    </p>
                </div>
                
            </section>
        </div>
    );
};

export default About;