import React, { useEffect } from 'react';

import styles from './Products.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { productsRequestAsync } from '../../store/products/productsAction';
import Section from './Section/Section';
import { Preloader } from '../ui/Preloader/Preloader';

export interface IProduct {
  id: number;
  img: string;
  title: string;
  price: number;
  oldPrice?: number;
  rate: number;
  quantity?: number;
}

const Products = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.products.categories);
  const isLoading = useAppSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(productsRequestAsync());
  }, []);

  return (
    <section className={styles.products}>
      {isLoading ? (
        <Preloader color='#FFA542' size={30} />
      ) : (
        categories.length &&
        categories.map(({ title, items }) => {
          return <Section key={title} title={title} items={items} />;
        })
      )}
    </section>
  );
};

export default Products;
