import CloseButton from '../../CloseButton/CloseButton'
import sucess from '../../../assets/img/success.svg'

interface FeedbackSucessStepProps {
  onFeedbackRestartRequested: () => void;
}

function FeedbackSucessStep({onFeedbackRestartRequested}: FeedbackSucessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={sucess} alt="image sucess check" />
        <span className="text-xl mt-3">Thank you for the feedback!</span>
        <button 
        className='py-2 px-2 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors'
        type='button'
        onClick={onFeedbackRestartRequested}
        >
          Send another feedback
        </button>
      </div>
    </>
  )
}

export default FeedbackSucessStep
