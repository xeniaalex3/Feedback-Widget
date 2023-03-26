import { FormEvent, useState } from 'react';

import { ArrowLeft, Camera } from 'phosphor-react';
import { FeedbackType, feedbackTypes } from "../WidgetForm";

import CloseButton from "../../CloseButton/CloseButton";
import ScreenshotButton from '../../ScreenshotButton/ScreenshotButton';

interface FeedbackContentStepProps {
feedbackType : FeedbackType;
onFeedbackRestartRequested: () => void;
}

function FeedbackContentStep({feedbackType, onFeedbackRestartRequested}: FeedbackContentStepProps){
const [screenshot, setScreenshot] = useState<string | null>(null);
const [comment, setComment] = useState('');

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleSubmitFeedback(event: FormEvent){
    event.preventDefault();
console.log({
  screenshot, comment
})
  }


  return (
    <>
    <header className='text-center'>
     <button 
     type="button" 
     className='top-5 left-5 absolute text-zinc-400 hover:text-zinc-100'
     onClick={onFeedbackRestartRequested}
     >
      <ArrowLeft weight='bold' className='w-4 h-4'/>
     </button>
     <span className="text-xl leading-6 flex items-center gap-3 justify-center">
     <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
      {feedbackTypeInfo.title}
    </span>
     <CloseButton />
   </header>

 <form className='my-4 w-full' onSubmit={handleSubmitFeedback}>
<textarea 
className="min-w-[302px] w-full min-h-[112px] text-sm placeholder-zinc-500 text-zinc-100 border-zinc-500 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
placeholder='Tell us in detail what is happening...'
onChange={event => setComment(event.target.value)}
/>

<footer className='flex gap-2 mt-2'>
  <ScreenshotButton
  screenshot={screenshot}
  onScreenshotTook={setScreenshot}
  />

  <button
  type='submit'
  className='p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:right-2 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500'
  disabled={comment.length === 0}
  >
Send feedback
  </button>
</footer>
 </form>
 </>
  )
}

export default FeedbackContentStep;