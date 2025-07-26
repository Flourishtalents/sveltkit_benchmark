<script lang="ts">
  import { onMount } from 'svelte';
  import Icon from '$lib/components/AppIcon.svelte';
  import AppImage from '$lib/components/AppImage.svelte';

  // ─── State ─────────────────────────────────────────────────────────────────────
  let current = 0;
  let intervalId: ReturnType<typeof setInterval>;

  // ─── Data ──────────────────────────────────────────────────────────────────────
  const testimonials = [
    {
      quote:
        "“Working with Pro Empo was a game‑changer. Our guests rave about the seamless check‑in and personalized services—revenue is up 40%!”",
      author: "Jane Doe, CEO at LuxeStay Hotels",
      avatar: "/assets/images/testimonials/jane-doe.jpg",
      rating: 5
    },
    {
      quote:
        "“We reduced manual tasks by 85% and increased upsells by 60%. The ROI calculator spoke for itself during the demo.”",
      author: "John Smith, Operations Manager at SeaView Resorts",
      avatar: "/assets/images/testimonials/john-smith.jpg",
      rating: 4
    },
    {
      quote:
        "“Their digital ecosystem transformed our multi‑property management. The interactive demo sold us instantly!”",
      author: "Maria Garcia, VP of Digital Transformation at UrbanBoutique Group",
      avatar: "/assets/images/testimonials/maria-garcia.jpg",
      rating: 5
    }
  ];

  // ─── Lifecycle ─────────────────────────────────────────────────────────────────
  onMount(() => {
    intervalId = setInterval(next, 6000);
    return () => clearInterval(intervalId);
  });

  // ─── Actions ────────────────────────────────────────────────────────────────────
  function next() {
    current = (current + 1) % testimonials.length;
  }
  function prev() {
    current = (current - 1 + testimonials.length) % testimonials.length;
  }
</script>

<section id="testimonials" class="py-20 bg-gray-50">
  <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-8">
    <h2 class="text-4xl font-heading font-heading-bold text-primary-foreground">
      What Our Clients Say
    </h2>

    <div class="relative">
      <!-- Previous Button -->
      <button
        on:click={prev}
        class="absolute left-0 top-1/2 transform -translate-y-1/2 btn-icon bg-white shadow"
        aria-label="Previous testimonial"
      >
        <Icon name="ChevronLeft" size={24} />
      </button>

      <!-- Testimonial Card -->
      <div class="bg-white rounded-2xl shadow-md p-8 mx-12 lg:mx-24">
        <div class="flex flex-col items-center space-y-4">
          <AppImage
            src={testimonials[current].avatar}
            alt={testimonials[current].author}
            class="w-16 h-16 rounded-full object-cover"
          />

          <div class="flex items-center space-x-1">
            {#each Array(testimonials[current].rating) as _}
              <Icon name="Star" size={20} class="text-accent" />
            {/each}
            {#if testimonials[current].rating < 5}
              {#each Array(5 - testimonials[current].rating) as _}
                <Icon name="Star" size={20} class="text-text-secondary" />
              {/each}
            {/if}
          </div>

          <p class="italic text-lg text-text-primary max-w-xl">
            {testimonials[current].quote}
          </p>
          <span class="font-heading font-heading-semibold text-text-secondary">
            — {testimonials[current].author}
          </span>
        </div>
      </div>

      <!-- You can place this in any .svelte file -->
<div class="bg-background text-foreground hidden"></div>

      <!-- Next Button -->
      <button
        on:click={next}
        class="absolute right-0 top-1/2 transform -translate-y-1/2 btn-icon bg-white shadow"
        aria-label="Next testimonial"
      >
        <Icon name="ChevronRight" size={24} />
      </button>
    </div>
  </div>
</section>
