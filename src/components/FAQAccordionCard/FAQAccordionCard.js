import React, { useState } from 'react';
import UnionSVG from '../../assets/Union.svg';
import './FAQAccordionCard.css';

function FAQAccordionCard() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      <div className="faq-vertical-text">
        {/* Text for the first vertical section */}
        <p className="faq-subtext">What’s on your mind</p>
        <p className="faq-heading">Ask Questions</p>
        <div className="image-box">
          <img src={UnionSVG} alt="" />
        </div>
      </div>

      <div className="accordion-text">
        <ul className="faq-text">
          {faqData.map((faq, index) => (
            <li
              key={index}
              onClick={() => toggleAccordion(index)}
              className={index === activeIndex ? 'showAnswer' : ''}
            >
              <div className="question-arrow">
                <span className="question">{faq.question}</span>
                <i className={`bx ${index === activeIndex ? 'bxs-chevron-up' : 'bxs-chevron-down'} arrow`}></i>
                {index === activeIndex ? <span className="minus-icon">-</span> : <span className="plus-icon">+</span>}
              </div>
              <p>{faq.answer}</p>
              <span className="line"></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const faqData = [
  {
    question: "Do you offer freelancers?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, doloribus."
  },
  {
    question: "What’s the guarantee that I will be satisfied with the hired talent?",
    answer: "JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive"
  },
  {
    question: "Can I hire multiple talents at once?",
    answer: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
  },
  {
    question: "Why should I not go to an agency directly?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, labore."
  },
  {
    question: "Who can help me pick a right skillset and duration for me?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, repudiandae!"
  }
];

export default FAQAccordionCard;
