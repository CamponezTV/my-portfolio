"use client";

import dynamic from 'next/dynamic'
import { gridItems } from '@/data'
import { useLanguage } from '@/app/language-provider';
import { translations } from '@/locales/translations';

const BentoGrid = dynamic(() => import('./ui/BentoGrid').then((m) => ({ default: m.BentoGrid })), {
  ssr: false,
})

const BentoGridItem = dynamic(() => import('./ui/BentoGrid').then((m) => ({ default: m.BentoGridItem })), {
  ssr: false,
})


const Grid = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about">
        <BentoGrid>
            {gridItems.map(({ id, className, img, imgClassName, titleClassName, spareImg}, index) => (
                <BentoGridItem 
                id={id}
                key={id}
                title={t.about.gridItems[index].title}
                description={t.about.gridItems[index].description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid