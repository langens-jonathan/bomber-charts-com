import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('simple-bar-chart-configurator', 'Integration | Component | simple bar chart configurator', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{simple-bar-chart-configurator}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#simple-bar-chart-configurator}}
      template block text
    {{/simple-bar-chart-configurator}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
