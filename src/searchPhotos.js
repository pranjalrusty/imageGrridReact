import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";



export default function SearchPhotos() {

    const unsplash = new Unsplash({
        accessKey: "nCfCxF2zt8qZIRztELlJRH-MrCrrfIB8lpSb99zAGU4",
      });
    
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);
    console.log(query);

    const searchPhotos = async (e) => {
        e.preventDefault();
        console.log("Submitting the Form")
        unsplash.search
        .photos(query)
        .then(toJson)
        .then((json) => {
            console.log(json);
            setPics(json.results);
        });
      };

  return (
    <>
    <form className="form" onSubmit={searchPhotos}> 
        <label className="label" htmlFor="query"> 
          {" "}
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Search free high resolution images`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
    </form>

    <div className="card-list">
         {pics.map((pic) => <div className="card" key={pic.id}>
         <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="50%"
                height="50%"
              ></img>
         </div> )}      
    </div>

    </>
  );
}