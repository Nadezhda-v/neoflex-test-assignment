import { FC } from 'react';

import Icon from './Icon';

const MinusIcon: FC = () => {
  return (
    <Icon>
      <svg
        width='30'
        height='30'
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='15' cy='15' r='15' fill='#FFCE7F' />
        <g transform='translate(8, 14)'>
          <svg
            width='14'
            height='2'
            viewBox='0 0 14 2'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M0 0H14V2H0V0Z' fill='white' />
          </svg>
        </g>
      </svg>
    </Icon>
  );
};

export default MinusIcon;
