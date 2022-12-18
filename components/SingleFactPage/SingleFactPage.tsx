import React, { useState } from "react";
import Image from "next/image";
import { DataType } from "../../pages/index";
import BackButton from "../Shared/BackButton";
import { Button, Snackbar, IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";

interface PageProps {
  success: boolean;
  fact?: DataType;
}

function SingleFactPage({ success, fact }: PageProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
  };
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setCopied(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <BackButton />

      <main>
        <section className="mt-6">
          <h2 className="text-primary font-bold text-lg text-center uppercase mb-4">
            {fact?.title}
          </h2>
          <div className="mb-5 w-fit mx-auto rounded-lg overflow-hidden">
            <Image
              src={fact?.image!}
              alt="fun fact"
              width={400}
              height={1000}
            />
          </div>

          <p className="mb-2 text-gray-500 text-center">{fact?.info}</p>

          <div className="mb-9 w-fit ml-auto bg-secondary px-4 py-1 cursor-pointer">
            <a
              href={fact?.source}
              target="_blank"
              className="text-gray-900 text-cursive underline"
              rel="noreferrer"
            >
              View source
            </a>
          </div>

          <div className="w-fit mx-auto">
            <button
              onClick={handleCopy}
              className="bg-primary text-lg font-bold uppercase rounded-xl text-body px-9 py-3 shadow-lg"
            >
              Share{" "}
              <span>
                <ShareIcon />
              </span>
            </button>
          </div>

          {copied ? (
            <Snackbar
              open={copied}
              autoHideDuration={6000}
              onClose={handleClose}
              message="Link Copied"
              action={action}
            />
          ) : null}
        </section>
      </main>
    </>
  );
}

export default SingleFactPage;
