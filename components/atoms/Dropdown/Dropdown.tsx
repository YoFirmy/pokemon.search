import styled from '@emotion/styled';
import { useCombobox } from 'downshift';
import { useEffect, useState } from 'react';

import ChevronDown from 'components/icons/ChevronDown.svg';
import ChevronUp from 'components/icons/ChevronUp.svg';

export interface DropdownProps {
  items: string[];
  id: string;
  isLoading: boolean;
  onSelectedItemChange: (_item?: string | null) => void;
}

const NotVisibleLabel = styled.label({
  position: 'absolute',
  width: '1px',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0,0,0,0)',
});

const StyledInput = styled.input<{ isLoading: boolean }>(({ isLoading, theme }) => ({
  border: 'none',
  padding: '8px',
  backgroundColor: 'transparent',
  fontFamily: "'Press Start 2P', cursive",
  color: theme.colors.black,
  flex: 1,
  fontSize: theme.fontSizes[12],
  cursor: isLoading ? 'wait' : 'text',

  [theme.mediaQuery.tablet]: {
    fontSize: theme.fontSizes[16],
  },
}));

const InputWrapper = styled.div(({ theme }) => ({
  borderWidth: '2px',
  borderStyle: 'dashed',
  borderColor: theme.colors.brown,
  display: 'flex',
  minWidth: '260px',

  [theme.mediaQuery.tablet]: {
    minWidth: '400px',
  },

  [theme.mediaQuery.laptop]: {
    minWidth: '600px',
  },
}));

const StyledButton = styled.button<{ isLoading: boolean }>(({ isLoading }) => ({
  border: 'none',
  padding: '8px',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  cursor: isLoading ? 'wait' : 'pointer',
}));

const List = styled.ul<{ isOpen: boolean }>(({ isOpen, theme }) => ({
  position: 'absolute',
  maxHeight: '200px',
  overflowY: 'auto',
  margin: 0,
  listStyle: 'none',
  padding: isOpen ? '8px' : 0,
  borderStyle: 'solid',
  borderWidth: isOpen ? '0 1px 1px' : 0,
  borderColor: theme.colors.brown,
  borderRadius: '0 0 8px 8px',
  borderRightColor: theme.colors.brown,
  backgroundColor: theme.colors.seaFoamLight,
  minWidth: '260px',

  '::-webkit-scrollbar': {
    backgroundColor: 'transparent',
  },

  '::-webkit-scrollbar-thumb': {
    backgroundColor: theme.colors.brown,
    borderRadius: '10px',
  },

  [theme.mediaQuery.tablet]: {
    minWidth: '400px',
  },

  [theme.mediaQuery.laptop]: {
    minWidth: '600px',
  },
}));

const ListItem = styled.li<{ isHighlighted: boolean }>(({ isHighlighted, theme }) => ({
  padding: '8px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: theme.fontSizes[12],
  backgroundColor: isHighlighted ? theme.colors.seaFoamDark : 'transparent',

  [theme.mediaQuery.tablet]: {
    fontSize: theme.fontSizes[16],
  },

  '&:hover': {
    backgroundColor: theme.colors.seaFoamDark,
  },
}));

const Dropdown: React.FC<DropdownProps> = ({ items, id, isLoading, onSelectedItemChange }) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getItemProps,
    highlightedIndex,
    inputValue,
  } = useCombobox({
    onInputValueChange({ inputValue }) {
      setFilteredItems(
        items.filter(
          (item) => !inputValue || item.toLowerCase().includes(inputValue.toLowerCase()),
        ),
      );
    },
    items: filteredItems,
    id: id,
    onSelectedItemChange: ({ selectedItem }) => onSelectedItemChange(selectedItem),
  });

  useEffect(() => setFilteredItems(items), [items]);

  useEffect(() => {
    if (!items.includes(inputValue)) {
      onSelectedItemChange(null);
    }
  }, [inputValue]);

  return (
    <div>
      <InputWrapper>
        <NotVisibleLabel {...getLabelProps()}>Search for a Pokemon</NotVisibleLabel>
        <StyledInput
          {...getInputProps()}
          placeholder={isLoading ? 'Loading...' : 'Select a pokemon...'}
          disabled={isLoading}
          isLoading={isLoading}
        />
        <StyledButton
          {...getToggleButtonProps()}
          aria-label="toggle menu"
          type="button"
          disabled={isLoading}
          isLoading={isLoading}
        >
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </StyledButton>
      </InputWrapper>
      <List {...getMenuProps()} isOpen={isOpen}>
        {isOpen &&
          (filteredItems.length ? (
            filteredItems.map((item, index) => (
              <ListItem
                {...getItemProps({ item, index })}
                key={`${item}${index}`}
                isHighlighted={highlightedIndex === index}
              >
                {item}
              </ListItem>
            ))
          ) : (
            <li role="error message">nothing matches your search...</li>
          ))}
      </List>
    </div>
  );
};

export default Dropdown;
