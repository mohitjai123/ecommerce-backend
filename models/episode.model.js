const mongoose = require("mongoose")

const EpisodeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    video_url: { type: String, required: true },
    release_date:{type:String, default:""},
    horizontal_thumbnail_url: { type: String, required: true },
    duration: { type: Number, required: true },
    season_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Season'
    },
    active: { type: Boolean, default: true },
    rating:{type:Number, default:0.0, max:10},
    reviews:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reviews'
      }
    ],
    uploaded_by: mongoose.Schema.Types.ObjectId
  }, {timestamps:true});

module.exports = mongoose.model('Episode', EpisodeSchema);