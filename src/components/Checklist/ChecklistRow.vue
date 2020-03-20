<template>
  <div class="checklist-item">
    <vvl-checkmark :checked="checked" class="checklist--checkmark"></vvl-checkmark>
    <span class="checklist-item--text" :class="{ 'checklist-item--text-complete': checked }">
      <slot></slot>
    </span>
  </div>
</template>

<script>
const NAME = 'vvl-checklist-row'

import VvlCheckmark from '@/components/Checklist/Checkmark.vue'

export default {
  name: NAME,
  components: {
    VvlCheckmark
  },
  props: {
    checked: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
@import '../../css/_colors.css';
@import '../../css/_variables.css';

.checklist-item {
  cursor: pointer;
}

.checklist-item--text {
  vertical-align: middle;
  color: var(--primary-color);
  transition: color var(--color-transition);
}

.checklist-item--text-complete {
  color: var(--shade-color-2);
}

.checklist--checkmark {
  stroke: var(--primary-color);
  margin-right: var(--icon-spacing);
  vertical-align: middle;
}
</style>
