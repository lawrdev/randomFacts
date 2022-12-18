import React from "react";
import Image from "next/image";
import { DataType } from "../../pages/index";
import BackButton from "../Shared/BackButton";

interface PageProps {
  success: boolean;
  fact?: DataType;
}

function SingleFactPage({ success, fact }: PageProps) {
  return (
    <>
      <BackButton />

      <main>
        {/* back btn */}

        <section className="mt-12">
          <div className="border-2 border-primary p-2 w-fit mx-auto rounded-lg">
            <Image src={fact?.image!} alt="fun fact" width={400} height={200} />
          </div>

          <p className="mt-12 text-primary">{fact?.title}</p>
        </section>
      </main>
    </>
  );
}

export default SingleFactPage;
