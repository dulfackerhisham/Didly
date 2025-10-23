import { urlSchema } from "../models/url.models.js";

export const saveurl = async (url, shortUrl, userId) => {
  const newUrl = new urlSchema({
    longUrl: url,
    shortUrl: shortUrl,
  });
  if (userId) {
    newUrl.user_id = userId;
  }

  await newUrl.save();
};

export const findShortUrl = async (shortUrl) => {
    return await urlSchema.findOne({ shortUrl:shortUrl })
}
