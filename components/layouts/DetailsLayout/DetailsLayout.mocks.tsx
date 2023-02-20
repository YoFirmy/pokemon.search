import { DetailsLayoutProps } from 'components/layouts/DetailsLayout/DetailsLayout';

const base: DetailsLayoutProps = {
  pokemon: {
    name: 'clefairy',
    gameIndex: 35,
    height: 6,
    weight: 75,
    moves: ['pound', 'fight', 'something else'],
    types: ['fairy', 'normal'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png', // sprites
  },
};

const mockDetailsLayoutProps = {
  base,
};

export default mockDetailsLayoutProps;
