<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  // Shared UI components
  import Header from '$lib/components/ui/Header.svelte';
  import ScrollProgressIndicator from '$lib/components/ui/ScrollProgressIndicator.svelte';
  import FloatingCTA from '$lib/components/ui/FloatingCTA.svelte';
  import QuickContactWidget from '$lib/components/ui/QuickContactWidget.svelte';

  // Landing‑page sections
  import HeroSection from '$lib/components/HeroSection.svelte';
  import ProblemSection from '$lib/components/ProblemSection.svelte';
  import SolutionShowcase from '$lib/components/SolutionShowcase.svelte';
  import ROICalculator from '$lib/components/ROICalculator.svelte';
  import PricingSection from '$lib/components/PricingSection.svelte';
  import InteractiveAppDemo from '$lib/components/InteractiveAppDemo.svelte';
  import TestimonialsSection from '$lib/components/TestimonialsSection.svelte';
  import ContactSection from '$lib/components/ContactSection.svelte';
  import Footer from '$lib/components/Footer.svelte';

  // Chat widget initialization
  const initChat = () => {
    const tawk = document.createElement('script');
    tawk.async = true;
    tawk.src = 'https://embed.tawk.to/YOUR_TAWK_ID_HERE/default';
    tawk.charset = 'UTF-8';
    tawk.setAttribute('crossorigin', '*');
    document.body.appendChild(tawk);
  };

  onMount(() => {
    // Load chat script immediately after first paint
    initChat();
  });
</script>

<svelte:head>
  <!-- Basic SEO + Metadata -->
  <meta name="description" content="EmpoWise transforms hotels into digital powerhouses. Boost direct bookings, lower costs, and create premium guest experiences." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.ico" />

  <!-- Performance: Preconnects -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
  <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

  <!-- Fonts Preload -->
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />

  <!-- Open Graph -->
  <meta property="og:title" content="EmpoWise | Transform Your Hotel" />
  <meta property="og:description" content="Boost direct bookings, lower costs, and create premium guest experiences with EmpoWise digital hotel transformation." />
  <meta property="og:image" content="https://proempoconsults.com/social-preview.jpg" />
  <meta property="og:url" content="https://proempoconsults.com/" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="EmpoWise | Transform Your Hotel" />
  <meta name="twitter:description" content="Boost direct bookings, lower costs, and create premium guest experiences with EmpoWise digital hotel transformation." />
  <meta name="twitter:image" content="https://proempoconsults.com/social-preview.jpg" />

  <!-- Plausible Analytics -->
  <script defer data-domain="proempoconsults.com" src="https://plausible.io/js/plausible.js"></script>
</svelte:head>

<Header />
<ScrollProgressIndicator />

<main>
  <HeroSection />

  <ProblemSection />

  <div in:fade>
    <SolutionShowcase />
  </div>

  <div in:fade>
    <ROICalculator />
  </div>

  <div in:fade>
    <PricingSection />
  </div>

  <div in:fade>
    <InteractiveAppDemo />
  </div>

  <div in:fade>
    <TestimonialsSection />
  </div>

  <div in:fade>
    <ContactSection />
  </div>
</main>

<Footer />

<FloatingCTA />
<QuickContactWidget />