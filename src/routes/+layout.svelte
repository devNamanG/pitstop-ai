<script>
  let { children } = $props();
  import "../app.css";
  import { ModeWatcher } from "mode-watcher";
</script>

<ModeWatcher />
<div class="h-screen w-screen">
  {@render children()}
</div>
