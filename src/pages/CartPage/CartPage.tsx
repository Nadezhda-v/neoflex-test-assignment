import { FC } from 'react';

import Page from '../../components/ui/layout/Page/Page';
import Cart from '../../components/Cart/Cart';

const CartPage: FC = () => {
  return (
    <Page>
      <Cart />
    </Page>
  );
};

export default CartPage;
