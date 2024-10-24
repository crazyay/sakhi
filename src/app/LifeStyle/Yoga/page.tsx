'use client'
import React, { useState } from 'react';
import { data } from '@/APICalls/YogaData.jsx'; // Adjust the path as necessary

const Yoga = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [isNightMode, setIsNightMode] = useState(true);

  // Function to toggle the mode
  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div className={`container ${isNightMode ? 'bg-black text-white' : 'bg-white text-black'} pr-36 pl-16 mx-auto p-4`}>
    {/* Toggle Button */}
    <div className="absolute right-10 top-30  ">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-gray-700 text-white rounded-md shadow-md hover:bg-gray-600"
      >
        {isNightMode ? ' Day Mode' : 'Night Mode'}
      </button>
    </div>
    <div className="p-4 space-y-8">
      {/* Yoga Awareness Section */}
      <section className="mb-6">
        <h1 className="text-3xl font-bold text-center mb-4">Yoga</h1>
        <p className="text-lg  leading-relaxed">
          Understanding your body is the first step toward good health. As a teen, you’re going through many physical, emotional, and hormonal changes. It's important to learn about how your body works, recognize what's normal, and when to seek help. Self-care, proper nutrition, and mental health awareness are key components of maintaining a healthy lifestyle. Remember, it’s okay to ask questions and seek advice when needed.
        </p>
      </section>

      {/* Yoga Articles Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Yoga</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.articles.map((article, index) => (
            <div key={index} className="bg-white  rounded-lg shadow-md p-4 space-y-2">
              <img src={article.image} alt={article.title} className="w-full h-40 object-cover rounded-md" />
              <p className="font-semibold text-lg">{article.title}</p>
              <p className="text-gray-600">{article.content}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Diseases & Solutions Section */}
      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-4">Diseases & Solutions</h2>
        {data.diseases.map((disease, index) => (
          <div key={index} className="bg-white text-black rounded-lg shadow-md p-4 mb-4">
            <h3 className="text-xl  font-semibold">Disease: {disease.disease}</h3>
            <p className=" mt-2">Solution: {disease.solution}</p>
          </div>
        ))}
      </section>

      {/* Questions & Answers Section */}
      <section className="mb-6 text-black">
        <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
        {data.questions.map((qna, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between items-center bg-blue-100 p-4 rounded-lg cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <span className="text-lg font-semibold">{qna.question}</span>
              <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="mt-2 bg-gray-50 p-4 rounded-lg shadow-inner">
                {qna.answer}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
    </div>
  );
};

export default Yoga;
