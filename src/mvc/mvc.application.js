Mvc.Application = function() {
	Object.defineProperty(this, 'model', {
		get: function() {
			return this._model;
		},
		set: function(model) {
			var self = this;

			this._model = model;
			Object.observe(this._model, function(changes) {
				self.modelUpdate(self._model, changes);
			});
		}
	});
};

Mvc.Application.prototype = {};

Mvc.Application.prototype.run = function() {
	window.addEventListener('load', function onload() {
		window.removeEventListener("load", onload, false);
		this.onBoot.call(this);
	}.bind(this));

	window.addEventListener('hashchange', function() {
		this.onRouteChange();
	}.bind(this));
};

/* start-debug-only */ 
Mvc.Application.prototype.onRouteChange = function() {
	console.warn('Virtual method "boot", has to be implemented.');
};

Mvc.Application.prototype.onBoot = function() {
	console.warn('Virtual method "boot", has to be implemented.');
};

Mvc.Application.prototype.modelUpdate = function() {
	console.warn('Virtual method "modelUpdate", has to be implemented.');
};
/* end-debug-only*/