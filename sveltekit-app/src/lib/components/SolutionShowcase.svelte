<script lang="ts">
  import { onMount } from 'svelte';
  import Icon from '$lib/components/AppIcon.svelte';
  import Button from '$lib/components/ui/Button.svelte';

  // ─── State ─────────────────────────────────────────────────────────────────────
  let activeView: 'traditional' | 'digital' = 'traditional';

  // ─── Data ──────────────────────────────────────────────────────────────────────
  const traditionalOperations = [
    {
      process: 'Guest Check-in',
      time: '15 minutes',
      issues: ['Long queues', 'Manual paperwork', 'Staff bottlenecks'],
      icon: 'Clock'
    },
    {
      process: 'Service Requests',
      time: '25 minutes',
      issues: ['Phone calls', 'Manual dispatch', 'No tracking'],
      icon: 'Phone'
    },
    {
      process: 'Feedback Collection',
      time: 'Post-stay',
      issues: ['Low response rates', 'Delayed insights', 'No real-time action'],
      icon: 'MessageSquare'
    },
    {
      process: 'Revenue Management',
      time: 'Weekly',
      issues: ['Static pricing', 'Limited data', 'Reactive decisions'],
      icon: 'DollarSign'
    }
  ];

  const digitalOperations = [
    {
      process: 'Mobile Check-in',
      time: '2 minutes',
      benefits: ['Contactless process', 'Automated verification', 'Instant room access'],
      icon: 'Smartphone',
      improvement: '87% faster'
    },
    {
      process: 'AI-Powered Requests',
      time: '3 minutes',
      benefits: ['Instant routing', 'Predictive service', 'Real-time tracking'],
      icon: 'Zap',
      improvement: '88% faster'
    },
    {
      process: 'Real-time Feedback',
      time: 'Instant',
      benefits: ['In-moment capture', 'Immediate alerts', 'Proactive resolution'],
      icon: 'Heart',
      improvement: '95% response rate'
    },
    {
      process: 'Dynamic Pricing',
      time: 'Real-time',
      benefits: ['AI optimization', 'Market intelligence', 'Automated adjustments'],
      icon: 'TrendingUp',
      improvement: '35% revenue increase'
    }
  ];

  const appFeatures = [
    {
      title: 'Mobile Check-in/Out',
      description: 'Seamless arrival and departure experience',
      icon: 'Smartphone'
    },
    {
      title: 'Digital Room Key',
      description: 'Secure, contactless room access',
      icon: 'Key'
    },
    {
      title: 'Concierge Services',
      description: 'AI-powered recommendations and bookings',
      icon: 'Users'
    },
    {
      title: 'Real-time Communication',
      description: 'Instant guest-staff messaging',
      icon: 'MessageCircle'
    },
    {
      title: 'Personalized Offers',
      description: 'Targeted upselling and experiences',
      icon: 'Gift'
    },
    {
      title: 'Feedback System',
      description: 'Continuous improvement insights',
      icon: 'Star'
    }
  ];

  // ─── Actions ────────────────────────────────────────────────────────────────────
  function scrollToDemo() {
    const section = document.getElementById('app-demo');
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
</script>

<section id="solutions" class="py-16 lg:py-24 bg-background">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center mb-16">
      <h2 class="text-3xl lg:text-5xl font-heading font-heading-bold text-text-primary mb-6">
        From <span class="text-error">Outdated</span> to <span class="text-success">Optimized</span>
      </h2>
      <p class="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
        See the dramatic transformation possible with Pro Empo's integrated digital ecosystem
      </p>

      <!-- View Toggle -->
      <div class="inline-flex bg-muted rounded-lg p-1">
        <button
          on:click={() => (activeView = 'traditional')}
          class={"px-6 py-3 rounded-md font-body-medium transition-all duration-250 " +
            (activeView === 'traditional'
              ? 'bg-error text-error-foreground shadow-sm'
              : 'text-text-secondary hover:text-text-primary')}
        >
          Traditional Operations
        </button>
        <button
          on:click={() => (activeView = 'digital')}
          class={"px-6 py-3 rounded-md font-body-medium transition-all duration-250 " +
            (activeView === 'digital'
              ? 'bg-success text-success-foreground shadow-sm'
              : 'text-text-secondary hover:text-text-primary')}
        >
          Pro Empo Digital Ecosystem
        </button>
      </div>
    </div>

    <!-- Comparison View -->
    <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
      <!-- Traditional -->
      <div class={"transition-all duration-500 " + (activeView === 'traditional'
        ? 'opacity-100 scale-100'
        : 'opacity-50 scale-95')}>
        <div class="bg-card border-2 border-error/20 rounded-2xl shadow-testimonial p-8">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-error/10 rounded-lg flex items-center justify-center mr-4">
              <Icon name="AlertTriangle" size={24} class="text-error" />
            </div>
            <div>
              <h3 class="text-xl font-heading font-heading-bold text-card-foreground">
                Traditional Hotel Operations
              </h3>
              <p class="text-sm text-text-secondary">Current industry standard</p>
            </div>
          </div>

          <div class="space-y-6">
            {#each traditionalOperations as op}
              <div class="border border-border rounded-lg p-4">
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center">
                    <Icon name={op.icon} size={20} class="text-error mr-3" />
                    <span class="font-body-semibold text-card-foreground">{op.process}</span>
                  </div>
                  <span class="text-sm font-body-bold text-error">{op.time}</span>
                </div>
                <div class="flex flex-wrap gap-2">
                  {#each op.issues as issue}
                    <span class="px-2 py-1 bg-error/10 text-error text-xs rounded-md">{issue}</span>
                  {/each}
                </div>
              </div>
            {/each}
          </div>

          <div class="mt-6 pt-6 border-t border-border">
            <div class="flex items-center justify-between text-sm">
              <span class="text-text-secondary">Overall Efficiency</span>
              <span class="font-body-bold text-error">32%</span>
            </div>
            <div class="w-full bg-muted rounded-full h-2 mt-2">
              <div class="bg-error h-2 rounded-full" style="width: 32%;"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Digital -->
      <div class={"transition-all duration-500 " + (activeView === 'digital'
        ? 'opacity-100 scale-100'
        : 'opacity-50 scale-95')}>
        <div class="bg-card border-2 border-success/20 rounded-2xl shadow-testimonial p-8">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mr-4">
              <Icon name="CheckCircle" size={24} class="text-success" />
            </div>
            <div>
              <h3 class="text-xl font-heading font-heading-bold text-card-foreground">
                Pro Empo Digital Ecosystem
              </h3>
              <p class="text-sm text-text-secondary">Next-generation hospitality</p>
            </div>
          </div>

          <div class="space-y-6">
            {#each digitalOperations as op}
              <div class="border border-border rounded-lg p-4">
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center">
                    <Icon name={op.icon} size={20} class="text-success mr-3" />
                    <span class="font-body-semibold text-card-foreground">{op.process}</span>
                  </div>
                  <div class="text-right">
                    <div class="text-sm font-body-bold text-success">{op.time}</div>
                    <div class="text-xs text-accent font-body-medium">{op.improvement}</div>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2">
                  {#each op.benefits as b}
                    <span class="px-2 py-1 bg-success/10 text-success text-xs rounded-md">{b}</span>
                  {/each}
                </div>
              </div>
            {/each}
          </div>

          <div class="mt-6 pt-6 border-t border-border">
            <div class="flex items-center justify-between text-sm">
              <span class="text-text-secondary">Overall Efficiency</span>
              <span class="font-body-bold text-success">94%</span>
            </div>
            <div class="w-full bg-muted rounded-full h-2 mt-2">
              <div class="bg-success h-2 rounded-full" style="width: 94%;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- App Features Grid -->
    <div class="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
      <div class="text-center mb-12">
        <h3 class="text-2xl lg:text-3xl font-heading font-heading-bold text-text-primary mb-4">
          Sheraton Special App Features
        </h3>
        <p class="text-lg text-text-secondary max-w-2xl mx-auto">
          Every feature designed to enhance guest experience while optimizing your operations
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {#each appFeatures as feature}
          <div class="bg-card rounded-xl shadow-testimonial p-6 border border-border hover:border-accent/50 transition-all duration-250 group">
            <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-250">
              <Icon name={feature.icon} size={24} class="text-accent" />
            </div>
            <h4 class="font-heading font-heading-bold text-card-foreground mb-2">
              {feature.title}
            </h4>
            <p class="text-sm text-text-secondary">{feature.description}</p>
          </div>
        {/each}
      </div>

      <div class="text-center">
        <Button
          variant="default"
          size="lg"
          on:click={scrollToDemo}
          class="bg-accent text-accent-foreground hover:bg-accent/90 font-cta"
          iconName="Play"
          iconPosition="left"
        >
          Experience Interactive Demo
        </Button>
      </div>
    </div>
  </div>
</section>
