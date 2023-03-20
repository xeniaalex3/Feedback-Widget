import { ChatTeardropDots } from '@phosphor-icons/react';
import { Popover } from '@headlessui/react';
import WidgetForm from '../WidgetForm/WidgetForm';

function Widget(){
  return(
    <Popover className='absolute bottom-4 md:bottom-10 right-5 flex flex-col items-end'>
     <Popover.Panel>
      <WidgetForm/>
    </Popover.Panel> 

    <Popover.Button className='bg-brand-500 rounded-full p-3 h-12 text-white flex items-center group outline-none'>
      <ChatTeardropDots className='w-6 h-6'/>
      <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'><span className='pl-1'>Feedback</span> </span>
    </Popover.Button>
    </Popover>
    
  )

}

export default Widget;