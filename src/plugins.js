import { buildMenuItems, exampleSetup } from "prosemirror-example-setup"
import { Plugin } from "prosemirror-state"
import { wrapItem } from "prosemirror-menu"

const buildMenu = (schema) => {
  const menu = buildMenuItems(schema);

  let node;
  if (node = schema.nodes.call_to_action) {
    menu.typeMenu.content.push(
      wrapItem(node, {
        title: "Change to call to action",
        label: "Call to action"
      })
    );
  }

  return menu.fullMenu;
};

export default (options) => {
  options.menuContent = buildMenu(options.schema);
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
