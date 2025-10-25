import React from "react";
import { useState } from "react";

const UrlForm = () => {
    const [url, setUrl] = useState("");

    const handleChange = (e) => {
        setUrl(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted url=>", url);
    }

    return(
        <div>
            <h1>Try short urls for your easy workday</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Url</label>
                <input 
                type="text"
                name="url"
                value={url}
                onChange={handleChange}
                 />
                 <br />
                 <button type="submit">Generate</button>
            </form>
        </div>
    )
}

export default UrlForm;