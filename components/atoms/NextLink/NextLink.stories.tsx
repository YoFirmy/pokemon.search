import { ComponentMeta, ComponentStory } from '@storybook/react';

import NextLink from './NextLink';
import mockNextLinkProps from './NextLink.mocks';

export default {
  title: 'atoms/NextLink',
  component: NextLink,
  argTypes: {},
} as ComponentMeta<typeof NextLink>;

const Template: ComponentStory<typeof NextLink> = (args) => <NextLink {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockNextLinkProps.base,
};
