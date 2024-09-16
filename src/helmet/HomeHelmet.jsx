import { Helmet } from 'react-helmet';

const HomeHelmet = () => {
  return (
    <Helmet>
      {/* Title of the page */}
      <title>Ravindra Kumar | Front-End Developer Portfolio</title>

      {/* Meta description */}
      <meta name="description" content="Welcome to the portfolio of Ravindra Kumar. A passionate MERN Stack Developer skilled in C++, JavaScript, ReactJS, HTML/CSS, RESTful APIs, and more." />

      {/* Keywords for SEO */}
      <meta name="keywords" content="Ravindra Kumar, Front-End Developer, MERN Stack Developer,  ReactJS, JavaScript, C++, HTML, CSS, RESTful APIs, Git, GitHub, Firebase" />

      {/* Open Graph tags for social media sharing */}
      <meta property="og:title" content="Ravindra Kumar | Front-End Developer Portfolio" />
      <meta property="og:description" content="Explore Ravindra Kumar's portfolio and learn about his experience in developing seamless user experiences using React.js and modern web technologies." />
      <meta property="og:image" content="https://media.licdn.com/dms/image/v2/D5603AQFHqEkaOQXl8Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1716035051702?e=1732147200&v=beta&t=2IbQnGlzdsa6VwSPH_x_ux04lCxtIeWDkmklpbg1DJ4" /> {/* Replace this with the actual image URL */}
      <meta property="og:url" content="https://ravindra.vercel.app" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="https://media.licdn.com/dms/image/v2/D5603AQFHqEkaOQXl8Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1716035051702?e=1732147200&v=beta&t=2IbQnGlzdsa6VwSPH_x_ux04lCxtIeWDkmklpbg1DJ4" />
      <meta name="twitter:title" content="Ravindra Kumar | Front-End Developer Portfolio | MERN Stack Developer" />
      <meta name="twitter:description" content="Portfolio of Ravindra Kumar, focusing on front-end development, MERN Stack Developer, React.js, and innovative web technologies." />
      <meta name="twitter:image" content="https://media.licdn.com/dms/image/v2/D5603AQFHqEkaOQXl8Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1716035051702?e=1732147200&v=beta&t=2IbQnGlzdsa6VwSPH_x_ux04lCxtIeWDkmklpbg1DJ4" /> {/* Replace with actual image URL */}

      {/* Author info */}
      <meta name="author" content="Ravindra Kumar" />

      {/* Favicon */}
      {/* <link rel="icon" href="path_to_favicon" /> Replace with your favicon path */}

      {/* Canonical URL */}
      <link rel="canonical" href="https://ravindra.vercel.app" />
    </Helmet>
  );
};

export default HomeHelmet;
