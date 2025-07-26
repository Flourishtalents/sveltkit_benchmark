<script lang="ts">
  export let href: string = '';
  export let variant: 'primary' | 'secondary' = 'primary';
  export let target: '_blank' | '_self' = '_self';
</script>

<a
  href={href}
  target={target}
  class={`inline-block px-6 py-3 rounded-lg text-white font-semibold transition 
    ${variant === 'primary' ? 'bg-primary hover:bg-primary-dark' : 'bg-gray-200 text-primary hover:bg-gray-300'}`}
>
  <slot />
</a>
