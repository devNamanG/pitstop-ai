<script lang="ts">
  import CardBackagroundShine from "$lib/components/CardBackgroundShine/CardBackagroundShine.svelte";
import CardAnimatedBorder from "$lib/components/magic/CardAnimatedBorder/CardAnimatedBorder.svelte";

</script>

<CardAnimatedBorder>
    {#snippet title()}
        Login
    {/snippet}
    {#snippet body()}
        <p>
            Explore the new website that simplifies the creation of sophisticated dark mode components.
        </p>
    {/snippet}
</CardAnimatedBorder>
