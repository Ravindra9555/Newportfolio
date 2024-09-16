import { Helmet } from 'react-helmet';

const PortfolioHelmet = () => {
  return (
    <Helmet>
      {/* Title of the website */}
      <title>Ravindra Kumar | Portfolio</title>

      {/* Meta description */}
      <meta name="description" content="Ravindra Kumar - Computer Science graduate with experience in Front-End Development,  MERN Stack Developer, ReactJS, and Web Development. Skilled in problem-solving, team collaboration, and continuous learning." />

      {/* Keywords for SEO */}
      <meta name="keywords" content="Ravindra Kumar, Front-End Developer, ReactJS, Web Development, MERN Stack Developer,  Portfolio, JavaScript, HTML, CSS, Git, GitHub, C++, Problem Solving" />

      {/* Contact information */}
      <meta name="author" content="Ravindra Kumar" />
      <meta name="contact" content="+91-9648316865, ravindraietbu@gmail.com" />

      {/* Open Graph (for social media sharing) */}
      <meta property="og:title" content="Ravindra Kumar | Portfolio" />
      <meta property="og:description" content="Explore the portfolio of Ravindra Kumar, MERN Stack Developer,  a skilled Front-End Developer with experience in ReactJS and Web Development." />
      <meta property="og:url" content="https://ravindra.vercel.app" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://media.licdn.com/dms/image/v2/D5603AQFHqEkaOQXl8Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1716035051702?e=1732147200&v=beta&t=2IbQnGlzdsa6VwSPH_x_ux04lCxtIeWDkmklpbg1DJ4" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Ravindra Kumar | Portfolio" />
      <meta name="twitter:description" content="Ravindra Kumar - Computer Science graduate with technical skills in ReactJS, Web Development, and C++." />
      <meta name="twitter:image" content="https://media.licdn.com/dms/image/v2/D5603AQFHqEkaOQXl8Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1716035051702?e=1732147200&v=beta&t=2IbQnGlzdsa6VwSPH_x_ux04lCxtIeWDkmklpbg1DJ4" />

      {/* Favicon if applicable */}
      {/* <link rel="icon" href="path_to_your_favicon" /> */}

      {/* Canonical URL */}
      <link rel="canonical" href="https://ravindra.vercel.app" />
    </Helmet>
  );
};

export default PortfolioHelmet;
