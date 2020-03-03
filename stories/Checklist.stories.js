import { storiesOf } from '@storybook/vue'
import { array } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import VvlChecklist from '@/components/Checklist/Checklist.vue'

storiesOf('Components / Checklist', module).add('Checklist playground', () => {
  return {
    components: { VvlChecklist },
    template: `
    <div class="mt2 ml2 mw6">
      <vvl-checklist :items="items" :checked="checked" @check="check"/>
    </div>
    `,
    props: {
      items: {
        default: array('Items', ['Buy some milk', 'Fix the pipe', 'Capture the flag'])
      }
    },
    data() {
      return {
        checked: [2]
      }
    },
    methods: {
      check(e) {
        this.checked = e
        action('Checked items')(e)
      }
    }
  }
})
