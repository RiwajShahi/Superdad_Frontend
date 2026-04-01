import Faqs from "@/components/faqs/Faqs";
import CategoryMenu from "@/components/home/CategoryMenu";
import CategorySlider from "@/components/home/CategorySlider";
import HeroSlider from "@/components/home/HeroSlider";
import Reviews from "@/components/review/Reviews";


const Home = () => {
  return (
    <>
      <CategoryMenu/>
      <CategorySlider/>
      <HeroSlider/>
      <Reviews/>
      <Faqs/>



    </>
  );
};

export default Home;
