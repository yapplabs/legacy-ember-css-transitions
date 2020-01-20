// BEGIN-SNIPPET demo-component.js
import Component from '@ember/component';
import TransitionMixin from 'legacy-ember-css-transitions/mixins/transition-mixin';

export default Component.extend(TransitionMixin, {
  transitionClass: 'example'
});
// END-SNIPPET
