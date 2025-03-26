import FileTree from "./FileTree.svelte";

export type QuestionNode = {
    question: string;
    children: QuestionNode[];
  };

export default FileTree;