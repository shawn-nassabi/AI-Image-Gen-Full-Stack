import React from "react";
import { useState, useEffect } from "react";
import { Loader, Card, FormField } from "../components";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("ABC");

  return (
    <>
      <div className="">
        <h1 className="font-bold mt-4 ml-4 text-xl">
          Community Generated Images
        </h1>
        <p className="ml-4 text-slate-400 text-xs mt-1">
          Images generated using OpenAI's Dall-E API
        </p>
      </div>

      <div className="mt-4 ml-4">
        <FormField />
      </div>

      <div className="mt-4 flex justify-center">
        {loading ? (
          <Loader />
        ) : (
          <>
            {searchText && (
              <p className="font-bold text-slate-400">
                Showing results for{" "}
                <span className="text-green-500">{searchText}</span>:
              </p>
            )}
            <div className="grid sm:grid-cols-3 lg:grid-cols-4 xs:grid-cols-2 grid-cols-1 gap-3"></div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
