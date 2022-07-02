import React from 'react';
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactUs = () => {

    function contact(event){
        event.preventDefault();
        const loading = document.querySelector(".modal__overlay--loading")
        const success = document.querySelector(".modal__overlay--success")
        loading.classList += " modal__overlay--visible";
        emailjs
        .sendForm(
            "service_1vf4pz6",
            "template_87ojzje",
            event.target,
            "oF4_sJqWlRQKkz_Xe"
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        })
        .catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "service currently unavailable"
            )
        });

    }


    return (
        <section id="contact">
        <div class="container">
            <div class="row">
                <h2 class="section__header"><span class="gold">Contact </span>Us</h2>
                <div class="contact__us--container">
                    <figure class="map__container">
                        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207446.97304770135!2d139.6007829922214!3d35.66816252793912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ebe8e0fe0c99%3A0xeaff9744d897efb8!2sWako%2C%20Saitama%2C%20Japan!5e0!3m2!1sen!2sng!4v1648503246115!5m2!1sen!2sng"  style={{style:"border:0;", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
                    </figure>
                    <div class="contact__us--box">
                        <h3 class="car__name">Get In Touch</h3>
                        <form id="contact__form" onSubmit={contact}>
                            <div class="form__item">
                                <input type="text" class="input" name="user_name" required placeholder="your name"></input>
                            </div>
        
                            <div class="form__item">            
                                <input type="email" class="input" name="user_email" required placeholder="your email"></input>
                            </div>
        
                            <div class="form__item">
                                <textarea type="text" class="input textarea" name="message" placeholder="your message"></textarea>
                            </div>
        
                            <button class="contact__button click">Send It My Way</button>
        
                        </form>
                        <div class="modal__overlay modal__overlay--loading">
                            <FontAwesomeIcon icon="fas fa-spinner"></FontAwesomeIcon>
                        </div>
            
                        <div class="modal__overlay modal__overlay--success">
                            Thank you
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default ContactUs;
