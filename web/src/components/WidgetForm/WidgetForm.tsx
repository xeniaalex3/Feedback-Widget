import CloseButton from "../CloseButton/CloseButton"

import bugImage from '../../assets/img/bug.svg';
import ideaImage from '../../assets/img/idea.svg';
import otherImage from '../../assets/img/thought.svg';

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


function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Leave your feedback</span>
        <CloseButton/>
      </header>
      <div className="flex py-8 gap-2 w-full">

      </div>
    </div>
  )
}

export default WidgetForm
