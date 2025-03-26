<script lang="ts">
  import CardAnimatedBorder from "$lib/components/magic/CardAnimatedBorder/CardAnimatedBorder.svelte";
  import EncryptButton from "$lib/components/magic/EncryptButton/EncryptButton.svelte";
  import FlipText from "$lib/components/magic/FlipText";
  import InputSpotlightBorder from "$lib/components/magic/InputSpotlightBorder/InputSpotlightBorder.svelte";
</script>

<div class="w-full h-full flex items-center justify-center">
  <div class="p-[90px] w-full h-full">
    <CardAnimatedBorder>
      {#snippet body()}
        <div class="flex flex-col items-start p-10">
          <FlipText
            class="text-2xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-4xl md:leading-[5rem]"
            word="Login"
          />

          <FlipText
            class="text-xs font-bold tracking-[-0.1em] text-black dark:text-white md:text-3xl md:leading-[5rem]"
            word="Welcome Back"
          />

          <label for="Email" class="p-2"> Enter Your Email Id : </label>
          <InputSpotlightBorder inp="Enter Email ID" type="text"
          ></InputSpotlightBorder>
          <br />
          <label for="password" class="p-2"> Enter Password : </label>

          <InputSpotlightBorder inp="Enter Your Password" type="password"
          ></InputSpotlightBorder>
          <br />
        </div>
      {/snippet}
    </CardAnimatedBorder>
  </div>
</div>
