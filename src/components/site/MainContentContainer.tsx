import { css } from "emotion";
import React from "react";

export const MainContentContainer: React.FC = ({ children }) => {
  return (
    <main
      className={css`
        margin: 0 auto;
        padding: 1rem;
        width: 100%;
        max-width: 1000px;
      `}
    >
      {children}
    </main>
  );
};
