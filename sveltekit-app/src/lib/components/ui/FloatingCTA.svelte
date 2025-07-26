<script lang="ts">
  // Shows a floating “Book Demo” button on scroll
  import { onMount } from 'svelte';
  let visible = false;

  onMount(() => {
    const onScroll = () => {
      visible = window.scrollY > window.innerHeight * 0.5;
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

{#if visible}
  <a
    href="#contact"
    class="fixed bottom-6 right-6 bg-accent text-accent-foreground font-semibold px-5 py-3 rounded-full shadow-lg hover:bg-accent/90 transition"
  >
    Book a Demo
  </a>
{/if}
