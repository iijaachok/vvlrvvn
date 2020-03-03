<template>
  <article>
    <vvl-checklist-row
      class="checklist--row"
      v-for="(item, index) in items"
      :key="index"
      @click.native="check(index)"
      :checked="isChecked(index)"
      >{{ item }}</vvl-checklist-row
    >
  </article>
</template>

<script>
const NAME = 'vvl-checklist'

import VvlChecklistRow from '@/components/Checklist/ChecklistRow.vue'

export default {
  name: NAME,
  components: {
    VvlChecklistRow
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    checked: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    check(index) {
      const checkedItems = this.isChecked(index)
        ? this.checked.filter(item => item !== index)
        : [...this.checked, index]

      this.$emit('check', checkedItems)
    },
    isChecked(index) {
      return this.checked.includes(index)
    }
  }
}
</script>

<style scoped>
.checklist--row {
  margin-top: var(--list-margin-vertical);
}

.checklist--row:first-child {
  margin-top: 0;
}
</style>
