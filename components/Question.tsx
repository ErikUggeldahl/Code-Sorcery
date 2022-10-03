import React, { useContext } from "react";
import Button from "./Button";
import { LessonProgress } from "./Lesson";
import { LessonSectionContext } from "./LessonSection";

export enum AnswerKind {
  Neutral,
  Correct,
  Incorrect,
}

type Answer = {
  id: string;
  kind?: AnswerKind;
  text?: string;
  response?: string;
};

type Props = {
  data: Answer[];
};

const kindToStyle = (kind?: AnswerKind): string => {
  if (kind === undefined) return "";
  switch (kind) {
    case AnswerKind.Correct:
      return "is-success";
    case AnswerKind.Incorrect:
      return "is-danger";
    case AnswerKind.Neutral:
      return "is-primary";
  }
};

type AnswerResponseProps = {
  style: string;
  kind: AnswerKind;
  response: string;
};

const AnswerResponse = ({ style, kind, response }: AnswerResponseProps) => (
  <div className={"message " + style}>
    <div className="message-header">
      <span>{kind === AnswerKind.Correct ? "Correct" : "Incorrect"}</span>
    </div>
    <div className="message-body">{response}</div>
  </div>
);

export default ({ data }: Props) => {
  const { progress, next } = useContext(LessonProgress);
  const { index, id } = useContext(LessonSectionContext);

  let response;

  let buttons;
  buttons = data.map((answer) => {
    let kindStyle = "";
    if (!progress[index]) {
      kindStyle = "is-primary";
    } else if (progress[index] !== answer.id || !answer.kind) {
      kindStyle = "is-dark";
    } else {
      kindStyle = kindToStyle(answer.kind);
      if (answer.response) {
        response = (
          <AnswerResponse
            style={kindStyle}
            kind={answer.kind ?? AnswerKind.Neutral}
            response={answer.response ?? ""}
          />
        );
      }
    }

    const buttonStyle = [kindStyle].join(" ");
    return (
      <Button
        key={answer.id}
        style={buttonStyle}
        onClick={() => next(index, answer.id, answer.id)}
      >
        {answer.text ?? answer.id}
      </Button>
    );
  });

  return (
    <>
      <div className="buttons">{buttons}</div>
      {progress.length > index ? response : null}
    </>
  );
};
