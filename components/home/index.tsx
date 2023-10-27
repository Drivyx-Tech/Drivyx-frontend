import Benefits from './Benefits';
import FeatureIntro from './FeatureIntro';
import Projects from './Projects';
import Hero from './Hero';
import LatestBlogs from './LatestBlogs';
import Revolutionary from './Revolutionary';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <FeatureIntro />
      <Benefits />
      <Revolutionary />
      <Projects />
      <LatestBlogs />
      <Testimonials />
    </>
  );
};

export default Home;
