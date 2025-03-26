<script lang="ts">
  import { goto } from "$app/navigation";
  import ButtonMagnetic from "$lib/components/magic/ButtonMagnetic/ButtonMagnetic.svelte";
  import CardAnimatedBorder from "$lib/components/magic/CardAnimatedBorder/CardAnimatedBorder.svelte";

  import FlipText from "$lib/components/magic/FlipText";
  import InputSpotlightBorder from "$lib/components/magic/InputSpotlightBorder/InputSpotlightBorder.svelte";
  import { loginWithMail } from "$lib/firebase/auth";

  let email = $state("");
  let password = $state("");
</script>

<div class="w-full h-full flex items-center justify-center">
  <div class="p-[90px] w-full h-full bg-grid-white/[0.03]">
    <CardAnimatedBorder>
      {#snippet body()}
        <div class="flex justify-between">
          <div class="flex flex-col items-start p-10">
            <FlipText
              class="text-2xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-4xl md:leading-[5rem]"
              word="Hello!!!"
            />

            <FlipText
              class="text-xs font-bold tracking-[-0.1em] text-black dark:text-white md:text-3xl md:leading-[5rem]"
              word="Welcome Back GearHead!!!"
            />

            <label for="Email" class="p-2"> Enter Your Email Id : </label>
            <InputSpotlightBorder
              bind:val={email}
              inp="Enter Email ID"
              type="text"
            ></InputSpotlightBorder>
            <br />
            <label for="password" class="p-2"> Enter Password : </label>

            <InputSpotlightBorder
              bind:val={password}
              inp="Enter Your Password"
              type="password"
            ></InputSpotlightBorder>
            <br />
            <ButtonMagnetic
              onclick={async () => {
                console.log("login clicked");
                try {
                  await loginWithMail(email, password);
                  goto("/chat");
                } catch (e) {
                  console.log(e);
                  alert("An error occurred while logging in!");
                }
              }}
              btnval="Login"
            ></ButtonMagnetic>
          </div>
          <div>
            <img src="/login-img.png" alt="login" class="w-[500px] h-[500px]" />
          </div>
        </div>
      {/snippet}
    </CardAnimatedBorder>
  </div>
</div>
