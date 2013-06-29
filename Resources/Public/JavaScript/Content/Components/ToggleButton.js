/**
 * A button which has a "pressed" state
 */
define(
	[
		'emberjs',
		'./Button'
	],
	function (Ember, Button) {
		if (window._requirejsLoadingTrace) window._requirejsLoadingTrace.push('neos/content/ui/elements/toggle-button');

		return Button.extend({
			classNameBindings: ['pressed'],
			pressed: false,
			toggle: function() {
				this.set('pressed', !this.get('pressed'));
			},
			mouseUp: function(event) {
				if (this.get('isActive')) {

					var action = this.get('action'),
						target = this.get('target');

					this.toggle();
					this.triggerAction({actionContext: this.get('pressed')});
					this.set('isActive', false);
				}
			}
		});
	}
);