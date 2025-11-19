import React, { useEffect } from 'react';
import AOS from 'aos';
import WeatherWidget from '../components/WeatherWidget';

const Contact = () => {
    useEffect(() => {
        AOS.refresh();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Formularz wysłany ');
    };

    return (
        <main>
            <section id="kontakt" className="bg-light py-5">
                <div className="container">
                    
                    {/* --- CZĘŚĆ 1: NAGŁÓWEK I FORMULARZ (Wyśrodkowane) --- */}
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-6">
                            <h2 className="mb-4 text-center" data-aos="fade-right">Kontakt</h2>
                            <p className="text-center mb-5" data-aos="fade-up">Masz pytanie? Napisz do mnie.</p>

                            <form onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="100" className="bg-white p-4 rounded shadow-sm">
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
                                    <button type="submit" className="btn btn-primary px-4 w-100">Wyślij</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* --- CZĘŚĆ 2: POGODA I MAPA (Dwie kolumny obok siebie) --- */}
                    <div className="row g-4">
                        
                        {/* LEWA KOLUMNA: POGODA */}
                        <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="h-100">
                                {/* Widżet pogody - usuwamy domyślne marginesy 'my-4' z komponentu poprzez klasę 'm-0' w kontenerze jeśli to konieczne, ale tutaj po prostu go osadzamy */}
                                <WeatherWidget />
                            </div>
                        </div>

                        {/* PRAWA KOLUMNA: MAPA GOOGLE */}
                       <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="bg-white rounded shadow-sm overflow-hidden h-100" style={{ minHeight: '300px' }}>
                                <iframe 
                                    title="Mapa Lublin"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159923.5429843636!2d22.36535788694707!3d51.21829777958241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472257141e154061%3A0x552b691502990598!2sLublin!5e0!3m2!1spl!2spl!4v1710874000000!5m2!1spl!2spl"
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;