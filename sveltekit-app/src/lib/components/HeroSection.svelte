<script lang="ts">
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  import Button from '$lib/components/ui/Button.svelte';
  import Icon from '$lib/components/AppIcon.svelte';

  let currentMetric = 0;
  const hotels = tweened(0, { duration: 2000, easing: cubicOut });
  const revenue = tweened(0, { duration: 2000, easing: cubicOut });
  const costs = tweened(0, { duration: 2000, easing: cubicOut });

  const metrics = [
    { label: "Hotels Transformed", value: 247, suffix: "+" },
    { label: "Average Revenue Increase", value: 35, suffix: "%" },
    { label: "Operational Cost Reduction", value: 28, suffix: "%" }
  ];

  let heroElement: HTMLElement;

  function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function animateNumbers() {
    hotels.set(247);
    revenue.set(35);
    costs.set(28);
  }

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateNumbers();
        observer.disconnect();
      }
    });

    if (heroElement) {
      observer.observe(heroElement);
    }

    const interval = setInterval(() => {
      currentMetric = (currentMetric + 1) % metrics.length;
    }, 3000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  });
</script>

<section
  id="hero"
  bind:this={heroElement}
  class="relative min-h-screen bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden"
>
  <div class="absolute inset-0 opacity-10">
    <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 lg:pt-32 pb-16">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div class="text-center lg:text-left">
        <div class="mb-6">
          <span class="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent font-accent-medium text-sm">
            <Icon name="Zap" size={16} class="mr-2" />
            Proven Digital Transformation
          </span>
        </div>

        <h1 class="text-4xl lg:text-6xl font-heading font-heading-bold text-primary-foreground mb-6 leading-tight">
          Transform Your Hotel Into a <span class="text-accent">Guest Experience Powerhouse</span>
        </h1>

        <p class="text-xl lg:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
          Increase revenue by <span class="font-body-semibold text-accent">35%</span> while reducing operational costs through our proven digital ecosystem and strategic consulting.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
          <Button
            variant="default"
            size="lg"
            on:click={() => scrollToId('contact')}
            class="bg-accent text-accent-foreground hover:bg-accent/90 font-cta text-lg px-8 py-4"
            iconName="Calendar"
            iconPosition="left"
          >
            Book Free Strategy Session
          </Button>
          <Button
            variant="outline"
            size="lg"
            on:click={() => scrollToId('app-demo')}
            class="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-body-semibold text-lg px-8 py-4"
            iconName="Play"
            iconPosition="left"
          >
            See Live Demo
          </Button>
        </div>

        <div class="grid grid-cols-3 gap-6 lg:gap-8">
          <div class="text-center lg:text-left">
            <div class="text-2xl lg:text-3xl font-heading font-heading-bold text-accent mb-1">
              {$hotels}+
            </div>
            <div class="text-sm text-primary-foreground/80 font-body-medium">
              Hotels Transformed
            </div>
          </div>
          <div class="text-center lg:text-left">
            <div class="text-2xl lg:text-3xl font-heading font-heading-bold text-accent mb-1">
              {$revenue}%
            </div>
            <div class="text-sm text-primary-foreground/80 font-body-medium">
              Average Revenue Increase
            </div>
          </div>
          <div class="text-center lg:text-left">
            <div class="text-2xl lg:text-3xl font-heading font-heading-bold text-accent mb-1">
              {$costs}%
            </div>
            <div class="text-sm text-primary-foreground/80 font-body-medium">
              Operational Cost Reduction
            </div>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="relative z-10">
          <div class="bg-card rounded-2xl shadow-testimonial p-6 lg:p-8 border border-border/20">
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <Icon name="Smartphone" size={24} class="text-primary-foreground" />
                </div>
                <div>
                  <h3 class="font-heading font-heading-bold text-card-foreground">
                    Sheraton Special
                  </h3>
                  <p class="text-sm text-text-secondary">
                    Guest Experience App
                  </p>
                </div>
              </div>
              <div class="flex space-x-2">
                <div class="w-3 h-3 bg-error rounded-full"></div>
                <div class="w-3 h-3 bg-warning rounded-full"></div>
                <div class="w-3 h-3 bg-success rounded-full"></div>
              </div>
            </div>

            <div class="space-y-4">
              <div class="flex items-center p-4 bg-muted rounded-lg">
                <Icon name="CheckCircle" size={20} class="text-success mr-3" />
                <span class="text-card-foreground font-body-medium">
                  Mobile Check-in Complete
                </span>
              </div>
              <div class="flex items-center p-4 bg-muted rounded-lg">
                <Icon name="Bell" size={20} class="text-accent mr-3" />
                <span class="text-card-foreground font-body-medium">
                  Room Ready Notification
                </span>
              </div>
              <div class="flex items-center p-4 bg-muted rounded-lg">
                <Icon name="Star" size={20} class="text-warning mr-3" />
                <span class="text-card-foreground font-body-medium">
                  Personalized Recommendations
                </span>
              </div>
            </div>

            <div class="mt-6 pt-6 border-t border-border">
              <div class="flex items-center justify-between text-sm">
                <span class="text-text-secondary">Guest Satisfaction</span>
                <span class="font-body-semibold text-success">98.5%</span>
              </div>
              <div class="w-full bg-muted rounded-full h-2 mt-2">
                <div class="bg-success h-2 rounded-full" style="width: 98.5%"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
        <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
      </div>
    </div>
  </div>

  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <Icon name="ChevronDown" size={32} class="text-primary-foreground/60" />
  </div>
</section>