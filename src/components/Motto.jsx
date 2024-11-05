import React, { useState, useEffect } from 'react'
import { BarChart3, Users, GitCompare, Trophy, ChevronLeft, ChevronRight } from 'lucide-react'

const mottoItems = [
  {
    id: 'mechanical',
    icon: BarChart3,
    title: 'Mechanical Parameters ',
    description: 'HSD Consumption (Fuel Consumption)/Engine 1 Fuel Rate: Efficient fuel usage can indicate good driving habits, including smooth acceleration and deceleration, and minimizing idle times.'
  },
  {
    id: 'behavioural',
    icon: Users,
    title: 'Mechanical Parameters',
    description: 'Average of Front Brake and Rear Brake Pressure: Proper use of brakes, with balanced pressure, reflects careful and controlled driving. Excessive brake use could indicate aggressive driving, while low pressure might reflect underuse, risking safety.'
  },
  {
    id: 'comparison',
    icon: GitCompare,
    title: 'Mechanical Parameters',
    description: 'Wheel-Based Speed 30 km/h: Monitoring whether the operator maintains appropriate speed limits for safety. Excessive speeding can reduce vehicle life and increase accident risks.'
  },
  {
    id: 'ranking',
    icon: Trophy,
    title: 'Mechanical Parameters',
    description: 'Foot Brake Position: Indicates how often and how hard the operator is applying the brake. Excessive brake use could indicate poor driving habits like hard stops or reckless driving, while minimal use may indicate efficient driving.'
  },
  {
    id: 'ranking',
    icon: Trophy,
    title: 'Mechanical Parameters',
    description: 'Retarder Position Proper use of the retarder for slowing down (instead of brakes) indicates good driving practices, helping to avoid wear on the brake system and ensuring controlled descents on steep terrain.'
  },
  {
    id: 'ranking',
    icon: Trophy,
    title: 'Mechanical Parameters',
    description: 'Retarder Oil Temperature (Front/Rear): High retarder oil temperature could indicate over-reliance on the retarder, which may be linked to improper downhill driving techniques.'
  },
  {
    id: 'ranking',
    icon: Trophy,
    title: 'Mechanical Parameters',
    description: 'Engine 1 Accelerator Pedal Position: Sudden, aggressive acceleration could suggest reckless driving, while smooth, moderate pedal use could indicate good driving behavior.'
  },
  {
    id: 'ranking',
    icon: Trophy,
    title: 'Mechanical Parameters',
    description: 'High Resolution Total Vehicle Distance: The total distance driven combined with other parameters (eg, fuel efficiency, brake usage) can give insights into the operator is overall driving habits over time.'
  },
  {
    id: 'ranking',
    icon: Trophy,
    title: 'Mechanical Parameters',
    description: 'Engine 1 Speed (RPM): High RPMs may indicate that the operator frequently pushes the engine hard, which could affect fuel efficiency and engine went Lower RPMs at optimal power output reflect good driving behavior.'
  },
  {
    id: 'ranking',
    icon: Trophy,
    title: 'Mechanical Parameters',
    description: 'Coolant Temp High > 100°C: If the operator consistently causes the engine to overbeat, this indicates poor driving behavior (eg, pushing the vehicle too hard, not observing engine health warnings).'
  },
  {
    id: 'ranking',
    icon: Trophy,
    title: 'Mechanical Parameters',
    description: 'Engine 1 Oil Pressure & Engine 1 Oil Temperature: These parameters, while more related to engine health, can indirectly indicate how well the operator is handling the vehicie. Overuse or poor driving habits may reflect in abnormal oil pressure or temperature values.'
  },
  {
    id: 'ranking',
    icon: Trophy,
    title: 'Mechanical Parameters',
    description: 'Mean Exhaust Temperature: Consistently high exhaust temperatures could indicate aggressive driving or overloading, affecting engine performance. Operators maintaining optimal temperatures could be more efficient'
  },
  {
    id: 'behavioural',
    icon: Users,
    title: 'Behavioural Parameters',
    description: 'TKPH (Tonnage kilometer Per Hour): (Total Tonnage Handled "Total Lead)/Total Run Hour (Only Hauling Time Empty Time).'
  },
  {
    id: 'behavioural',
    icon: Users,
    title: 'Behavioural Parameters',
    description: 'Earty Stop: Refers to the operator stopping the dumper before designated shift end timing, indicates inefficiency and poor time management.'
  },
  {
    id: 'behavioural',
    icon: Users,
    title: 'Behavioural Parameters',
    description: 'Late Start: Refers to delays in starting the dumper after designated shift start timing, indicates lack of punctuality and inefficiency'
  },
  {
    id: 'behavioural',
    icon: Users,
    title: 'Behavioural Parameters',
    description: 'Stretched Tea Break: Refers to operator extending breaks beyond the allotted time leading to delays in operations.'
  },
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
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-300">About the Parameters</h2>
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
