const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    link: { type: String, required: true },
    snippet: { type: String },
    saved: { type: Boolean, default: false },
    date: { type: Date, default: Date.now }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;