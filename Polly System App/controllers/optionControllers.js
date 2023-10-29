const Option = require("../models/option");
const Question = require("../models/question");

module.exports.create = async function (req, res) {
    console.log(req.body, req.params.id);
    if (req.body.content === "") {
        return res.send("Please send some value to new option");
    }
    const newOpt = await Option.create({
        option: req.body.content,
        question: req.params.id
    });
    let optionUpdate = await Option.findByIdAndUpdate(newOpt._id, { "add_vote": `http://localhost:9000/api/v1/options/${newOpt._id}/add_vote` });
    optionUpdate.save();
    console.log(optionUpdate, "mk....");
    let question = await Question.findById(req.params.id);
    if (question) {
        question.options.push(optionUpdate);
        question.save();
        res.send(question);
    } else {
        res.send("Question does not exist");
    }
};

module.exports.delete = async function (req, res) {
    const option = await Option.findById(req.params.id);
    if (option) {
        const questionOpt = await Question.findById(option.question);
        await Option.findByIdAndDelete(req.params.id);
        let optionlist = questionOpt.options.filter((id) => id != req.params.id);
        await Question.findByIdAndUpdate(questionOpt._id, { options: optionlist });
        console.log(optionlist);
        res.send(`Option id:${option._id} has deleted from question id:${option.question}`);
    } else {
        res.send("Their is no option found by this id");
    }
};

module.exports.add_vote = async function (req, res) {
    let option = await Option.findById(req.params.id);
    if (option) {
        let opt = await Option.findByIdAndUpdate(req.params.id, { $inc: { vote: 1 } });
        if (opt) {
            await opt.save();
        }

        res.send(option);
    } else {
        res.send("option is not found");
    }
};