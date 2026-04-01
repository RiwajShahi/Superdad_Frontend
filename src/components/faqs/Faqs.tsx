import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full px-6 md:px-20 py-20 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Everything you need to know about SuperDad
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={faq.id}
              onClick={() => toggleFAQ(index)}
              className={`rounded-2xl border transition-all duration-300 cursor-pointer
              ${
                isOpen
                  ? "bg-white shadow-md"
                  : "bg-white/60 hover:shadow-lg hover:-translate-y-1"
              }`}
            >
              {/* Question */}
              <div className="flex items-center justify-between p-5">
                <h3 className="text-sm md:text-base font-medium">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 px-5 ${
                  isOpen
                    ? "max-h-40 pb-5 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;