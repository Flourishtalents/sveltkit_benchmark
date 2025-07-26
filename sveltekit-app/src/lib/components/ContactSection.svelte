<script lang="ts">
  import AppIcon from '$lib/components/AppIcon.svelte';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  // Form data state
  let formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    hotelSize: '',
    currentChallenges: '',
    preferredTime: '',
    urgency: 'medium'
  };

  let isSubmitting = false;
  let submitStatus: 'success' | 'error' | null = null;

  // Hotel size options
  const hotelSizeOptions = [
    { value: '25-50', label: '25-50 rooms (Boutique)' },
    { value: '51-100', label: '51-100 rooms (Mid-size)' },
    { value: '101-200', label: '101-200 rooms (Large)' },
    { value: '201-500', label: '201-500 rooms (Resort)' },
    { value: '500+', label: '500+ rooms (Enterprise)' }
  ];

  // Urgency options
  const urgencyOptions = [
    { value: 'immediate', label: 'Immediate (Within 30 days)', color: 'text-error' },
    { value: 'high', label: 'High Priority (1-3 months)', color: 'text-warning' },
    { value: 'medium', label: 'Medium Priority (3-6 months)', color: 'text-accent' },
    { value: 'low', label: 'Planning Phase (6+ months)', color: 'text-primary' }
  ];

  // Contact methods
  const contactMethods = [
    {
      icon: 'phone',
      title: 'Call Us',
      description: 'Speak with an expert',
      contact: '+1 (800) EMPOLANDS',
      action: () => window.open('tel:+18003676526', '_self')
    },
    {
      icon: 'mail',
      title: 'Email Us',
      description: 'Send us a message',
      contact: 'hello@empolands.com',
      action: () => window.open('mailto:hello@empolands.com', '_self')
    },
    {
      icon: 'message-circle',
      title: 'Live Chat',
      description: 'Chat with our team',
      contact: 'Available 24/7',
      action: () => {
        alert('Live chat feature would open here');
      }
    },
    {
      icon: 'map-pin',
      title: 'Visit Us',
      description: 'Our headquarters',
      contact: 'New York, NY',
      action: () => window.open('https://maps.google.com/?q=New+York+NY', '_blank')
    }
  ];

  // Consultation benefits
  const consultationBenefits = [
    'Comprehensive operational assessment',
    'Custom ROI projection for your hotel',
    'Technology roadmap and implementation plan',
    'Competitive analysis and market positioning',
    'Risk-free trial period discussion'
  ];

  // Helper function to get urgency color
  function getUrgencyColor(urgency: string): string {
    const option = urgencyOptions.find(opt => opt.value === urgency);
    return option ? option.color : 'text-primary';
  }

  // Form submission handler
  async function handleSubmit(event: Event) {
    event.preventDefault();
    isSubmitting = true;
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      submitStatus = 'success';
      
      // Reset form
      formData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        hotelSize: '',
        currentChallenges: '',
        preferredTime: '',
        urgency: 'medium'
      };
    } catch (error) {
      submitStatus = 'error';
    } finally {
      isSubmitting = false;
    }
  }

  function resetForm() {
    submitStatus = null;
  }
</script>

