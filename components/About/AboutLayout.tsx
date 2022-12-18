import React from "react";
import { Divider } from "@mui/material";

function AboutLayout() {
  return (
    <>
      <main>
        <h3 className="text-primary text-3xl mt-12 mb-3 font-bold">ABOUT</h3>
        <Divider />

        <p className="text-gray-500 mt-10 text-lg">
          This project is my first{" "}
          <strong>Next(React framework) Typescript + Firebase project</strong>
        </p>
        <p className="text-gray-500 text-lg">
          This simple webapp implements Next SSG, with typescript to fetch and
          display random facts from firebase firestore and cloud storage
        </p>
        <p className="text-gray-500">
          Credit to{" "}
          <a
            href="https://bestlifeonline.com/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            BestLife
          </a>{" "}
          for facts
        </p>

        <p className="text-gray-500 mt-10 text-lg">
          Contact me on github{" "}
          <a
            href="https://github.com/lawrdev"
            target="_blank"
            rel="noreferrer"
            className="underline text-primary"
          >
            @lawrdev
          </a>
        </p>
        <p className="text-gray-500 mt-2 text-lg">Email: lawrdev@gmail.com</p>
      </main>
    </>
  );
}

export default AboutLayout;
