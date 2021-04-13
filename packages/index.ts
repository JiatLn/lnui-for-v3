

import { App, Component, ComputedOptions, MethodOptions } from 'vue'

import Avatar from './Avatar/src/index.vue'
import Button from './Button/src/index.vue'
import Switch from './Switch/src/index.vue'


const components: { [index: string]: Component<any, any, any, ComputedOptions, MethodOptions> } = {
  [Avatar.name]: Avatar,
  [Button.name]: Button,
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
