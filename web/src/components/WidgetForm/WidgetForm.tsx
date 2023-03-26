import { useState } from 'react';

// import component
import CloseButton from '../CloseButton/CloseButton'
import FeedbackTypeStep from './Steps/FeedbackTypeStep';
import FeedbackContentStep from './Steps/FeedbackContentStep';
// import images svg
import bugImage from '../../assets/img/bug.svg'
import ideaImage from '../../assets/img/idea.svg'
import otherImage from '../../assets/img/thought.svg'


export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes;

function WidgetForm() {
const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header className='text-center'>
        <span className="text-xl leading-6">Leave your feedback</span>
        <CloseButton />
      </header>
     {!feedbackType ? (
      <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
     ) : (
    <FeedbackContentStep/>
     )}
    </div>
  )
}

export default WidgetForm
