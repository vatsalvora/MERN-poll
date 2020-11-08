const PollResultsController = require('./controllers/pollResults.controller');


exports.routesConfig = function (app) {
    app.post('/pollResults', [
        PollResultsController.insert
    ]);
    app.get('/pollResults', [
        PollResultsController.list
    ]);
    app.get('/pollResults/:pollResultId', [
        PollResultsController.getById
    ]);
};