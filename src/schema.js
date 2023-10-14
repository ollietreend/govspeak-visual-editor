import { addListNodes } from "prosemirror-schema-list"
import { Schema } from "prosemirror-model"
import { schema as basicSchema } from "prosemirror-schema-basic"

// Mix the nodes from prosemirror-schema-list into the basic schema to
// create a schema with list support.
export default new Schema({
  nodes: addListNodes(basicSchema.spec.nodes, "paragraph block*", "block"),
  marks: basicSchema.spec.marks,
});
