<script lang="ts">
  import { cn } from "$lib/utils";
  import OrbitingCircles from "$lib/components/magic/OrbitingCircles";
  import FlipText from "$lib/components/magic/FlipText/FlipText.svelte";
  import ShimmerButton from "$lib/components/ShimmerButton/ShimmerButton.svelte";
  let className: any = "";
  export { className as class };
</script>

<div class="bg-grid-white/[0.1] bg-black">
  <div class="w-full flex items-center justify-center">
    <h1
      class="text-7xl font-bold tracking-tighter md:text-5xl lg:text-7xl pt-1 mb-5"
    >
      <FlipText
        class="font-monowhitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
        word="THE     NEXT   GEN   AUTOMOTIVE   AI"
      ></FlipText>
    </h1>
  </div>
  <div class="w-full flex items-center justify-center">
    <div
      class={cn(
        "relative flex h-[350px] w-full items-center justify-center overflow-hidden rounded-xl md:shadow-xl",
        className,
      )}
    >
      <span
        class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
      >
        PitStop AI
      </span>

      <!--  Inner Circles  -->
      <OrbitingCircles
        class="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        radius={80}
      >
        <!-- Open AI -->
        <img src="/icons8-analysis-80.png" />
      </OrbitingCircles>
      <OrbitingCircles
        class="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        radius={80}
        delay={-10}
      >
        <!-- Supabase -->
        <img src="icons8-gear-64.png" />
      </OrbitingCircles>

      <!-- Outer Circles (reverse)  -->
      <OrbitingCircles
        class="h-[45px] w-[45px] border-none bg-transparent"
        radius={160}
        duration={20}
        reverse
      >
        <!-- Svelte -->
        <img src="icons8-car-30.png" />
      </OrbitingCircles>
      <OrbitingCircles
        class="h-[45px] w-[45px] border-none bg-transparent"
        radius={160}
        duration={20}
        delay={-10}
        reverse
      >
        <!-- Github -->
        <img
          src="https://logowik.com/content/uploads/images/ollama-language-model1721162986.logowik.com.webp"
        />
      </OrbitingCircles>
    </div>
  </div>
  <div
    class="max-w-full flex items-center justify-center text-center italic text-2xl mt-5 px-30 text-white"
  >
    Smart vehicle diagnostics at your fingertips. PitStop AI helps you identify
    and resolve automotive issues quickly and accurately. Get instant insights,
    track past diagnostics, and keep your vehicle running smoothly.
  </div>
  <div class="mt-20">
    <div
      class="max-w-full flex items-center justify-center m-5 bg-gradient-to-b from-black to-gray-300/90 bg-clip-text text-center text-2xl font-bold leading-none text-transparent dark:from-white dark:to-slate-700/60"
    >
      Sign in to continue or create an account.
    </div>
    <div class="w-full flex items-center justify-center gap-20 py-3">
      <ShimmerButton>LOGIN</ShimmerButton>
      <ShimmerButton>REGISTER</ShimmerButton>
    </div>
  </div>
</div>
