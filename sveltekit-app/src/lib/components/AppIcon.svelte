<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import * as lucide from 'lucide-svelte';

  export let name: string;
  export let size: number = 24;
  export let className: string = ''; // 🔧 renamed from class

  const dispatch = createEventDispatcher();
  const Icon = lucide[name];
</script>

{#if Icon}
  <Icon {size} class={className} on:click={() => dispatch('click')} />
{:else}
  <span class="text-red-500">Icon "{name}" not found</span>
{/if}
