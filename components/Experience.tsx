import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/Moving.Borders'

const Experience = () => {
  return (
    <div className='py-20 ' id='testimonials'>
        <h1 className='heading'>
            Minha {' '}
            <span className='text-green-500'>experiência de trabalho</span>
        </h1>
        <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
          {workExperience.map((card) => (
            <Button 
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius='1.75rem'
            className='flex-1 dark:text-white text-gray-800 border-neutral-200 dark:border-slate-800 light:border-gray-200 bg-gradient-to-br from-blue-50/95 to-indigo-100/95 via-purple-50/95 shadow-lg shadow-blue-200/50 dark:bg-gradient-to-br dark:from-slate-900/95 dark:to-slate-800/95 dark:via-slate-800/95'
            >
              <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16' />
                <div className='lg:ms-5'>
                  <h1 className='text-start text-xl md:text-2xl font-bold dark:text-white text-gray-800'>
                    {card.title}
                  </h1>
                  <p className='text-start dark:text-white-100 light:text-gray-600 mt-3 font-semibold'>
                    {card.desc}
                  </p>
                </div>             
              </div>
            </Button>
          ))}
        </div>
    </div>
  )
}

export default Experience