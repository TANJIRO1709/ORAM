import React from 'react';
import { motion } from 'framer-motion';

function About() {
  const cards = [
    {
      title: "Mechanical Analysis",
      description:
        "Analyzes 13 mechanical parameters of dumpers, assigns thresholds and weightage, scoring operators on each.",
    },
    {
      title: "Behavioural Analysis",
      description:
        "Evaluates 4 behavioural parameters, assigning scores based on weightage to assess operator performance.",
    },
    {
      title: "Operator Comparison",
      description:
        "Compares operators and suggests necessary actions for improvement.",
    },
    {
      title: "Ranking System",
      description:
        "Processes data through an algorithm, ranking operators and identifying the most efficient ones.",
    },
  ];

  const borderVariants = {
    initial: { 
      pathLength: 0,
      opacity: 0.2
    },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: { 
        pathLength: {
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        },
        opacity: {
          duration: 0.5
        }
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        About ORAM
      </h1>
      <p className="text-lg mb-8 text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
        The Operator Ranking Analysis Model processes large datasets and delivers actionable insights through data visualizations and graphs. By analyzing 17 key parameters, it provides a detailed evaluation of operator performance, offering practical suggestions for improvement.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="relative z-10">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {card.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {card.description}
              </p>
            </div>
            <div className="absolute inset-0">
              <svg
                className="w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M 0,0 L 100,0 L 100,100 L 0,100 L 0,0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-500/50 dark:text-blue-400/50"
                  vectorEffect="non-scaling-stroke"
                  variants={borderVariants}
                  initial="initial"
                  animate="animate"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;