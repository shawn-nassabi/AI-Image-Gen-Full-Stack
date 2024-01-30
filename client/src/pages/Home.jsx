import React from "react";
import { useState, useEffect } from "react";
import { Loader, Card, FormField } from "../components";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("ABC");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      try {
        const res = await fetch("http://localhost:8080/api/v1/post", {
          method: "GET",
          headers: {
            "Content-Type": "applications/json",
          },
        });

        if (res.ok) {
          const result = await res.json();
          setAllPosts(result.data.reverse());
        }
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

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

      <div className="mt-4 ml-4">
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
            <div className="grid sm:grid-cols-3 lg:grid-cols-4 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards data={[]} title="No search results found" />
              ) : (
                <RenderCards data={allPosts} title="No posts found" />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
