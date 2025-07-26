<script lang="ts">
  // ─── State ─────────────────────────────────────────────────────────────────────
  let investment = 10000;
  let returnAmount = 15000;
  let roi = 0;

  // ─── Lifecycle / Reactivity ────────────────────────────────────────────────────
  $: calculateROI();

  // ─── Helpers ───────────────────────────────────────────────────────────────────
  function calculateROI() {
    if (investment > 0) {
      roi = ((returnAmount - investment) / investment) * 100;
    } else {
      roi = 0;
    }
  }
</script>

<section id="roi-calculator" class="py-20 bg-gray-100">
  <div class="max-w-4xl mx-auto px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-heading font-heading-bold text-primary-foreground">
        ROI Calculator
      </h2>
      <p class="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
        Instantly see how much your property could save—and earn—by switching to Pro Empo.
      </p>
    </div>

    <div class="grid gap-8 md:grid-cols-3 items-end">
      <!-- Investment Input -->
      <div class="flex flex-col">
        <label for="investment" class="block text-sm font-medium text-text-secondary mb-1">
          Initial Investment
        </label>
        <div class="relative">
          <input
            id="investment"
            type="number"
            bind:value={investment}
            class="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
          />
          <span class="absolute top-0 right-0 mt-2 mr-3 text-sm text-text-secondary">USD</span>
        </div>
      </div>

      <!-- Return Amount Input -->
      <div class="flex flex-col">
        <label for="returnAmount" class="block text-sm font-medium text-text-secondary mb-1">
          Expected Return
        </label>
        <div class="relative">
          <input
            id="returnAmount"
            type="number"
            bind:value={returnAmount}
            class="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
          />
          <span class="absolute top-0 right-0 mt-2 mr-3 text-sm text-text-secondary">USD</span>
        </div>
      </div>

      <!-- ROI Display -->
      <div class="text-center">
        <div class="text-5xl font-heading font-heading-bold text-primary-foreground">
          {roi.toFixed(2)}%
        </div>
        <div class="text-sm text-text-secondary mt-1">
          Return on Investment
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="mt-12 text-center">
      <a
        href="#demo"
        class="inline-block bg-accent text-accent-foreground font-heading-semibold px-6 py-3 rounded-md shadow hover:bg-accent/90 transition"
      >
        Try Interactive Demo
      </a>
    </div>
  </div>
</section>
