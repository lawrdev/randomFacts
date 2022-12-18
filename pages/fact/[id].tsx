import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../firebase.config";
import { GetStaticProps } from "next";
import { DataType } from "../index";
import SingleFactPage from "../../components/SingleFactPage/SingleFactPage";
import HeadLayout from "../../components/Head/HeadLayout";

interface DataIdType {
  id: string;
}

interface ItemPageProps {
  success: boolean;
  fact?: DataType;
}

export const getStaticPaths = async () => {
  let arr: DataIdType[] = [];
  try {
    const q = query(collection(db, "facts"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let dets = {
        id: doc.id,
      };
      arr.push(dets);
    });

    const pageId = arr.map((item) => {
      return {
        params: { id: item.id.toString() },
      };
    });

    return {
      paths: pageId,
      fallback: false,
    };
  } catch (error) {
    console.warn("error is", error);
  }
};

// func will be run for each param passed above
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id?.toString()!;

  const docRef = doc(db, "facts", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    let item: DataType = {
      id: docSnap.id,
      title: docSnap.data().title,
      image: docSnap.data().image,
      info: docSnap.data().info,
      source: docSnap.data().source,
    };

    return {
      props: { fact: item, success: true },
    };
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    return {
      props: { success: false },
    };
  }
};

const FactPage = ({ fact, success }: ItemPageProps) => {
  return (
    <>
      <HeadLayout page="Fact" />
      <SingleFactPage fact={fact} success={success} />
    </>
  );
};

export default FactPage;
