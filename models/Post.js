const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  title: String,
  body: String,
  author: { type: Schema.Types.ObjectId, ref: "Author" },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
});

const TagSchema = new Schema({
  name: String,
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

module.exports = model("Post", PostSchema);
