import { saveurl } from "../dao/url.dao.js";
import { generateNanoId } from "../utils/helper.js";

export const createShortUrlServiceWithoutUser = async (url) => {
    const newShortUrl = generateNanoId(7);
    if(!newShortUrl) throw new Error("Short URL not generated");
    await saveurl(url, newShortUrl);
    return newShortUrl;


};

export const createShortUrlServiceWithUser = async (url, userId) => {
  const newShortUrl = generateNanoId(7);
  await saveurl(url, newShortUrl, userId);
  return newShortUrl;
};
