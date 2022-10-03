import React from "react";
import Question from "./Question";

type Props = {
  children: React.ReactNode;
  id: string;
};

export default ({ children, id }: Props) => (
  <Question data={[{ id, text: children as string }]} />
);
