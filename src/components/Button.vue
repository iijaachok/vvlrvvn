<template>
  <button class="btn" :class="`${variant} ${size} ${hover ? 'hover' : ''}`" :disabled="disabled">
    <span><slot>Button</slot></span>
  </button>
</template>

<script>
const NAME = 'vvl-button'

export default {
  name: NAME,
  props: {
    variant: {
      type: String,
      default: 'primary',
      required: false,
      validator: value => ['primary', 'secondary']
    },
    hover: {
      type: Boolean,
      default: false,
      required: false
    },
    size: {
      type: String,
      default: 'regular',
      required: false,
      validator: value => ['regular', 'small'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
@import '../css/_colors.css';
@import '../css/_typography.css';
@import '../css/_variables.css';
@import '../css/_shadows.css';
@import '../css/_animations.css';

.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  padding: var(--button-padding-vertical) var(--button-padding-horizontal);
  border-radius: var(--border-radius-small);
  transition: background var(--background-transition), color var(--color-transition),
    box-shadow var(--shadow-transition), border var(--color-transition), transform var(--transform-transition);
}

.btn:disabled {
  cursor: not-allowed;
  color: var(--shade-color-2);
  border: 1px solid var(--shade-color-1);
  background-color: var(--shade-color-1);
}

/* color variants */

.btn.primary:not(:disabled) {
  color: var(--secondary-color);
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.btn.primary:hover:not(:disabled) {
  color: var(--primary-color);
  background-color: var(--secondary-color);
}

.btn.primary:active:not(:disabled) {
  background-color: var(--shade-color-1);
}

.btn.secondary:not(:disabled) {
  color: var(--shade-color-2);
  background-color: var(--secondary-color);
  border: 1px solid var(--shade-color-1);
}

.btn.secondary:hover:not(:disabled) {
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.btn.secondary:active:not(:disabled) {
  background-color: var(--shade-color-1);
}

/* hover */

.btn.hover {
  box-shadow: var(--shadow-small);
  border: 1px solid transparent;
}

.btn.hover:hover:not(:disabled) {
  transform: var(--translate-raise-small);
  box-shadow: var(--shadow-medium);
  border: 1px solid transparent;
}

.btn.hover.primary:hover:not(:disabled) {
  color: var(--secondary-color);
  background-color: var(--primary-color);
}

.btn.hover.primary:active:not(:disabled) {
  color: var(--primary-color);
  background-color: var(--shade-color-1);
  border-color: var(--primary-color);
}

.btn.hover.secondary:hover:not(:disabled) {
  color: var(--primary-color);
  background-color: var(--secondary-color);
}

.btn.hover.secondary:active:not(:disabled) {
  color: var(--primary-color);
  background-color: var(--shade-color-1);
  border-color: var(--primary-color);
}

/* sizes */

.btn.small {
  font-size: var(--font-size-small);
  padding: var(--button-padding-vertical-small) var(--button-padding-horizontal-small);
}
</style>
