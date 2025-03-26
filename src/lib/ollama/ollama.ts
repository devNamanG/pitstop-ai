import { Ollama } from "ollama/browser";

const PROMPT = `. Create an FTA tree with very simple probable causes for the issue with each level asking more detailed but simple questions.The leaf node needs to be the conclusion based on the nodes in the prior levels. Give it as a json file having maximum of 3 levels and minimum 2 levels (0=root node) and a total of 4 items (number of questions per level). Make sure to not include any answers or conclusions.

This is the format of the json file:

{
"root": {
"title":dontle of the root node",
},
children: [
{
item: int-for-the-index-of-this-item,
level: int-for-the-level-of-this-item,
title: "Title for this item, the question",
}
]
}
STRICTLY STICK to the above template and strictly adhere to these constraints
1. Root node title: 'Issue title'
2. Maximum levels: 3 (including the root)
3. Maximum items: 4 (4 questions MAXIMUM per level)
4. Questions should focus on symptoms related to brake problems, not conclusions or potential causes.
5. DO NOT INCLUDE ANY CONCLUSIONS OR ANSWERS`

export async function generate(content: string, onNewContent: (content: string) => void) {
  const ollama = new Ollama()
  const response = await ollama.chat({
    model: "granite3.1-dense:2b",
//    model: "gemma3:1b",
    messages: [{
      role: "user",
      content: content + PROMPT,
    }],
    stream: true,
  })

  for await (const part of response) {
    onNewContent(part.message.content)
  }
}
