import React from "react";
import { useState } from "react";
import { FormField, Loader } from "../components";
import { Navigate, useNavigate } from "react-router-dom";
import { getRandomPrompt } from "../utils";
import { preview } from "../assets";

const Create = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = () => {};

  const handleSubmit = () => {};

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <>
      <section>
        <div className="">
          <h1 className="font-bold mt-4 ml-4 text-xl">Create</h1>
          <p className="ml-4 text-slate-400 text-xs mt-1">
            Type your prompt to create Dall-E AI generated images
          </p>
        </div>

        <form className="mt-8 max-w-3xl ml-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <FormField
              labelName="Your name"
              type="text"
              name="name"
              placeholder="John Doe"
              value={form.name}
              handleChange={handleChange}
            />
            <FormField
              labelName="Prompt"
              type="text"
              name="prompt"
              placeholder="A plush toy robot"
              value={form.prompt}
              handleChange={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
            />

            <div
              className="relative bg-slate-50 border border-gray-300
             text-slate-900 text-sm rounded-lg focus:ring-blue-500
              focus:border-blue-500 w-64 p-3 h-64 flex justify-center
               items-center"
            >
              {form.photo ? (
                <img
                  src={form.photo}
                  alt={form.photo}
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={preview}
                  alt={preview}
                  className="w-9/12 h-9/12 object-contain opacity-35"
                />
              )}

              {generatingImg && (
                <div
                  className="absolute inset-0 z-0 flex justify-center 
                items-center bg-[rgba(0,0,0,0.5)] rounded-lg"
                >
                  <Loader />
                </div>
              )}
            </div>
          </div>

          <div className="mt-5 flex gap-5">
            <button
              type="button"
              onClick={generateImage}
              className="text-white bg-green-500 font-medium rounded-md text-sm w-72  px-5 py-2.5 text-center mr-4"
            >
              {generatingImg ? "Generating..." : "Generate"}
            </button>
          </div>
          <div className="mt-4">
            <p className="mt-2 text-slate-400 text-[14px]">
              Share with the community once you have generated an image!
            </p>
            <button
              className="mt-3 text-white bg-[#6469ff] font-medium
              rounded-md text-sm w-72 px-5 py-2.5 text-center mr-4"
            >
              {loading ? "Sharing..." : "Share with the community"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Create;
