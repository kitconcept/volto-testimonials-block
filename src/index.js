import Edit from './components/Edit';
import View from './components/View';
import sliderSVG from '@plone/volto/icons/slider.svg';
import { TestimonialsBlockDataAdapter } from './components/adapter';

import './theme/main.less';

const applyConfig = (config) => {
  config.blocks.blocksConfig.slider = {
    id: 'testimonials',
    title: 'Testimonials',
    group: 'text',
    icon: sliderSVG,
    view: View,
    edit: Edit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    dataAdapter: TestimonialsBlockDataAdapter,
  };
  return config;
};

export default applyConfig;
