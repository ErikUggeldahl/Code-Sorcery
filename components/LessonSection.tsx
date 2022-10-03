import React, { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { LessonProgress } from "./Lesson";

export const LessonSectionContext = React.createContext({
  id: "",
  index: 0,
});

type Props = {
  children: React.ReactNode;
  id: string;
  index: number;
};

export default ({ children, id, index }: Props) => {
  const { progress } = useContext(LessonProgress);

  return progress.length >= +index ? (
    <LessonSectionContext.Provider value={{ id, index }}>
      <Fade triggerOnce>
        <section className="section">{children}</section>
      </Fade>
    </LessonSectionContext.Provider>
  ) : null;
};
