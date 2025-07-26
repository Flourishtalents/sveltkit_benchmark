<script lang="ts">
  // e.g. if you need to lazy‑load or embed an iframe/demo widget
  let demoLoaded = false;

  function loadDemo() {
    demoLoaded = true;
  }
</script>

<section id="demo" class="py-20 bg-white">
  <div class="max-w-5xl mx-auto px-6 text-center">
    <h2 class="text-4xl font-bold mb-6">See It In Action</h2>
    <p class="mb-8">Interact with our app demo below.</p>

    {#if demoLoaded}
      <!-- Paste your Empolands iframe or embed code here -->
      <div class="demo-container mx-auto">
        <!-- e.g. <iframe src="..."></iframe> -->
      </div>
    {:else}
      <button on:click={loadDemo} class="btn-primary btn-lg">
        Load Demo
      </button>
    {/if}
  </div>
</section>
