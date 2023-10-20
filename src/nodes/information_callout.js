import { blockTypeItem } from "prosemirror-menu"
import { textblockTypeInputRule } from "prosemirror-inputrules"

export const name = "information_callout"

export const schema = {
  content: "inline*",
  group: "block",
  defining: true,
  parseDOM: [{ tag: `div.application-notice.info-notice[role="note"][aria-label="Information"]` }],
  toDOM() { return ["div", { class: "application-notice info-notice" }, ["p", 0]] }
}

export const buildMenu = ({ menu, schema }) => {
  menu.typeMenu.content.push(
    blockTypeItem(schema.nodes[name], {
      label: "Information callout"
    })
  )
}

export const inputRules = (schema) => ([
  // ^ Information callout
  textblockTypeInputRule(/^\^\s$/, schema.nodes[name]),
])
