import { DropdownProps } from 'components/atoms/Dropdown/Dropdown';

const base: DropdownProps = {
  items: [
    'bulbasaur',
    'ivysaur',
    'venusaur',
    'charmander',
    'charmeleon',
    'charizard',
    'squirtle',
    'wartortle',
    'blastoise',
  ],
  id: 'storybook-dropdown',
  isLoading: false,
  onSelectedItemChange: (item) => console.log(item),
};

const mockDropdownProps = {
  base,
};

export default mockDropdownProps;
