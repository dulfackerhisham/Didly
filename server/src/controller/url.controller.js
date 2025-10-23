import { findShortUrl } from "../dao/url.dao.js";
import { createShortUrlServiceWithoutUser } from "../services/url.services.js";

export const createShortUrl = async (req, res) => {
  const { url } = req.body;
  const shortUrl = await createShortUrlServiceWithoutUser(url);
  res.send({ success: true, message: `Shortened URL => ${process.env.APP_URL + shortUrl}` });
};

export const redirectUrl = async (req, res) => {
    const { id } = req.params;
    const findUrl = await findShortUrl(id)
    res.redirect(findUrl.longUrl)
}