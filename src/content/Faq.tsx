import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const Faq: React.FC = () => {
  const [accordions, setAccordions] = useState<boolean[]>([false, false, false, false, false]);

  const toggleAccordion = (index: number) => {
    setAccordions((prev) =>
      prev.map((item, idx) => (idx === index ? !item : item))
    );
  };

  const faqItems = [
    {
      question: "How does the Wi-Fi verification work?",
      answer: "When you automatically connect to the company's Wi-Fi.",
    },
    {
      question: "How do I log my shift?",
      answer: "Employees can only log shifts when connected to a pre-approved Wi-Fi network, ensuring they're physically present on-site.",
    },
    {
      question: "Can I manage shifts for multiple locations?",
      answer: "Employees can only log shifts when connected to a pre-approved Wi-Fi network, ensuring they're physically present on-site.",
    },
    {
      question: "What reports can I generate?",
      answer: "Employees can only log shifts when connected to a pre-approved Wi-Fi network, ensuring they're physically present on-site.",
    },
    {
      question: "Can I request overtime or swap shifts?",
      answer: "Employees can only log shifts when connected to a pre-approved Wi-Fi network, ensuring they're physically present on-site.",
    },
  ];

  return (
    <div className="flex sm:flex-row flex-col items-center justify-center sm:gap-36 gap-6 px-4 sm:px-0 text-center sm:text-left">
      <div className="flex justify-start items-start flex-col sm:text-left text-center">
        <p className="border border-solid border-blue-600 text-blue-600 p-2 text-[16px]">FAQ'S</p>
        <strong className="font-semibold text-[30px] capitalize flex flex-col">
          Frequently Asked <span>Questions</span>
        </strong>
        <p className="text-[#adadad] text-[13px]">Ask any questions</p>
        <span className="text-blue-600">shytyhumansresourcetech.com</span>
      </div>

      <div className="w-full sm:w-auto">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b-2 border-slate-300 p-4">
            <div className="flex justify-between items-center">
              <strong className="font-medium text-[17px]">{item.question}</strong>
              <button onClick={() => toggleAccordion(index)}>
                {accordions[index] ? <FiMinus /> : <FiPlus />}
              </button>
            </div>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                accordions[index] ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="text-[#959595] font-normal text-[13px] text-start">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
