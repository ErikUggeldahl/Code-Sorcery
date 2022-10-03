import React from "react";

type Props = {
  children: React.ReactNode;
  style?: string;
  onClick: () => void;
};

export default ({ children, style, onClick }: Props) => (
  <button
    className={"button " + style}
    // className="bg-transparent dark:disabled:bg-gray-900 hover:bg-indigo-500 dark:hover:bg-indigo-700 dark:disabled:hover:bg-transparent font-semibold text-indigo-700 dark:text-indigo-300 dark:disabled:text-gray-500 hover:text-white dark:hover:text-white dark:disabled:hover:text-gray-500 py-2 px-4 border rounded border-indigo-500 hover:border-transparent"
    onClick={onClick}
  >
    {children}
  </button>
);
