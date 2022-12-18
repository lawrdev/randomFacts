import AboutLayout from "../components/About/AboutLayout";
import Head from "next/head";
import HeadLayout from "../components/Head/HeadLayout";

const About = () => {
  return (
    <>
      <HeadLayout page="About" />
      <AboutLayout />
    </>
  );
};

export default About;
