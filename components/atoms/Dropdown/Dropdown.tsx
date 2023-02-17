import styled from '@emotion/styled';
import { useCombobox } from 'downshift';
import { useState } from 'react';

export interface DropdownProps {
  items: string[];
}

const Container = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.seaFoam,
}));

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
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
    });

  return (
    <Container>
      <div>
        <label {...getLabelProps()}>Search for a Pokemon...</label>
        <div>
          <input placeholder="Search for a pokemon" {...getInputProps()} />
          <button aria-label="toggle menu" type="button" {...getToggleButtonProps()}>
            {/* search icon goes here */}
            search
          </button>
        </div>
      </div>
      <ul {...getMenuProps()}>
        {isOpen &&
          (filteredItems.length ? (
            filteredItems.map((item, index) => (
              <li key={`${item}${index}`} {...getItemProps({ item, index })}>
                {item}
              </li>
            ))
          ) : (
            <li>we couldn&apos;t find any pokemon with that name...</li>
          ))}
      </ul>
    </Container>
  );
};

export default Dropdown;
