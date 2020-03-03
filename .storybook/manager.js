import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import '@storybook/addon-knobs/register';

import { addons } from '@storybook/addons';
import vvlrvvnTheme from './vvlrvvnTheme';

addons.setConfig({
  theme: vvlrvvnTheme,
});