import { FunctionComponent } from 'react';

export type SecondaryNav = {
  id: number;
  title: string;
  active: boolean;
};

export type PrimaryNav = {
  id: number;
  title: string;
  icon: FunctionComponent;
  active: boolean;
  imgUrl?: string;
  submenuItems: {
    id: number;
    title: string;
    imgUrl: string;
    totalGraduates: number;
  }[];
};

export type StatesType = {
  id: number;
  title: string;
  active: boolean;
  cities: string[];
};
