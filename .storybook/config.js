import { configure, addDecorator } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
