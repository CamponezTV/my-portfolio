import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data'
import { companies } from '@/data'

const Clients = () => {
  return (
    <div className='py-20' id='testimonials'>
        <h1 className='heading'>
            Comentários de pesssoas com quem {' '}
            <span className='text-green-500'>trabalhei</span>
        </h1>
        <div className='flex flex-col items-center max-lg:mt-10'>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />

            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max:lg mt-10'>
                {companies.map(({id, name, nameImg }) => (
                    <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                        <img 
                        src={nameImg}
                        alt={name}
                        className='md:w-22 w-21'
                        />
                    </div>
                ))}
            </div>
        </div> 
    </div>     
  )
}

export default Clients