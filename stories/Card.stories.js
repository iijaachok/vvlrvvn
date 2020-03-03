import { storiesOf } from '@storybook/vue'
import { boolean } from '@storybook/addon-knobs'
import VvlCard from '@/components/Card.vue'
import VvlButton from '@/components/Button.vue'

storiesOf('Components / Card', module).add('Card playground', () => {
  return {
    components: { VvlCard, VvlButton },
    template: `
    <div>
      <vvl-card class="mw5 mt2 tc center" :hover="hover">
        <img src='images/av_empty.svg' class="w-100">
        <div class="w-100 bt b--black-20 pa3">
          <vvl-button>△</vvl-button>
        </div>
      </vvl-card>
    </div>
    `,
    props: {
      hover: {
        default: boolean('Hover style', false)
      }
    }
  }
})
