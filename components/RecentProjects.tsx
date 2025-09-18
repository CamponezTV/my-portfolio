import { projects } from '@/data'
import React from 'react'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-20 dark:bg-black-100 bg-white' id='projects'>
        <h1 className='heading'>
            Meus {' '}
            <span className='text-green-500'>projetos </span>
            mais recentes
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {projects.map(({ id, title, des, img, iconLists, link }) => (
                <div key={id} className='sm:h-[41rem] h-[32rem] h lg:min-h[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    <PinContainer title={link} href={link}>
                        <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3x-l dark:bg-[#13162d] bg-gray-100'>
                                <img src="/bg.png" alt="bg-img" />
                            </div>
                            <img src={img} 
                            alt={title} 
                            className='z-10 absolute bottom-0' />
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 dark:text-white light:text-gray-800'>
                            {title}
                        </h1>

                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2 dark:text-gray-300 light:text-gray-600'>
                            {des}
                        </p>

                        <div className='flex items-center justify-between mt-7 mb-3'>
                            <div className='flex items-center'>
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className='border dark:border-white/[0.2] light:border-gray-300 rounded-full dark:bg-black light:bg-gray-200 lg:h-10 w-8 h-8 flex justify-center items-center' style={{transform: `translateX(-${5 * index * 2}[px])`}}>
                                        <img src={icon} alt={icon} className='p-2'/>
                                    </div>
                                ))}
                            </div>

                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-xs text-sm text-green-500'>Visitar</p>
                                <FaLocationArrow className='ms-3 color=#CBACF9'/>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects