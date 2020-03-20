<template>
  <span class="pill" :class="`${variant}`">
    <slot></slot>
  </span>
</template>

<script>
const NAME = 'vvl-pill'

export default {
  name: NAME,
  props: {
    variant: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'regular'
    }
  }
}
</script>

<style scoped>
@import '../css/_colors.css';
@import '../css/_variables.css';
@import '../css/_typography.css';

.pill {
  display: inline-block;
  vertical-align: middle;
  line-height: var(--font-size-smaller);
  font-size: var(--font-size-smaller);
  border-radius: var(--pill-border-radius);
  padding: var(--pill-padding-vertical) var(--pill-padding-horizontal);
  border: 1px solid transparent;
}

.pill.primary {
  color: var(--secondary-color);
  background-color: var(--accent-color);
}

.pill.secondary {
  color: var(--accent-color);
  border-color: var(--accent-color);
  background-color: var(--secondary-color);
}
</style>
