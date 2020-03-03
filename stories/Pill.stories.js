import { storiesOf } from '@storybook/vue'
import { text, select } from '@storybook/addon-knobs'
import VvlPill from '@/components/Pill.vue'

storiesOf('Components / Pill', module).add('Pill playground', () => {
  return {
    components: { VvlPill },
    template: `
    <div class="tc mt2">
      <span>Messages
        <vvl-pill :variant="variant" class="mb3">{{ text }}</vvl-pill>
      </span>
    </div>
    `,
    props: {
      text: {
        default: text('Text', '1')
      },
      variant: {
        default: select('Variant', ['primary', 'secondary'], 'primary')
      }
    }
  }
})
