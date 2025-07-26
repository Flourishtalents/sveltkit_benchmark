<script lang="ts">
  // A small sticky chat/contact widget
  let open = false;

  function toggle() {
    open = !open;
  }
</script>

<div class="fixed bottom-6 left-6 flex flex-col items-end space-y-2 z-50">
  <button
    on:click={toggle}
    class="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition"
    aria-label="Quick contact"
  >
    <!-- chat icon -->
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.94 9.94 0 01-4.55-1.12L3 20l1.12-4.45A9.94 9.94 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  </button>

  {#if open}
    <div class="w-64 bg-white rounded-xl shadow-lg p-4">
      <h4 class="font-heading-semibold mb-2">Quick Contact</h4>
      <form on:submit|preventDefault>
        <input
          type="text"
          placeholder="Your email"
          class="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 focus:ring-accent focus:border-accent"
        />
        <button
          type="submit"
          class="w-full bg-accent text-accent-foreground py-2 rounded-md font-semibold hover:bg-accent/90 transition"
        >
          Send
        </button>
      </form>
    </div>
  {/if}
</div>
