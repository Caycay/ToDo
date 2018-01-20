import {Aurelia} from 'aurelia-framework'
import environment from './environment';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources')
    .plugin('aurelia-materialize-bridge', b => b.useButton()
      .useCheckbox()
      .useCollapsible()
      .useDropdown()
      .useInput()
      .useModal()
      .useRadio()
      .useSelect()
      );


  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
