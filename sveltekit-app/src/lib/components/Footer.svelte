<script lang="ts">
  // ─── Data ──────────────────────────────────────────────────────────────────────
  const year = new Date().getFullYear();
</script>

<footer class="py-8 bg-gray-800 text-gray-200">
  <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    <!-- Branding / Logo -->
    <div class="flex items-center space-x-2">
      <img src="/assets/images/logo.svg" alt="Pro Empo Logo" class="h-8" />
      <span class="font-heading font-heading-semibold text-lg text-white">
        Pro Empo
      </span>
    </div>

    <!-- Links -->
    <nav class="flex space-x-6">
      <a href="/privacy" class="hover:underline">Privacy Policy</a>
      <a href="/terms" class="hover:underline">Terms of Service</a>
      <a href="#contact" class="hover:underline">Contact</a>
    </nav>

    <!-- Copyright -->
    <div class="text-sm text-text-secondary">
      &copy; {year} Pro Empo. All rights reserved.
    </div>
  </div>
</footer>
