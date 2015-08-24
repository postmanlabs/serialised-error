var SerialisedError = module.exports = function (err) {
	if (!(this instanceof SerialisedError)) {
		return new SerialisedError(err);
	}

	Object.keys((err instanceof Error) && err || {}).concat(['name', 'message', 'stack']).forEach(function (key) {
		this[key] = err[key];
	}, this);
};

SerialisedError.prototype.toJSON = function () {
	return JSON.stringify(this);
};
