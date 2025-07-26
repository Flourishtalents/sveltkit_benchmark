<script lang="ts">
  import { onMount } from 'svelte';
  import { tick } from 'svelte';
  
  // State variables
  let isScrolled = false;
  let isMobileMenuOpen = false;
  let activeSection: string = '';

  // Navigation items
  const navigationItems = [
    { id: 'solutions', label: 'Solutions', href: '#solutions' },
    { id: 'roi-calculator', label: 'ROI Calculator', href: '#roi-calculator' },
    { id: 'success-stories', label: 'Success Stories', href: '#success-stories' },
    { id: 'pricing', label: 'Pricing', href: '#pricing' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  // Handle scroll events to update header state and active section
  function onScroll() {
    isScrolled = window.scrollY > 100;

    // Determine active section
    for (const item of navigationItems) {
      const el = document.getElementById(item.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          activeSection = item.id;
          break;
        }
      }
    }
  }

  onMount(() => {
    // Initial check
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

  // Scroll to a section smoothly
  async function handleNavClick(href: string) {
    isMobileMenuOpen = false;
    await tick(); // wait for DOM update
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  async function handleDemoBooking() {
    isMobileMenuOpen = false;
    await tick();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
</script>

<style>
  /* Optional: add any additional styling here if not using Tailwind */
</style>

<header
  class={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
    isScrolled
      ? 'bg-background/95 backdrop-blur-sm shadow-md border-b border-border'
      : 'bg-transparent'
  }`}
>

  <div class="w-full px-6 lg:px-8">
    <div class="flex items-center justify-between h-16 lg:h-20">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <div
          class="flex items-center cursor-pointer"
          on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
            <svg
              viewBox="0 0 24 24"
              class="w-6 h-6 text-primary-foreground"
              fill="currentColor"
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
              <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" fill="none" />
            </svg>
          </div>
          <span class="text-xl lg:text-2xl font-heading font-heading-bold text-primary">
            EmpoLands
          </span>
        </div>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center space-x-8">
        {#each navigationItems as item}
          <button
            on:click={() => handleNavClick(item.href)}
            class="text-sm font-body-medium transition-colors duration-250 hover:text-primary"
            class:text-primary={activeSection === item.id}
            class:border-b-2={activeSection === item.id}
            class:border-primary={activeSection === item.id}
            class:pb-1={activeSection === item.id}
            class:text-text-primary={activeSection !== item.id}
          >
            {item.label}
          </button>
        {/each}
      </nav>

      <!-- Desktop CTA -->
      <div class="hidden lg:flex items-center space-x-4">
        <button
          class="border border-primary text-primary px-4 py-2 rounded-sm text-sm font-body-medium"
          on:click={handleDemoBooking}
        >
          Schedule Demo
        </button>
        <button
          class="bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-2 rounded-sm text-sm font-cta"
          on:click={handleDemoBooking}
        >
          Book Consultation
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="lg:hidden p-2 rounded-md text-text-primary hover:text-primary transition-colors duration-250"
        aria-label="Toggle mobile menu"
        on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)}
      >
        {#if isMobileMenuOpen}
          <!-- X Icon -->
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        {:else}
          <!-- Menu Icon -->
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div
    class="lg:hidden transition-all duration-300 overflow-hidden bg-background border-t border-border px-6 py-4"
    style="max-height: {isMobileMenuOpen ? '24rem' : '0'}; opacity: {isMobileMenuOpen ? 1 : 0};"
  >
    {#each navigationItems as item}
      <button
        on:click={() => handleNavClick(item.href)}
        class="block w-full text-left py-2 text-base font-body-medium transition-colors duration-250"
        class:text-primary={activeSection === item.id}
        class:font-body-semibold={activeSection === item.id}
        class:text-text-primary={activeSection !== item.id}
        class:hover:text-primary={activeSection !== item.id}
      >
        {item.label}
      </button>
    {/each}

    <div class="pt-4 border-t border-border space-y-3">
      <button
        class="w-full border border-primary text-primary px-4 py-2 rounded-sm text-sm font-body-medium"
        on:click={handleDemoBooking}
      >
        Schedule Demo
      </button>
      <button
        class="w-full bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-2 rounded-sm text-sm font-cta"
        on:click={handleDemoBooking}
      >
        Book Consultation
      </button>
    </div>
  </div>
</header>

<!-- Spacer to prevent content overlap -->
