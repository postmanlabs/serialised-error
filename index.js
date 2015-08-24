var SerialisedError = module.exports = function (err) {
    // If the function is called without the `new` operator, then we do it on behalf of the callee
	if (!(this instanceof SerialisedError)) {
		return new SerialisedError(err);
	}

    // Iterate on user-defined properties of error and mix in the default non ennumerable properties
	(err instanceof Error) && Object.keys(err).concat(['name', 'message', 'stack']).forEach(function (key) {
		this[key] = err[key];
	}, this);
};

// easy JSON conversion
SerialisedError.prototype.toJSON = function () {
	return JSON.stringify(this);
};
