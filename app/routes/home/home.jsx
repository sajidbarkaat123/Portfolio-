import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/Chromia.png';
import sliceTexturePlaceholder from '~/assets/Chromia.png';
import sliceTexture from '~/assets/Chromia.png';
import sprTextureLarge from '~/assets/LyveCom.png';
import sprTexturePlaceholder from '~/assets/LyveCom.png';
import sprTexture from '~/assets/LyveCom.png';
import Vivid from '~/assets/Vivid.png';
import fitmatch1 from '~/assets/fitmatch1.png'
import fitmatch2 from '~/assets/fitmatch2.png'
import WellSync from '~/assets/WellSync.png'
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Sajid Barkaat - Full Stack Developer',
    description: `Portfolio of Sajid Barkaat — a Full Stack Developer specializing in web, web3 & mobile app development, with a focus on modern technologies, scalability, and performance.`,
  });
};


export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="LyveCom"
        description="Transform your website into a dynamic video commerce experience where immersive videos lead shoppers seamlessly to one-click checkout. This innovative approach, inspired by TikTok trends, integrates directly with your Shopify store to create a frictionless shopping journey. Elevate user engagement and boost conversion rates by turning passive viewers into active buyers. Embrace the future of online retail with a captivating, video-first solution."
        buttonText="View Website"
        buttonLink="https://www.lyvecom.com/"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Fitmatch"
        description="Fit:match is an innovative platform that uses advanced 3D LiDAR scanning to provide accurate shape matching for a personalized shopping experience. It recommends products based on individual body shapes, enhancing customer satisfaction and minimizing returns. The project involved optimizing the platform's user interface and ensuring seamless functionality, transforming how consumers find the perfect fit."
        buttonText="View website"
        buttonLink="https://www.fitmatch.ai/"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${fitmatch1} 375w, ${fitmatch1} 750w`,
              placeholder: fitmatch1,
            },
            {
              srcSet: `${fitmatch2} 375w, ${fitmatch2} 750w`,
              placeholder: fitmatch2,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Chromiax"
        description="The Blockchain Explorer is a powerful tool for searching, verifying, and analyzing blockchain data in real time. It provides instant access to transactions, block confirmations, wallet addresses, and smart contracts, ensuring complete transparency. With an intuitive interface and advanced search features, it empowers users to monitor and validate blockchain activity with ease."
        buttonText="View Website"
        buttonLink="https://chromia.com/"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={4}
        title="WellSync"
        description="WellSync empowers healthcare innovators, including pharmacies, labs, and employers, to deliver scalable, white-labeled virtual care solutions. The platform enables seamless, personalized care experiences for consumers, enhancing access and improving outcomes across diverse healthcare ecosystems. By streamlining virtual care delivery, WellSync drives innovation in patient engagement and operational efficiency."
        buttonText="View Website"
        buttonLink="https://wellsync.com/"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${WellSync} 800w, ${WellSync} 1920w`,
              placeholder: Vivid,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
