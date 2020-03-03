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
  font-size: var(--font-size-smaller);
  border-radius: var(--pill-border-radius);
  padding: var(--pill-padding-vertical) var(--pill-padding-horizontal);
  border: 1px solid transparent;
}

.pill.primary {
  color: var(--secondary-color);
  background-color: var(--primary-color);
}

.pill.secondary {
  color: var(--primary-color);
  border-color: var(--primary-color);
  background-color: var(--secondary-color);
}
</style>
