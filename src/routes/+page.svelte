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
      <FlipText class="font-mono" word="THE     NEXT   GEN   AUTOMOTIVE   AI"
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
        <img
          src="https://logowik.com/content/uploads/images/ollama-language-model1721162986.logowik.com.webp"
        />
      </OrbitingCircles>
      <OrbitingCircles
        class="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        radius={80}
        delay={-10}
      >
        <!-- Supabase -->
        <svg
          viewBox="0 0 109 113"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
            fill="url(#paint1_linear)"
            fill-opacity="0.5"
          />
          <path
            d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
            fill="#3ECF8E"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="53.9738"
              y1="54.974"
              x2="94.1635"
              y2="71.8295"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#249361" />
              <stop offset="1" stop-color="#3ECF8E" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="36.1558"
              y1="30.578"
              x2="54.4844"
              y2="65.0806"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </OrbitingCircles>

      <!-- Outer Circles (reverse)  -->
      <OrbitingCircles
        class="h-[45px] w-[45px] border-none bg-transparent"
        radius={160}
        duration={20}
        reverse
      >
        <!-- Svelte -->
        <svg
          viewBox="0 0 256 308"
          width="256"
          height="308"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
          ><path
            d="M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.198 82.198 0 0 0-37.135 55.056 86.566 86.566 0 0 0 8.536 55.576 82.425 82.425 0 0 0-12.296 30.719 87.596 87.596 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.182 82.182 0 0 0 37.135-55.057 86.601 86.601 0 0 0-8.53-55.577 82.409 82.409 0 0 0 12.29-30.718 87.573 87.573 0 0 0-14.963-66.244"
            fill="#FF3E00"
          /><path
            d="M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 0 1-9.003-39.85 49.978 49.978 0 0 1 1.713-6.693l1.35-4.115 3.671 2.697a92.447 92.447 0 0 0 28.036 14.007l2.663.808-.245 2.659a16.067 16.067 0 0 0 2.89 10.656 17.143 17.143 0 0 0 18.397 6.828 15.786 15.786 0 0 0 4.403-1.935l71.67-45.672a14.922 14.922 0 0 0 6.734-9.977 15.923 15.923 0 0 0-2.713-12.011 17.156 17.156 0 0 0-18.404-6.832 15.78 15.78 0 0 0-4.396 1.933l-27.35 17.434a52.298 52.298 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.681 52.681 0 0 1-9.004-39.849 49.428 49.428 0 0 1 22.34-33.114l71.664-45.677a52.218 52.218 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.685 52.685 0 0 1 9.004 39.85 50.559 50.559 0 0 1-1.713 6.692l-1.35 4.116-3.67-2.693a92.373 92.373 0 0 0-28.037-14.013l-2.664-.809.246-2.658a16.099 16.099 0 0 0-2.89-10.656 17.143 17.143 0 0 0-18.398-6.828 15.786 15.786 0 0 0-4.402 1.935l-71.67 45.674a14.898 14.898 0 0 0-6.73 9.975 15.9 15.9 0 0 0 2.709 12.012 17.156 17.156 0 0 0 18.404 6.832 15.841 15.841 0 0 0 4.402-1.935l27.345-17.427a52.147 52.147 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.681 52.681 0 0 1 9.003 39.848 49.453 49.453 0 0 1-22.34 33.12l-71.664 45.673a52.218 52.218 0 0 1-14.563 6.398"
            fill="#FFF"
          /></svg
        >
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
    class="max-w-full flex items-center justify-center text-center italic text-2xl mt-5 px-30 text-gray-400"
  >
    Smart vehicle diagnostics at your fingertips. PitStop AI helps you identify
    and resolve automotive issues quickly and accurately. Get instant insights,
    track past diagnostics, and keep your vehicle running smoothly.
  </div>
  <div class="mt-20">
    <div
      class="max-w-full flex items-center justify-center text-center text-2xl font-bold m-5"
    >
      Ready to troubleshoot? Sign in to continue or create an account.
    </div>
    <div class="w-full flex items-center justify-center gap-20">
      <ShimmerButton>LOGIN</ShimmerButton>
      <ShimmerButton>REGISTER</ShimmerButton>
    </div>
  </div>
</div>
