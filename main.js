import './style.scss'

import { EditorState } from "prosemirror-state"
import { EditorView } from "prosemirror-view"
import { DOMParser } from "prosemirror-model"
import { markdownSerializer} from "./src/markdown"
import schema from "./src/schema"
import plugins from "./src/plugins"
import { fixTables } from "prosemirror-tables"
import FootnoteView from "./src/nodes/footnote/FootnoteView"

let state = EditorState.create({
  doc: DOMParser.fromSchema(schema).parse(document.querySelector("#content")),
  plugins: plugins({ schema })
})

// Normalise tables so they're safe to edit
const fix = fixTables(state);
if (fix) state = state.apply(fix.setMeta('addToHistory', false));

window.view = new EditorView(document.querySelector("#editor"), {
  state,
  nodeViews: {
    footnote(node, view, getPos) { return new FootnoteView(node, view, getPos) }
  },
  dispatchTransaction(transaction) {
    let newState = view.state.apply(transaction)
    view.updateState(newState)
    document.querySelector('pre').textContent = markdownSerializer.serialize(window.view.state.doc)
  }
})

document.querySelector('pre').textContent = markdownSerializer.serialize(window.view.state.doc)
