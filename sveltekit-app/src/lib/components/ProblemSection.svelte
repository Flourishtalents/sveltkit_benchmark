<script lang="ts">
  import Icon from '$lib/components/AppIcon.svelte';
</script>

<section id="problem" class="py-20 bg-gray-50">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-heading font-heading-bold text-primary-foreground">
        The Problem
      </h2>
      <p class="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
        Hoteliers today face fragmented systems, manual workflows, and a lack of real‑time insights—making it impossible to deliver a seamless guest experience and maximize revenue.
      </p>
    </div>

    <div class="grid gap-8 md:grid-cols-3">
      <!-- Problem 1 -->
      <div class="flex flex-col items-center text-center space-y-4">
        <Icon name="Puzzle" size={48} class="text-primary-foreground" />
        <h3 class="text-2xl font-heading font-heading-semibold">
          Fragmented Systems
        </h3>
        <p class="text-base text-text-secondary max-w-sm">
          Legacy PMS and disparate tools create disjointed guest journeys and frustrated staff.
        </p>
      </div>

      <!-- Problem 2 -->
      <div class="flex flex-col items-center text-center space-y-4">
        <Icon name="Clock" size={48} class="text-primary-foreground" />
        <h3 class="text-2xl font-heading font-heading-semibold">
          Manual Workflows
        </h3>
        <p class="text-base text-text-secondary max-w-sm">
          Hour‑long manual tasks eat into staff productivity and lead to costly errors.
        </p>
      </div>

      <!-- Problem 3 -->
      <div class="flex flex-col items-center text-center space-y-4">
        <Icon name="ChartBar" size={48} class="text-primary-foreground" />
        <h3 class="text-2xl font-heading font-heading-semibold">
          Limited Insights
        </h3>
        <p class="text-base text-text-secondary max-w-sm">
          Without real‑time analytics, hoteliers miss revenue opportunities and can’t personalize at scale.
        </p>
      </div>
    </div>
  </div>
</section>
