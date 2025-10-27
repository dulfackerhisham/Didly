import React from "react";
import { useState } from "react";
import axios from "axios";

const UrlForm = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [textCopied, setTextCopied] = useState(false);

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) {
      alert("Url is required");
    }

    axios
      .post("http://localhost:4001/api/url", { url })
      .then((response) => {
        if (response.data.success) {
          console.log(response.data);
          setShortUrl(response.data.newShortUrl);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCopyText = async () => {
    await navigator.clipboard.writeText(shortUrl);
    setTextCopied(true);
    setTimeout(() => setTextCopied(false), 2000);
  };

  return (
    <div className=" p-5 flex flex-col items-center">
      <h1 className="text-3xl ">Try short urls for your easy workday</h1>
      <div className="bg-amber-700 mt-10 shadow-2xl">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col p-20 ">
            <label className="mb-2 text-white text-xs" htmlFor="">
              Enter your url
            </label>
            <input
              className="border-2 px-4 py-0.5 border-blue-900 text-white"
              type="text"
              name="url"
              value={url}
              onChange={handleChange}
              required
              placeholder="https://www.google.com"
            />
            <br />
            <button
              className="border px-4 py-1 bg-blue-900 text-white"
              type="submit"
            >
              Generate
            </button>
          </div>
        </form>
        {shortUrl && (
          <div className="flex flex-col px-20 pb-10">
            <label htmlFor="">Shortened Url:</label>
            <div>
              <input className="border p-1" type="text" value={shortUrl} />
              <button className={`border py-1 px-3 ${textCopied && "bg-green-600"}`} onClick={handleCopyText}>
                {textCopied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default UrlForm;
