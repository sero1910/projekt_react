// src/pages/Interests.jsx

import React, { useEffect } from 'react';
import AOS from 'aos';

const interestsData = [
    { title: "Gry Planszowe", text: "Logiczne myślenie i strategia" },
    { title: "Piłka nożna", text: "Sport i rywalizacja" },
    { title: "Rozwiązywanie krzyżówek", text: "Słownictwo i pamięć" },
    { title: "Chodzenie po górach", text: "Wytrzymałość fizyczna i kontakt z naturą" },
    { title: "Bieganie", text: "Wytrwałość i dyscyplina" },
];

const Interests = () => {
    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <main>
            <section id="zainteresowania" className="container">
                <h2 className="mb-4" data-aos="fade-right">Zainteresowania</h2>
                <div className="row g-4">
                    {interestsData.map((item, index) => (
                        <div key={index} className="col-md-4" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="card h-100 shadow-sm border-0">
                                <div className="card-body text-center p-4">
                                    <h5 className="card-title mt-2">{item.title}</h5>
                                    <p className="card-text">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Interests;