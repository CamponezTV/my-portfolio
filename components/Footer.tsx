"use client";

import React from 'react'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import { socialMedia } from '@/data'
import { useLanguage } from '@/app/language-provider';
import { translations } from '@/locales/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5 dark:bg-black-100 light:bg-white' id="contact">
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                {t.footer.title} <span className='text-green-500'>{t.footer.titleHighlight}</span> {t.footer.titleEnd}
            </h1>
            <p className='text-gray-400 dark:text-white-200 light:text-gray-600 md:mt-10 my-5 text-center'>{t.footer.description}</p>
            <a href="mailto:arthurcamponez2020@gmail.com">
                <MagicButton 
                 title={t.footer.cta}
                 icon={<FaLocationArrow />}
                 position='right'
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light dark:text-white light:text-gray-600'>{t.footer.copyright}</p>

            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 dark:bg-black-200 bg-gray-300 rounded-lg border dark:border-black-300 light:border-gray-300'>
                        <img src={profile.img} width={20} height={20}/>
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer