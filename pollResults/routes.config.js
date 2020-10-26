const PollsController = require('./controllers/polls.controller');


exports.routesConfig = function (app) {
    app.post('/polls', [
        PollsController.insert
    ]);
    app.get('/polls', [
        PollsController.list
    ]);
    app.get('/polls/:pollId', [
        PollsController.getById
    ]);

};