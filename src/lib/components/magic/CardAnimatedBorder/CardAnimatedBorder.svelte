<script lang="ts">
  import type { Snippet } from "svelte";

  let { title, body }: { title?: Snippet; body: Snippet } = $props();
</script>

<div>
  <div
    class="group relative grid overflow-hidden rounded-xl px-4 py-5 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200"
  >
    <span>
      <!-- svelte-ignore element_invalid_self_closing_tag -->
      <span
        class="spark mask-gradient animate-flip before:animate-kitrotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"
      />
    </span>
    <!-- svelte-ignore element_invalid_self_closing_tag -->
    <span
      class="backdrop absolute inset-px rounded-[11px] bg-neutral-950 transition-colors duration-200"
    />
    <div class="space-y-2 z-10">
      <h3 class="text-xl font-semibold text-neutral-200">
        {#if title}
          {@render title()}
        {/if}
      </h3>
      <div>
        {@render body()}
      </div>
    </div>
  </div>
</div>
