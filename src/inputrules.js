import { inputRules, textblockTypeInputRule, wrappingInputRule } from "prosemirror-inputrules"

export default (schema) => {
  const rules = [
    // % Warning callout
    textblockTypeInputRule(/^%\s$/, schema.nodes.warning_callout),

    // $CTA Call to action
    wrappingInputRule(/^\$CTA\s$/, schema.nodes.call_to_action),
  ];

  return inputRules({ rules });
}
