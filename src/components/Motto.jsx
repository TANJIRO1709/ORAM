import React, { useState, useEffect } from 'react'
import { BarChart3, Users, GitCompare, Trophy, ChevronLeft, ChevronRight } from 'lucide-react'

const mottoItems = [
  {
    id: 'mechanical',
    icon: BarChart3,
    title: 'Mechanical Analysis',
    description: 'Analyzes 13 mechanical parameters of all dumpers, assigns threshold values and weightage, and scores operators based on each parameter.'
  },
  {
    id: 'behavioural',
    icon: Users,
    title: 'Behavioural Analysis',
    description: 'Evaluates 4 behavioural parameters, assigns scores based on weightage to assess operator performance.'
  },
  {
    id: 'comparison',
    icon: GitCompare,
    title: 'Operator Comparison',
    description: 'Compares operators and suggests necessary actions for improvement.'
  },
  {
    id: 'ranking',
    icon: Trophy,
    title: 'Ranking System',
    description: 'Processes data through an algorithm, ranking operators and identifying the most efficient ones.'
  }
]

export default function Motto() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % mottoItems.length)
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + mottoItems.length) % mottoItems.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000) // Auto-advance every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-[60vh] bg-blue-50 dark:bg-blue-950 p-6 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white dark:bg-blue-900 text-blue-900 dark:text-blue-50 rounded-xl shadow-lg overflow-hidden">
        <div className="p-5 border-b border-blue-200 dark:border-blue-700 text-center">
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-300">Our Motto</h2>
          <p className="text-blue-500 dark:text-blue-200 mt-1">
            Comprehensive analysis for optimal performance
          </p>
        </div>
        <div className="relative p-5">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {mottoItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="flex items-start space-x-3 p-4 bg-blue-100 dark:bg-blue-800 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 text-blue-600 dark:text-blue-300">
                      <item.icon className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-200">{item.title}</h3>
                      <p className="mt-1 text-sm text-blue-600 dark:text-blue-100">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={prevSlide}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-1.5 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-blue-700 dark:hover:bg-blue-600"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-1.5 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-blue-700 dark:hover:bg-blue-600"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="flex justify-center p-3 space-x-2">
          {mottoItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full focus:outline-none ${
                index === activeIndex 
                  ? 'bg-blue-600 dark:bg-blue-300' 
                  : 'bg-blue-300 dark:bg-blue-700 hover:bg-blue-400 dark:hover:bg-blue-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
