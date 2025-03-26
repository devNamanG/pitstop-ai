<script lang="ts">
  let { children, layoutData }: { children: Snippet; layoutData: LayoutData } =
    $props();
  import { onMount } from "svelte";
  import { session } from "$lib/session";
  import { goto } from "$app/navigation";
  import { signOut } from "firebase/auth";
  import { auth } from "$lib/firebase/firebase";

  import "../app.css";
  import { ModeWatcher } from "mode-watcher";
  import type { LayoutData } from "./$types";
  import type { Snippet } from "svelte";

  let loading: boolean = true;
  let loggedIn: boolean = false;

  session.subscribe((cur: any) => {
    loading = cur?.loading;
    loggedIn = cur?.loggedIn;
  });

  onMount(async () => {
    const user: any = await layoutData.getAuthUser();

    const loggedIn = !!user && user?.emailVerified;
    session.update((cur: any) => {
      loading = false;
      return {
        ...cur,
        user,
        loggedIn,
        loading: false,
      };
    });

    if (loggedIn) {
      goto("/");
    }
  });
</script>

<ModeWatcher />
{#if loading}
  <div>Loading...</div>
{:else}
  <div class="h-screen w-screen">
    {@render children()}
  </div>
{/if}
