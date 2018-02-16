import React from 'react';
import { Header } from 'semantic-ui-react';

import Layout from './Layout';

const DynamicPage = () => {
  return (
    <Layout>
      <Header>Dynamic Page</Header>
      <p>This page is loaded asyncronously</p>
    </Layout>
  );
};

export default DynamicPage;
