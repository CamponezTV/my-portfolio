import React from 'react'

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none hover:scale-105 transition duration-200"
      onClick={handleClick}
    >
         <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#007FFF_0%,#009E60_50%,#007FFF_100%)]" />
         <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             dark:bg-slate-950 px-7 hover:dark:bg-transparent transition duration-200 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </span>
    </button>
  )
}

export default MagicButton

