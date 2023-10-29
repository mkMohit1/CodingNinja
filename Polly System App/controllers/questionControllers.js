const Question = require('../models/question');
const Option = require('../models/option');

module.exports.create = async function (req, res) {
    console.log(req.url, "mk url");
    console.log(req.body, "mk body");
    if (req.body.title != '') {
        let question = await Question.create(req.body);
        return res.send(question);
    } else {
        return res.send("Please send text to the question title");
    }

};

module.exports.update = async function (req, res) {
    let question = await Question.findById(req.params.id);
    if (question) {
        question.title = req.body.title;
        await Question.findByIdAndUpdate(req.params.id, question, { new: true });
        return res.send(question);
    } else {
        return res.send("id is not found");
    }
};

module.exports.delete = async function (req, res) {
    let question = await Question.findById(req.params.id).clone();
    if (question) {
        await Question.findByIdAndDelete(question.id);
        await Option.deleteMany({ question: req.params.id });
        return res.send("ques deleted");
    } else {
        return res.send('question does not exists');
    }
};
module.exports.showDetails = async function (req, res) {
    console.log(req.params.id);
    const question = await Question.findById(req.params.id).populate('options');
    if (question) {
        return res.send(question);
    } else {
        return res.send("Their is no question found!");
    }
};