// src/pages/Contact.jsx

import React, { useEffect } from 'react';
import AOS from 'aos';

const Contact = () => {
    useEffect(() => {
        AOS.refresh();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Formularz wysłany (funkcjonalność backendu wymaga dalszej implementacji!)');
    };

    return (
        <main>
            <section id="kontakt" className="bg-light py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h2 className="mb-4 text-center" data-aos="fade-right">Kontakt</h2>
                            <p className="text-center" data-aos="fade-up">Masz pytanie? Napisz do mnie.</p>
                            
                            <form onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="200">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Imię</label>
                                    <input type="text" className="form-control" id="name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Twój Email</label>
                                    <input type="email" className="form-control" id="email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Wiadomość</label>
                                    <textarea className="form-control" id="message" rows="4" required></textarea>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary px-4">Wyślij</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;