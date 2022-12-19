import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { Skeleton, Divider, Box } from "@mui/material";
import dayjs from "dayjs";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../../firebase.config";

interface DataType {
  id: string;
  title: string;
  image: string;
  info: string;
  source: string;
}
interface HomeLayoutProps {
  success: boolean;
  data?: DataType[];
  lastVisible?: any;
}

function HomeLayout({ data, success, lastVisible }: HomeLayoutProps) {
  const [factsArray, setFactsArray] = useState<DataType[]>(data!);
  const [previewImage, setPreviewImage] = useState("");
  const [lastFetchedFact, setLastFetchedFact] = useState<any>(lastVisible);
  const [noMoreFacts, setNoMoreFacts] = useState(false);
  const [randomNu] = useState(Math.floor(Math.random() * (4 - 0)) + 0);
  const router = useRouter();

  const handlePreview = (img: string) => {
    setPreviewImage(img);
  };
  const handleRemovePreview = () => {
    setPreviewImage("");
  };

  const onFetchMoreFacts = async () => {
    try {
      const factsRef = collection(db, "facts");

      // Create a query
      const q = query(
        factsRef,
        orderBy("timestamp", "asc"),
        startAfter(lastFetchedFact),
        limit(5)
      );

      // Execute query
      const querySnap = await getDocs(q);
      setNoMoreFacts(querySnap.empty);

      const newLastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchedFact(newLastVisible);

      const factsArr: DataType[] = [];

      querySnap.forEach((doc) => {
        return factsArr.push({
          id: doc.id,
          title: doc.data().title,
          image: doc.data().image,
          info: doc.data().info,
          source: doc.data().source,
        });
      });

      setFactsArray((prevState) => [...prevState, ...factsArr]);
    } catch (error) {
      console.error("Could not fetch facts", error);
    }
  };

  useEffect(() => {
    if (lastVisible) {
      setLastFetchedFact(lastVisible);
    }
    console.log("RENDERED NOW", dayjs().format("h:mm:ss"));
  }, [lastVisible]);

  if (!data) {
    return (
      <Skeleton
        variant="rounded"
        height={300}
        width="100%"
        sx={{ margin: "20px 8px" }}
      />
    );
  }

  return (
    <div className={styles.gridcontainer}>
      <main>
        <section className="mt-10 mb-20">
          <h2 className="text-center text-2xl font-extrabold text-gray-800 mb-1 ml-auto">
            DID YOU KNOW?
          </h2>
          <div className="">
            <Divider />

            <p className="text-end text0gray-500 text-xs">
              {dayjs().format("D MMMM")}
            </p>
          </div>

          <div
            className={`${styles.gridContainer} text-center mt-4 mx-auto md:flex md:gap-5`}
          >
            <div className="ffImage w-full">
              <div className="p-1 bg-white w-fit rounded-3xl mx-auto mb-5 shadow-md">
                <Image
                  className="rounded-3xl"
                  src={factsArray ? factsArray[randomNu]?.image : ""}
                  alt="fun fact"
                  width={410}
                  height={260}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center center",
                    height: "180px",
                  }}
                />
              </div>
            </div>

            <div className="ffInfo text-center md:text-start w-full md:max-w-lg">
              <h3 className="font-bold text-xl text-primary mb-3">
                {factsArray[randomNu]?.title}
              </h3>
              <p className="text-gray-500">{factsArray[randomNu]?.info}</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-center text-2xl font-extrabold text-gray-800 mb-1 ml-auto">
            View more facts
          </h2>
          <Divider />

          <div className="mt-10 mb-9" onMouseLeave={handleRemovePreview}>
            {factsArray?.map((item, index) => (
              <Link key={index} href={`/fact/${item.id}`} className="block">
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-mirror="true"
                  data-aos-easing="ease-in-out"
                  data-aos-once="false"
                  className={`${styles.factItem} max-w-2xl my-3 py-3 px-6 active:scale-95 select-none`}
                  onMouseOver={() => handlePreview(item.image)}
                >
                  <p className="flex-grow font-bold text-primary ">
                    <span className="text-2xl mr-4 italic">{index + 1}.</span>
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
            {previewImage ? (
              <div
                data-aos="zoom-in-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-delay="50"
                data-aos-duration="300"
                data-aos-mirror="true"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
                className="hidden md:block fixed top-1/2 right-0 rounded-xl overflow-hidden shadow-xl bg-white"
                style={{ zIndex: 80, width: "320px", height: "180px" }}
              >
                <Image
                  src={previewImage}
                  alt="fun fact"
                  width={500}
                  height={500}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center center",
                    height: "180px",
                  }}
                />
              </div>
            ) : null}
          </div>

          <div className="max-w-sm w-full mx-auto">
            {noMoreFacts ? (
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
                className="font-semibold text-sm text-center"
              >
                No more facts....
              </p>
            ) : (
              <button
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
                className="w-full py-2 rounded-lg bg-primary font-bold text-lg text-white"
                onClick={onFetchMoreFacts}
              >
                Load more
              </button>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomeLayout;
