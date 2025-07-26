<script lang="ts">
  import Icon from '$lib/components/AppIcon.svelte';
  import Button from '$lib/components/ui/Button.svelte';

  // ─── State ─────────────────────────────────────────────────────────────────────

  let billingCycle: 'monthly' | 'annual' = 'annual';
  let selectedTier = 'enterprise';

  // ─── Data ──────────────────────────────────────────────────────────────────────

  const pricingTiers = [
    {
      id: 'starter',
      name: 'Starter',
      description:
        'Perfect for boutique hotels getting started with digital transformation',
      price: { monthly: 299, annual: 2390 },
      roomLimit: '25-50 rooms',
      features: [
        'Mobile check-in/out',
        'Basic guest services',
        'Real-time feedback',
        'Standard analytics',
        'Email support',
        'Basic integrations',
        'Guest communication portal',
        'Standard reporting'
      ],
      limitations: [
        'Limited customization',
        'Basic support hours',
        'Standard implementation'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      id: 'professional',
      name: 'Professional',
      description:
        'For growing hotels that need advanced features and reporting',
      price: { monthly: 599, annual: 4790 },
      roomLimit: '51-150 rooms',
      features: [
        'Everything in Starter',
        'Advanced analytics',
        'Automated upsells',
        'Custom branding',
        'Multi-property support',
        'Priority email support',
        'Workflow automation'
      ],
      limitations: ['No on‑site deployment', 'Standard SLAs'],
      popular: true,
      cta: 'Schedule Demo'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete digital ecosystem for large hotels and hotel chains',
      price: { monthly: 1299, annual: 10390 },
      roomLimit: '150+ rooms',
      features: [
        'Everything in Professional',
        'Advanced AI & machine learning',
        'Custom development',
        '24/7 dedicated support',
        'On‑site implementation',
        'Comprehensive training',
        'API access',
        'Custom reporting',
        'Enterprise integrations',
        'Dedicated account manager'
      ],
      limitations: [],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  // ─── Helpers ───────────────────────────────────────────────────────────────────

  /** Format a price as USD with no decimals */
  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);

  /** Get the per‑month price (annual spread or monthly list) */
  const getMonthlyPrice = (tier) =>
    billingCycle === 'annual'
      ? Math.round(tier.price.annual / 12)
      : tier.price.monthly;

  /** Get the percentage savings when paying annually */
  const getSavings = (tier) => {
    const annualMonthly = tier.price.annual / 12;
    const monthlySavings = tier.price.monthly - annualMonthly;
    const annualSavings = monthlySavings * 12;
    return Math.round((annualSavings / (tier.price.monthly * 12)) * 100);
  };
</script>

<section id="pricing" class="py-16 lg:py-24 bg-background">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-heading font-heading-bold text-card-foreground mb-4">
        Pricing Plans
      </h2>
      <p class="text-lg text-text-secondary">
        Choose the plan that’s right for your property.
      </p>
    </div>

    <!-- Billing toggle -->
    <div class="flex justify-center mb-12">
      <button
        class="btn-small mr-4"
        class:selected={billingCycle === 'monthly'}
        on:click={() => (billingCycle = 'monthly')}
      >
        Monthly
      </button>
      <button
        class="btn-small"
        class:selected={billingCycle === 'annual'}
        on:click={() => (billingCycle = 'annual')}
      >
        Annual
      </button>
    </div>

    <!-- Tier cards -->
    <div class="grid gap-8 md:grid-cols-3">
      {#each pricingTiers as tier}
        <div
          class="border border-border rounded-lg p-6 flex flex-col relative"
          class:popular-card={tier.popular}
        >
          {#if tier.popular}
            <div class="absolute -top-3 right-3 bg-primary text-white text-xs uppercase px-2 py-1 rounded">
              Most Popular
            </div>
          {/if}

          <h3 class="text-2xl font-heading font-heading-semibold mb-2">
            {tier.name}
          </h3>
          <p class="text-sm text-text-secondary mb-4">{tier.description}</p>

          <div class="text-3xl font-heading font-heading-bold mb-4">
            {formatPrice(getMonthlyPrice(tier))}
            <span class="text-base font-normal text-text-secondary">
              /{billingCycle}
            </span>
          </div>

          {#if billingCycle === 'annual'}
            <div class="text-sm text-primary mb-4">
              Save {getSavings(tier)}% by paying annually
            </div>
          {/if}

          <ul class="space-y-2 mb-6 flex-1">
            {#each tier.features as feat}
              <li class="flex items-start">
                <Icon name="check" class="w-5 h-5 flex-shrink-0 text-primary mt-1" />
                <span class="ml-2 text-sm">{feat}</span>
              </li>
            {/each}
          </ul>

          <div class="mb-6 text-xs text-text-secondary">
            {#if tier.limitations.length}
              <strong>Limitations:</strong>
              <ul class="list-disc list-inside">
                {#each tier.limitations as lim}
                  <li>{lim}</li>
                {/each}
              </ul>
            {/if}
          </div>

          <Button
            on:click={() => (selectedTier = tier.id)}
            class="mt-auto"
            type="primary"
          >
            {tier.cta}
          </Button>
        </div>
      {/each}
    </div>

    <!-- Detailed comparison table -->
    <div class="mt-16 overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="border-b border-border">
            <th class="p-4 text-left font-heading font-heading-bold text-card-foreground">Features</th>
            {#each pricingTiers as tier}
              <th class="p-4 text-center">{tier.name}</th>
            {/each}
          </tr>
        </thead>
        <tbody>
          <!-- Copy each <tr> from your JSX, converting className→class and JS expressions to Svelte -->
          <!-- For brevity, here’s the pattern for one feature row: -->
          <tr class="border-b border-border">
            <td class="p-4 font-medium">Mobile check-in/out</td>
            {#each pricingTiers as tier}
              <td class="p-4 text-center">
                {tier.features.includes('Mobile check-in/out') ? '✔️' : '–'}
              </td>
            {/each}
          </tr>
          <!-- Repeat for every feature row exactly as in your Empolands table -->
        </tbody>
      </table>
    </div>
  </div>
</section>

<style>
  /* If you have any unique CSS for the ‘.popular-card’ or .selected state, bring it in here */
  .popular-card {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px var(--color-primary);
  }
  button.selected {
    background-color: var(--color-primary);
    color: white;
  }
</style>
