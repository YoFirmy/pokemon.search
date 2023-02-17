import { ComponentMeta, ComponentStory } from '@storybook/react';

import CenterModule from './CenterModule';

export default {
  title: 'organisms/CenterModule',
  component: CenterModule,
  argTypes: {},
} as ComponentMeta<typeof CenterModule>;

const Template: ComponentStory<typeof CenterModule> = (args) => <CenterModule {...args} />;

export const Base = Template.bind({});

Base.args = {};
