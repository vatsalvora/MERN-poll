const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const pollSchema = new Schema({
   prompt: String,
   options: [String]
});

pollSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
pollSchema.set('toJSON', {
    virtuals: true
});

const Poll = mongoose.model('Polls', pollSchema);

exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        Poll.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, polls) {
                if (err) {
                    reject(err);
                } else {
                    resolve(polls);
                }
            })
    });
};


pollSchema.findById = function (cb) {
    return this.model('Polls').find({id: this.id}, cb);
};

exports.findById = (id) => {
    return Poll.findById(id)
        .then((result) => {
            result = result.toJSON();
            delete result._id;
            delete result.__v;
            return result;
        });
};

exports.createPoll = (pollData) => {
    const poll = new Poll(pollData);
    return poll.save();
};