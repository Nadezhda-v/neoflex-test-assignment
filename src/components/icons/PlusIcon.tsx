import { FC } from 'react';

import Icon from './Icon';

const PlusIcon: FC = () => {
  return (
    <Icon>
      <svg
        width='31'
        height='30'
        viewBox='0 0 31 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='15.2056' cy='15' r='15' fill='#FFCE7F' />
        <g transform='translate(8, 8)'>
          <svg
            width='15'
            height='14'
            viewBox='0 0 15 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z' fill='white' />
          </svg>
        </g>
      </svg>
    </Icon>
  );
};

export default PlusIcon;