<section id="contact" class="py-16 lg:py-24 bg-surface">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl lg:text-5xl font-heading font-heading-bold text-text-primary mb-6">
        Ready to
        <span class="text-accent">Transform Your Hotel?</span>
      </h2>
      <p class="text-xl text-text-secondary max-w-3xl mx-auto">
        Book your free strategy consultation and discover how Pro Empo can revolutionize your hotel operations
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div class="bg-card rounded-2xl shadow-testimonial p-8 border border-border">
        <div class="flex items-center mb-8">
          <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
            <AppIcon name="calendar" size={24} className="text-accent" />
          </div>
          <div>
            <h3 class="text-xl font-heading font-heading-bold text-card-foreground">
              Book Your Strategy Session
            </h3>
            <p class="text-sm text-text-secondary">
              Free consultation • No commitment required
            </p>
          </div>
        </div>

        {#if submitStatus === 'success'}
          <div class="text-center py-12" in:fade>
            <div class="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <AppIcon name="check-circle" size={32} className="text-success" />
            </div>
            <h4 class="text-xl font-heading font-heading-bold text-success mb-4">
              Consultation Booked Successfully!
            </h4>
            <p class="text-text-secondary mb-6">
              Thank you for your interest. Our team will contact you within 24 hours to schedule your strategy session.
            </p>
            <button
              type="button"
              class="px-6 py-3 border border-border rounded-lg bg-background text-text-primary hover:bg-muted transition-colors font-body-medium"
              on:click={resetForm}
            >
              Book Another Session
            </button>
          </div>
        {:else}
          <form on:submit={handleSubmit} class="space-y-6">
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label for="firstName" class="block text-sm font-body-medium text-text-primary mb-2">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  bind:value={formData.firstName}
                  placeholder="John"
                  class="w-full px-4 py-3 border border-border rounded-lg bg-input text-text-primary focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors duration-250"
                  required
                />
              </div>
              <div>
                <label for="lastName" class="block text-sm font-body-medium text-text-primary mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  bind:value={formData.lastName}
                  placeholder="Smith"
                  class="w-full px-4 py-3 border border-border rounded-lg bg-input text-text-primary focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors duration-250"
                  required
                />
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label for="email" class="block text-sm font-body-medium text-text-primary mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  bind:value={formData.email}
                  placeholder="john@hotel.com"
                  class="w-full px-4 py-3 border border-border rounded-lg bg-input text-text-primary focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors duration-250"
                  required
                />
              </div>
              <div>
                <label for="phone" class="block text-sm font-body-medium text-text-primary mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  bind:value={formData.phone}
                  placeholder="+1 (555) 123-4567"
                  class="w-full px-4 py-3 border border-border rounded-lg bg-input text-text-primary focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors duration-250"
                  required
                />
              </div>
            </div>

            <div>
              <label for="company" class="block text-sm font-body-medium text-text-primary mb-2">
                Hotel/Company Name
              </label>
              <input
                id="company"
                type="text"
                bind:value={formData.company}
                placeholder="Grand Plaza Hotel"
                class="w-full px-4 py-3 border border-border rounded-lg bg-input text-text-primary focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors duration-250"
                required
              />
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label for="hotelSize" class="block text-sm font-body-medium text-text-primary mb-2">
                  Hotel Size
                </label>
                <select
                  id="hotelSize"
                  bind:value={formData.hotelSize}
                  class="w-full px-4 py-3 border border-border rounded-lg bg-input text-text-primary focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors duration-250"
                  required
                >
                  <option value="">Select hotel size</option>
                  {#each hotelSizeOptions as option}
                    <option value={option.value}>{option.label}</option>
                  {/each}
                </select>
              </div>

              <div>
                <label for="urgency" class="block text-sm font-body-medium text-text-primary mb-2">
                  Implementation Urgency
                </label>
                <select
                  id="urgency"
                  bind:value={formData.urgency}
                  class="w-full px-4 py-3 border border-border rounded-lg bg-input text-text-primary focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors duration-250"
                >
                  {#each urgencyOptions as option}
                    <option value={option.value}>{option.label}</option>
                  {/each}
                </select>
              </div>
            </div>

            <div>
              <label for="challenges" class="block text-sm font-body-medium text-text-primary mb-2">
                Current Challenges
              </label>
              <textarea
                id="challenges"
                bind:value={formData.currentChallenges}
                placeholder="Tell us about your current operational challenges, guest satisfaction issues, or revenue optimization goals..."
                rows="4"
                class="w-full px-4 py-3 border border-border rounded-lg bg-input text-text-primary focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors duration-250 resize-none"
              ></textarea>
            </div>

            <div>
              <label for="preferredTime" class="block text-sm font-body-medium text-text-primary mb-2">
                Preferred Consultation Time
              </label>
              <input
                id="preferredTime"
                type="text"
                bind:value={formData.preferredTime}
                placeholder="e.g., Weekday mornings, Tuesday afternoons"
                class="w-full px-4 py-3 border border-border rounded-lg bg-input text-text-primary focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors duration-250"
              />
              <p class="text-sm text-text-secondary mt-1">
                We'll do our best to accommodate your schedule
              </p>
            </div>

            <div class="pt-4 border-t border-border">
              <div class="flex items-center justify-between mb-4">
                <div class="text-sm text-text-secondary">
                  Priority Level:
                  <span class="ml-2 font-body-semibold {getUrgencyColor(formData.urgency)}">
                    {urgencyOptions.find(opt => opt.value === formData.urgency)?.label}
                  </span>
                </div>
                <div class="text-sm text-text-secondary">
                  Response time:
                  <span class="ml-1 font-body-semibold text-success">
                    {formData.urgency === 'immediate' ? '< 4 hours' : '< 24 hours'}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                class="w-full flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg font-cta transition-colors duration-250 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <AppIcon name="calendar" size={20} className="mr-2" />
                {isSubmitting ? 'Booking Consultation...' : 'Book Free Consultation'}
              </button>
            </div>

            <div class="text-center text-xs text-text-secondary">
              By submitting this form, you agree to receive communications from Pro Empo Consults.
              We respect your privacy and will never share your information.
            </div>
          </form>
        {/if}
      </div>

      <!-- Contact Information & Map -->
      <div class="space-y-8">
        <!-- Contact Methods -->
        <div class="grid grid-cols-2 gap-4">
          {#each contactMethods as method}
            <button
              type="button"
              on:click={method.action}
              class="bg-card rounded-xl shadow-testimonial p-6 border border-border hover:border-accent/50 transition-all duration-250 text-left group"
            >
              <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-250">
                <AppIcon name={method.icon} size={24} className="text-accent" />
              </div>
              <h4 class="font-heading font-heading-bold text-card-foreground mb-1">
                {method.title}
              </h4>
              <p class="text-sm text-text-secondary mb-2">
                {method.description}
              </p>
              <p class="text-sm font-body-semibold text-accent">
                {method.contact}
              </p>
            </button>
          {/each}
        </div>

        <!-- Office Location -->
        <div class="bg-card rounded-2xl shadow-testimonial border border-border overflow-hidden">
          <div class="p-6 border-b border-border">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <AppIcon name="map-pin" size={24} className="text-primary" />
              </div>
              <div>
                <h3 class="font-heading font-heading-bold text-card-foreground">
                  Pro Empo Consults Headquarters
                </h3>
                <p class="text-sm text-text-secondary">
                  New York, NY • Available Worldwide
                </p>
              </div>
            </div>
          </div>

          <!-- Map -->
          <div class="h-64 bg-muted relative">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="Pro Empo Consults Location"
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=40.7128,-74.0060&z=14&output=embed"
              class="border-0"
            ></iframe>
          </div>

          <div class="p-6">
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div class="text-text-secondary mb-1">Business Hours</div>
                <div class="font-body-semibold text-card-foreground">
                  Mon-Fri: 8AM-8PM EST
                </div>
              </div>
              <div>
                <div class="text-text-secondary mb-1">Emergency Support</div>
                <div class="font-body-semibold text-card-foreground">
                  24/7 Available
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Consultation Benefits -->
        <div class="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-6 border border-accent/20">
          <h3 class="font-heading font-heading-bold text-text-primary mb-4">
            What to Expect in Your Consultation
          </h3>
          <ul class="space-y-3">
            {#each consultationBenefits as benefit}
              <li class="flex items-start">
                <AppIcon name="check-circle" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                <span class="text-sm text-text-primary">{benefit}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Custom utility classes - these should ideally be in your global CSS or Tailwind config */
  .bg-surface {
    background-color: hsl(var(--background));
  }
  
  .bg-card {
    background-color: hsl(var(--card));
  }
  
  .text-card-foreground {
    color: hsl(var(--card-foreground));
  }
  
  .text-text-primary {
    color: hsl(var(--foreground));
  }
  
  .text-text-secondary {
    color: hsl(var(--muted-foreground));
  }
  
  .text-accent {
    color: hsl(var(--accent));
  }
  
  .bg-accent {
    background-color: hsl(var(--accent));
  }
  
  .text-accent-foreground {
    color: hsl(var(--accent-foreground));
  }
  
  .bg-input {
    background-color: hsl(var(--input));
  }
  
  .border-border {
    border-color: hsl(var(--border));
  }
  
  .text-primary {
    color: hsl(var(--primary));
  }
  
  .bg-primary {
    background-color: hsl(var(--primary));
  }
  
  .text-success {
    color: #10b981;
  }
  
  .bg-success {
    background-color: #10b981;
  }
  
  .text-warning {
    color: #f59e0b;
  }
  
  .text-error {
    color: #ef4444;
  }
  
  .bg-muted {
    background-color: hsl(var(--muted));
  }
  
  .shadow-testimonial {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  
  /* Typography classes */
  .font-heading {
    font-family: inherit;
  }
  
  .font-heading-bold {
    font-weight: 700;
  }
  
  .font-body-medium {
    font-weight: 500;
  }
  
  .font-body-semibold {
    font-weight: 600;
  }
  
  .font-cta {
    font-weight: 600;
  }
  
  .duration-250 {
    transition-duration: 250ms;
  }
</style>