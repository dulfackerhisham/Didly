import { findShortUrl } from "../dao/url.dao.js";
import { createShortUrlServiceWithoutUser } from "../services/url.services.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl = wrapAsync(async (req, res, next) => {
    const { url } = req.body;
    const shortUrl = await createShortUrlServiceWithoutUser(url);
    res.send({ success: true, message: "Url shortened successfully", newShortUrl: `${process.env.APP_URL + shortUrl}` } );
});

export const redirectUrl = wrapAsync(async (req, res) => {
    const { id } = req.params;
    const findUrl = await findShortUrl(id)
    res.redirect(findUrl.longUrl)

});