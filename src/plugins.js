import { exampleSetup } from "prosemirror-example-setup"
import { Plugin } from "prosemirror-state"

export default (options) => {
  const plugins = exampleSetup(options);

  // Remove the "ProseMirror-example-setup-style" class name plugin
  plugins.pop();

  // Add "govspeak" class name to the editor
  plugins.push(new Plugin({
    props: {
      attributes: { class: "govspeak" }
    }
  }));

  return plugins;
};
