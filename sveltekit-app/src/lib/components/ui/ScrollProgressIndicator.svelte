<script lang="ts">
  import { onMount } from 'svelte';
  let progress = 0;

  onMount(() => {
    const update = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    };
    window.addEventListener('scroll', update);
    update();
    return () => window.removeEventListener('scroll', update);
  });
</script>

<div class="fixed top-0 left-0 w-full h-1 bg-muted z-40">
  <div
    class="h-full bg-accent transition-width duration-150"
    style="width: {progress}%;"
  ></div>
</div>
