import React, { FC } from 'react';

import Page from '../../components/ui/layout/Page/Page';
import Products from '../../components/Products/Products';

export const MainPage: FC = () => {
  return (
    <Page>
      <Products />
    </Page>
  );
};
