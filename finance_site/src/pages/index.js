import React from "react";
import Footer from "../components/common/Footer/Footer";
import { Layout } from "../components/common/Layout";
import Feature from "../components/Home/Feature/Feature";
import HeroSection from "../components/Home/Hero/Hero";
import HowItWork from "../components/Home/How/How";
import { SmallIntro } from "../components/Home/Smallintro/index";

export default () => (
  <Layout>
    <HeroSection />
    <SmallIntro />
    <HowItWork />
    <Feature />
    <Footer />
  </Layout>
);
