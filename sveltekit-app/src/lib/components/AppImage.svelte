<script lang="ts">
  export let src: string;
  export let alt: string = '';
  export let className: string = '';
</script>

<img
  src={src}
  alt={alt}
  loading="lazy"
  class={className}
/>
