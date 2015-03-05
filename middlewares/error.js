exports.notFound = function(req, res, next) {
	res.status(404);
	res.render('not-found');
};
exports.serverError = function(error, req, res, next) {
	console.log(error);
	res.status(500);
	res.render('server-error', {error: error});
};