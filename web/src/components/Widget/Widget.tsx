import { ChatTeardropDots } from '@phosphor-icons/react';

function Widget(){
  return(
    <div className='absolute bottom-4 right-5'>
    <button className='bg-brand-500 rounded-full p-3 h-12 text-white flex items-center group'>
      <ChatTeardropDots className='w-6 h-6'/>
      <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'><span className='pl-1'>Feedback</span> </span>
    </button>
    </div>
    
  )

}

export default Widget;