<script lang="ts">
  import FileTree from "$lib/components/magic/FileTree/FileTree.svelte";
  import * as ollama from "$lib/ollama/ollama";
  import { json } from "@sveltejs/kit";

  let prompt = "";

  let root = {
    question: prompt,
    children: [],
  };

  let retried = false;

  async function gen() {
    const output = document.getElementById("output");
    if (!output) return;
    output.innerHTML = "";
    ollama.generate(
      prompt,
      (part: string) => {
        console.log(part);
        output.innerHTML += part;
      },
      () => {
        console.log("Generated FTA Tree");
        const jsonOutput = output.innerHTML.substring(
          output.innerHTML.indexOf("{"),
          output.innerHTML.lastIndexOf("}")
        );

        let parsed: any;

        try {
          parsed = JSON.parse(jsonOutput);
        } catch (e) {
          if (retried) {
            console.error(e);
            alert(
              "An error occurred while parsing the output! Please rephrase your prompt."
            );
            return;
          }
          retried = true;
          gen();
        }

        root = {
          ...root,
          children: parsed["children"],
        };
      }
    );
  }
</script>

<div class="flex items-center justify-center w-full h-full">
  <div class="p-4 flex gap-2 flex-col items-center justify-center">
    <div class="flex items-center justify-center">
      <input
        type="text"
        bind:value={prompt}
        class="w-full p-2 border border-gray-300 rounded-lg"
        placeholder="Enter your prompt here"
      />

      <button
        on:click={() => gen()}
        class="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >Generate</button
      >
    </div>

    <FileTree
      rootTitle={prompt.trim().length == 0
        ? "Ask a question to generate the Visualization"
        : prompt}
      rootNode={root}
    />

    <p id="output" class="text-white"></p>
  </div>
</div>
