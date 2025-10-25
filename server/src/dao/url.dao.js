import { urlSchema } from "../models/url.models.js";
import { ConflictError } from "../utils/errorHandler.js";

export const saveurl = async (url, shortUrl, userId) => {
  try {
    const newUrl = new urlSchema({
      longUrl: url,
      shortUrl: shortUrl,
    });
    if (userId) {
      newUrl.user_id = userId;
    }
    await newUrl.save();
  } catch (err) {
    if(err.code === 11000) {
      throw new ConflictError(err);
    }
    throw new Error(err);
  }

};

export const findShortUrl = async (shortUrl) => {
    const filter = shortUrl
    return await urlSchema.findOneAndUpdate({ shortUrl:filter }, { $inc:{ clicks:1 } })
}
