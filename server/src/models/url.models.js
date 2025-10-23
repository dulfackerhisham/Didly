import mongoose from "mongoose";

const url = new mongoose.Schema({
    longUrl: {
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        required: true,
        index: true,
    },
    clicks: {
        type: Number,
        required: true,
        default: 0,
    },
})

export const urlSchema = mongoose.model("urlSchema", url);
