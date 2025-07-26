<script lang="ts">
  // ✅ Correct way to load global styles
  import '../app.css'; 
  import '../styles/index.css';

  // Shared UI
  import Header from '$lib/components/ui/Header.svelte';
  import ScrollProgressIndicator from '$lib/components/ui/ScrollProgressIndicator.svelte';
  import FloatingCTA from '$lib/components/ui/FloatingCTA.svelte';
  import QuickContactWidget from '$lib/components/ui/QuickContactWidget.svelte';
</script>

<Header />
<ScrollProgressIndicator />

<slot />

<FloatingCTA />
<QuickContactWidget />


