"use client";

import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies } from '@/data'
import { useLanguage } from '@/app/language-provider';
import { translations } from '@/locales/translations';

const Clients = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const testimonials = t.testimonials.items;

  return (
    <div className='py-20' id='testimonials'>
        <h1 className='heading'>
            {t.testimonials.title} {' '}
            <span className='text-green-500'>{t.testimonials.titleHighlight}</span>
        </h1>
        <div className='flex flex-col items-center max-lg:mt-10'>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />

            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max:lg mt-10  rounded-lg'>
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