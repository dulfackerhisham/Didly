import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
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

export const url = mongoose.model("url", urlSchema);
