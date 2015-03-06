
var mongoose = require('mongoose');
var timestamps = require ("mongoose-times");

var StatusupdateSchema = new mongoose.Schema({
    author: { type: String, default: 'Paul Imisi' },
    content_type: { type: String, default: 'statusupdate' },
    view_count: { type: String, default: '21' },
    like_count: { type: String, default: '21' },
    comment_count:{ type: String, default: '21' },
    location:{ type: String, default: 'Randburg' },
    body:String,
    // updated_at: { type: Date, default: Date.now },
});

StatusupdateSchema.plugin(timestamps, { created: "created_at", lastUpdated: "updated_at" });
mongoose.model("Statusupdate", StatusupdateSchema);


module.exports = mongoose.model('statusupdate',StatusupdateSchema);


