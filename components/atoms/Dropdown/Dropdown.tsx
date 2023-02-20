import styled from '@emotion/styled';
import { useCombobox } from 'downshift';
import { useEffect, useState } from 'react';

import ChevronDown from 'components/icons/ChevronDown.svg';
import ChevronUp from 'components/icons/ChevronUp.svg';

export interface DropdownProps {
  items: string[];
  id: string;
  isLoading: boolean;
}

const NotVisibleLabel = styled.label({
  position: 'absolute',
  width: '1px',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0,0,0,0)',
});

const StyledInput = styled.input(({ theme }) => ({
  border: 'none',
  padding: '8px',
  backgroundColor: 'transparent',
  fontFamily: "'Press Start 2P', cursive",
  color: theme.colors.black,
  flex: 1,
  fontSize: theme.fontSizes[12],

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

const StyledButton = styled.button({
  border: 'none',
  padding: '8px',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

const DropDownWrapper = styled.div<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  position: 'absolute',
  maxHeight: '200px',
  overflowY: 'auto',
  backgroundColor: theme.colors.seaFoamLight,
  borderStyle: 'solid',
  borderWidth: isOpen ? '0 1px 1px' : 0,
  borderColor: theme.colors.brown,
  borderRadius: '0 0 8px 8px',
  minWidth: '260px',

  [theme.mediaQuery.tablet]: {
    minWidth: '400px',
  },

  [theme.mediaQuery.laptop]: {
    minWidth: '600px',
  },
}));

const List = styled.ul<{ isOpen: boolean }>(({ isOpen }) => ({
  margin: 0,
  listStyle: 'none',
  padding: isOpen ? '8px' : 0,
}));

const ListItem = styled.li(({ theme }) => ({
  padding: '8px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: theme.fontSizes[12],

  [theme.mediaQuery.tablet]: {
    fontSize: theme.fontSizes[16],
  },

  '&:hover': {
    backgroundColor: theme.colors.seaFoamDark,
  },
}));

const Dropdown: React.FC<DropdownProps> = ({ items, id, isLoading }) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const { isOpen, getToggleButtonProps, getLabelProps, getMenuProps, getInputProps, getItemProps } =
    useCombobox({
      onInputValueChange({ inputValue }) {
        setFilteredItems(
          items.filter(
            (item) => !inputValue || item.toLowerCase().includes(inputValue.toLowerCase()),
          ),
        );
      },
      items: filteredItems,
      id: id,
    });

  useEffect(() => setFilteredItems(items), [items]);

  return (
    <>
      <InputWrapper>
        <NotVisibleLabel {...getLabelProps()}>Search for a Pokemon</NotVisibleLabel>
        <StyledInput
          {...getInputProps()}
          placeholder={isLoading ? 'Loading...' : 'Select a pokemon...'}
          disabled={isLoading}
        />
        <StyledButton
          {...getToggleButtonProps()}
          aria-label="toggle menu"
          type="button"
          disabled={isLoading}
        >
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </StyledButton>
      </InputWrapper>
      <DropDownWrapper isOpen={isOpen}>
        <List {...getMenuProps()} isOpen={isOpen}>
          {isOpen &&
            (filteredItems.length ? (
              filteredItems.map((item, index) => (
                <ListItem key={`${item}${index}`} {...getItemProps({ item, index })}>
                  {item}
                </ListItem>
              ))
            ) : (
              <li role="error message">nothing matches your search...</li>
            ))}
        </List>
      </DropDownWrapper>
    </>
  );
};

export default Dropdown;
