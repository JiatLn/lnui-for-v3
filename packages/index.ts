

import { App, Component, ComputedOptions, MethodOptions } from 'vue'
import Switch from './Switch/src/index.vue'


const components: { [index: string]: Component<any, any, any, ComputedOptions, MethodOptions> } = {
  [Switch.name]: Switch,
};



const install = (app: App): void => {
  for (const key in components) {
    app.component(key, components[key]);
  }
};

export default {
  install,
};
