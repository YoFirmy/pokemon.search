import { ComponentMeta, ComponentStory } from '@storybook/react';

import DetailsLayout from './DetailsLayout';
import mockDetailsLayoutProps from './DetailsLayout.mocks';

export default {
  title: 'layouts/DetailsLayout',
  component: DetailsLayout,
  argTypes: {},
} as ComponentMeta<typeof DetailsLayout>;

const Template: ComponentStory<typeof DetailsLayout> = (args) => <DetailsLayout {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockDetailsLayoutProps.base,
};
