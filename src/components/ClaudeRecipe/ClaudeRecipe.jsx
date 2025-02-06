import React from "react";
import Markdown from "react-markdown";

const ClaudeRecipe = (props) => {
  return (
    <section aria-live="polite">
      <h2>Chef Claude Recommends: </h2>
      <Markdown>{props.ingredients}</Markdown>
    </section>
  );
};

export default ClaudeRecipe;
