import { Popover } from '@headlessui/react';
import { X } from '@phosphor-icons/react';

function CloseButton(){
  return(
    <div>
<Popover.Button className='top-5 right-5 absolute text-zinc-400 hover:text-zinc-100' title='Close form'>
<X weight='bold' className='w-4 h-4'/>
</Popover.Button>
    </div>
  )
}

export default CloseButton;