import { useState } from 'react';

// import component
import CloseButton from '../CloseButton/CloseButton'
// import images svg
import bugImage from '../../assets/img/bug.svg'
import ideaImage from '../../assets/img/idea.svg'
import otherImage from '../../assets/img/thought.svg'

const feedbackTypes = {
  BUG: {
    title: 'Issue',
    image: {
      source: bugImage,
      alt: 'image of an insect'
    }
  },
  IDEA: {
    title: 'Idea',
    image: {
      source: ideaImage,
      alt: 'image of a lamp'
    }
  },
  OTHER: {
    title: 'Other',
    image: {
      source: otherImage,
      alt: 'thought cloud image'
    }
  }
}

type FeedbackType = keyof typeof feedbackTypes;

function WidgetForm() {
const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header className='text-center'>
        <span className="text-xl leading-6">Leave your feedback</span>
        <CloseButton />
      </header>
     {!feedbackType ? (
       <div className="flex py-8 gap-2 w-full">
       {Object.entries(feedbackTypes).map(([key, value]) => {
         return (
           <button 
           className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus::outline-none" 
           type='button' 
           key={key}
           onClick={() => setFeedbackType(key as FeedbackType)}
           >
             <img src={value.image.source} alt={value.image.alt} />
             <span>{value.title}</span>
           </button>
         )
       })}
     </div>
     ) : (
    
     )}
    </div>
  )
}

export default WidgetForm
