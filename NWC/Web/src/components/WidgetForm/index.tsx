
import { CloseButton } from "../CloseButton";
import bugImageUrl from "../../img/bug.svg";
import ideaImageUrl from "../../img/idea.svg";
import thoughImageUrl from "../../img/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSusseceStep } from "./Steps/FeedbackSusseceStep";

export const feedbackTypes = {
    BUG: {
      title: 'Problema',
      image: {
        source: bugImageUrl,
        alt: 'Imagem de um inseto',
      },
    },
    IDEA: {
      title: 'Ideia',
      image: {
        source: ideaImageUrl,
        alt: 'Imagem de uma lâmpada',
      },
    },
    OTHER: {
      title: 'Outro',
      image: {
        source: thoughImageUrl,
        alt: 'Imagem de um balão de pensamento',
      },
    },
  };
  
  export type FeedbackType = keyof typeof feedbackTypes;
  
  export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);
  
    function handleRestartFeedback() {
      setFeedbackSent(false);
      setFeedbackType(null);
    }
  
    return (
      <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        {feedbackSent ? (
          <FeedbackSusseceStep onFeedbackRestartRequested={handleRestartFeedback} />
        ) : (
          <>
            {!feedbackType ? (
              <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
            ) : (
              <FeedbackContentStep
                onFeedbackRestartRequested={handleRestartFeedback}
                feedbackType={feedbackType}
                onFeedbackSent={() => setFeedbackSent(true)}
              />
            )}
          </>
        )}
        

            <footer className="text-xl text-neutral-400">
                Desenvolvido: <a className="underline underline-offset-1" href="https://github.com/DanyloSilva"> DanyloSilva👾🤖</a>
            </footer>


        </div>
    );
}