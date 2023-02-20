import { ComponentMeta, ComponentStory } from '@storybook/react';

import Dropdown from './Dropdown';
import mockDropdownProps from './Dropdown.mocks';

export default {
  title: 'atoms/Dropdown',
  component: Dropdown,
  argTypes: {},
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockDropdownProps.base,
};
