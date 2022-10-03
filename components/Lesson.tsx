import React, { useState } from "react";

export const LessonProgress = React.createContext<{
  progress: string[];
  next: (index: number, id: string, answer: string) => void;
}>({
  progress: [],
  next: (index: number, id: string, answer: string) => {},
});

type Props = {
  children: React.ReactNode;
};

// How to deal with holes created by restarting a section? Maybe back to object with helper function that scans upwards
export default ({ children }: Props) => {
  const [progress, setProgress] = useState<string[]>([]);

  return (
    <LessonProgress.Provider
      value={{
        progress,
        next: (index: number, id: string, answer: string) =>
          setProgress(Object.assign([...progress], { [index]: answer })),
      }}
    >
      <article>{children}</article>
    </LessonProgress.Provider>
  );
};
