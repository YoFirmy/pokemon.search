import { NextPageWithLayout } from 'pages/page';

import DetailsLayout from 'components/layouts/DetailsLayout/DetailsLayout';
import mockDetailsLayoutProps from 'components/layouts/DetailsLayout/DetailsLayout.mocks';
import PrimaryLayout from 'components/layouts/PrimaryLayout/PrimaryLayout';

interface DetailsProps {
  pokemon: {
    name: string;
    gameIndex: number;
    height: number;
    weight: number;
    moves: string[];
    types: string[];
    image: string;
  };
}

const Details: NextPageWithLayout<DetailsProps> = ({ pokemon }) => (
  <DetailsLayout pokemon={pokemon} />
);

export default Details;

Details.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;

export const getServerSideProps = () => {
  return {
    props: mockDetailsLayoutProps.base,
  };
};
