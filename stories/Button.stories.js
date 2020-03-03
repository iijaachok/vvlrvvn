import { storiesOf } from '@storybook/vue'
import { text, boolean, select } from '@storybook/addon-knobs'
import VvlButton from '@/components/Button'

storiesOf('Components / Button', module).add('Button playground', () => {
  return {
    components: { VvlButton },
    template: `
    <div>
      <vvl-button 
        :variant="variant" 
        :hover="hover"
        :size="size"
        :disabled="disabled"
        style="margin: 1rem">
        {{ text }}
      </vvl-button>
    </div>
    `,
    props: {
      text: {
        default: text('Text', 'Button')
      },
      variant: {
        default: select('Variant', ['primary', 'secondary'], 'primary')
      },
      size: {
        default: select('Size', ['regular', 'small'], 'regular')
      },
      hover: {
        default: boolean('Hover style', false)
      },
      disabled: {
        default: boolean('Disabled', false)
      }
    }
  }
})
