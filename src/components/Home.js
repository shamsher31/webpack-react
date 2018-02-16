import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <p>Welcome to Webpack React Tutorial</p>
      <p>
        <Link to="/dynamic">Navigate to dynamic page</Link>
      </p>
    </Layout>
  );
};

export default Home;
