import React from 'react';
import { useState } from 'react';
import './Questions.css';
import { Plus } from 'lucide-react';
import "bootstrap-icons/font/bootstrap-icons.css";
function Questions() {
        const [activeQuestion, setActiveQuestion] = useState(null);
        const toggleQuestion = (index) => {
                setActiveQuestion(activeQuestion === index ? null : index);
        };
        return (
                <div>
                        <div className="frequent-qestions-container" id='questions'>
                                <h2>Frequently Asked Questions</h2>
                                <div className="frequent-qestions">
                                        <div className="question" onClick={toggleQuestion}>
                                                <div className="quest"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#faq1"
                                                        aria-expanded="true"
                                                        aria-controls="faq1">
                                                        <h3>What is Netflix?</h3>

                                                        <Plus size={30} color="#ffffff" strokeWidth={2} />
                                                </div>

                                                <div className="accordion-collapse collapse" id="faq1">
                                                        <div className="accordion-body">
                                                                <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
                                                                <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                                                        </div>
                                                </div>

                                        </div>

                                        <div className="question">
                                                <div className="quest"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#faq2"
                                                        aria-expanded="true"
                                                        aria-controls="faq2">
                                                        <h3>How much does Netflix cost?</h3>
                                                        
                                                        <Plus size={30} color="#ffffff" strokeWidth={2} />
                                                </div>
                                                <div className="accordion-collapse collapse" id="faq2">
                                                        <div className="accordion-body">
                                                                 <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</p>
                                                        </div>
                                                </div>
                                        </div>

                                        <div className="question">
                                                <div className="quest"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#faq3"
                                                        aria-expanded="true"
                                                        aria-controls="faq3">
                                                        <h3>Where can I watch?</h3>
                                                        
                                                        <Plus size={30} color="#ffffff" strokeWidth={2} />
                                                </div>
                                                <div className="accordion-collapse collapse" id="faq3">
                                                        <div className="accordion-body">
                                                                 <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                                                                 <p>You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                                                        </div>
                                                </div>
                                        </div>


                                        <div className="question">
                                                <div className="quest"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#faq4"
                                                        aria-expanded="true"
                                                        aria-controls="faq4">
                                                        <h3>What can I watch on Netflix?</h3>
                                                        
                                                        <Plus size={30} color="#ffffff" strokeWidth={2} />
                                                </div>
                                                <div className="accordion-collapse collapse" id="faq4">
                                                        <div className="accordion-body">
                                                                 <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                                                        </div>
                                                </div>
                                        </div>
                                        

                                        <div className="question">
                                                <div className="quest"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#faq5"
                                                        aria-expanded="true"
                                                        aria-controls="faq5">
                                                        <h3>Is Netflix good for kids?</h3>
                                                        
                                                        <Plus size={30} color="#ffffff" strokeWidth={2} />
                                                </div>
                                                <div className="accordion-collapse collapse" id="faq5">
                                                        <div className="accordion-body">
                                                                 <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>
                                                                 <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Questions