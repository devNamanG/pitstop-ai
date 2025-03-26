<script lang="ts">
  import * as ollama from "$lib/ollama/ollama";

  let prompt = "";

  async function gen() {
    ollama.generate(prompt, (part: string) => {
      const output = document.getElementById("output");
      console.log(part);
      if (!output) return;
      output.innerHTML += part;
    });
  }
</script>

<div class="p-4 flex flex-col items-center justify-center">
  <div class="flex items-center justify-center">
    <input
      type="text"
      bind:value={prompt}
      class="w-full p-2 border border-gray-300 rounded-lg"
      placeholder="Enter your prompt here"
    />

    <button
      on:click={() => gen()}
      class="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">Generate</button
    >
  </div>

  <p id="output" class="text-white"></p>
</div>
