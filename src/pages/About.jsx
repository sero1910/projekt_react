// src/pages/About.jsx

import React, { useEffect } from 'react';
import AOS from 'aos';

const About = () => {
    useEffect(() => {
        AOS.refresh(); 
    }, []);

    return (
        <main>
            <section id="home-hero" className="container">
                <div>
                    <h1 className="display-3" data-aos="fade-down">Cześć, jestem Wojtek</h1>
                </div>
            </section>

            <section id="o-mnie" className="py-5 bg-light">
                <div className="container">
                    <h2 className="mb-4" data-aos="fade-right">O Mnie</h2>
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-up">
                            <p>Jestem ambitną osobą z silnym zamiłowaniem do świata IT. W pracy wyróżnia mnie pracowitość, dokładność oraz zdyscyplinowanie, co pozwala mi efektywnie realizować zadania. Preferuję samodzielne podejście do wyzwań, co sprzyja szybkiemu zdobywaniu nowej wiedzy i osiąganiu celów.</p>
                        </div>
                        <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <p>Moje kompetencje zawodowe koncentrują się na administrowaniu systemami operacyjnymi Windows i Linux, zarządzaniu systemami MDM(Mobile Device Management) oraz utrzymywaniu i konfiguracji sieci.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;