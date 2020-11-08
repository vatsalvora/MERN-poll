const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const pollResultSchema = new Schema({
   pollId: String,
   response: String
}, { timestamps: true });

pollResultSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
pollResultSchema.set('toJSON', {
    virtuals: true
});

pollResultSchema.findByPollId = function (cb) {
    return this.model('PollResults').find({pollId: this.pollId}, cb);
};

const PollResult = mongoose.model('PollResults', pollResultSchema);

exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        PollResult.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, pollResults) {
                if (err) {
                    reject(err);
                } else {
                    resolve(pollResults);
                }
            })
    });
};

exports.findByPollId = (pollId) => {
    return PollResult.findByPollId(pollId)
        .exec(function (err, pollResults) {
            if (err) {
                reject(err);
            } else {
                resolve(pollResults);
            }
        })
};


exports.createPollResult = (pollResultData) => {
    const pollResult = new PollResult(pollResultData);
    return pollResult.save();
};