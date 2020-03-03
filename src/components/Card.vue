<template>
  <div class="card" :class="`${hover ? 'hover' : ''}`">
    <slot></slot>
  </div>
</template>

<script>
const NAME = 'vvl-card'
export default {
  name: NAME,
  props: {
    hover: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
@import '../css/_variables.css';
@import '../css/_shadows.css';
@import '../css/_animations.css';

.card {
  box-shadow: var(--shadow-small);
  border-radius: var(--border-radius-small);
  border: 1px solid var(--shade-color-1);
  transition: box-shadow var(--shadow-transition), transform var(--transform-transition);
}

.card.hover {
  box-shadow: var(--shadow-small);
  border: 1px solid transparent;
}

.card.hover:hover:not(:disabled) {
  transform: var(--translate-raise-small);
  box-shadow: var(--shadow-medium);
}
</style>
