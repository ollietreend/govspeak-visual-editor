import { addListNodes } from "prosemirror-schema-list"
import { Schema } from "prosemirror-model"
import { schema as basicSchema } from "prosemirror-schema-basic"

let nodes = basicSchema.spec.nodes;

// Call to action
nodes = nodes.addToEnd('call_to_action', {
  content: "block+",
  group: "block",
  defining: true,
  parseDOM: [{ tag: "div.call-to-action" }],
  toDOM() { return ["div", { class: "call-to-action" }, 0] }
});

// Mix the nodes from prosemirror-schema-list into the basic schema to
// create a schema with list support.
export default new Schema({
  nodes: addListNodes(nodes, "paragraph block*", "block"),
  marks: basicSchema.spec.marks,
});
