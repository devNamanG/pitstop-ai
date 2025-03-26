<script lang="ts">
  import ButtonMagnetic from "$lib/components/magic/ButtonMagnetic/ButtonMagnetic.svelte";
  import CardAnimatedBorder from "$lib/components/magic/CardAnimatedBorder/CardAnimatedBorder.svelte";

  import FlipText from "$lib/components/magic/FlipText";
  import InputSpotlightBorder from "$lib/components/magic/InputSpotlightBorder/InputSpotlightBorder.svelte";
</script>

<div class="w-full h-full flex items-center justify-center">
  <div class="p-[80px] w-full h-full bg-grid-white/[0.03]">
    <CardAnimatedBorder>
      {#snippet body()}
        <div class="flex justify-between">
          <div class="flex flex-col items-start p-10">
            <FlipText
              class="text-xs font-bold tracking-[-0.1em] text-black dark:text-white md:text-4xl md:leading-[5rem]"
              word="Lets get you signed up!!!"
            />

            <label for="name" class="p-2"> Enter Your Name : </label>
            <InputSpotlightBorder inp="Enter Name" type="text"
            ></InputSpotlightBorder>
            <br />

            <label for="Email" class="p-2"> Enter Your Email Id : </label>
            <InputSpotlightBorder inp="Enter Email ID" type="text"
            ></InputSpotlightBorder>
            <br />
            <label for="password" class="p-2"> Enter Password : </label>

            <InputSpotlightBorder inp="Enter Your Password" type="password"
            ></InputSpotlightBorder>
            <br />
            <ButtonMagnetic btnval="Signup"></ButtonMagnetic>
          </div>
          <div>
            <img src="/login-img.png" alt="login" class="w-[500px] h-[500px]" />
          </div>
        </div>
      {/snippet}
    </CardAnimatedBorder>
  </div>
</div>
