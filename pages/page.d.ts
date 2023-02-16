import { NextPage } from 'next';
import { ComponentType } from 'react';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (_page: React.ReactElement) => React.ReactNode;
  layout?: ComponentType;
};
