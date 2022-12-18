import { useState, useEffect } from "react";
import HomeLayout from "../components/Home/HomeLayout";
import HeadLayout from "../components/Head/HeadLayout";
import { collection, query, limit, orderBy, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";

export interface DataType {
  id: string;
  title: string;
  image: string;
  info: string;
  source: string;
}
interface HomeProps {
  success: boolean;
  data?: DataType[];
}

// Fetches 5 facts
export const getStaticProps = async () => {
  let arr: DataType[] = [];
  try {
    const q = query(
      collection(db, "facts"),
      orderBy("timestamp", "asc"),
      limit(5)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let dets = {
        id: doc.id,
        title: doc.data().title,
        image: doc.data().image,
        info: doc.data().info,
        source: doc.data().source,
      };

      arr.push(dets);
    });

    return {
      props: { data: arr, success: true },
    };
  } catch (error) {
    console.warn("error is", error);
    return {
      props: { success: false },
    };
  }
};

export default function Home({ data, success }: HomeProps) {
  // issue, 'lastVariable' cannot be serializable
  const [lastV, setLastV] = useState<any>();
  useEffect(() => {
    const handleLastV = async () => {
      try {
        const q = query(
          collection(db, "facts"),
          orderBy("timestamp", "asc"),
          limit(5)
        );

        const querySnapshot = await getDocs(q);

        const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        setLastV(lastVisible);
      } catch (error) {
        console.error("error is", error);
      }
    };

    handleLastV();
  }, []);

  return (
    <>
      <HeadLayout page="Home" />
      <HomeLayout data={data} success={success} lastVisible={lastV} />
    </>
  );
}
