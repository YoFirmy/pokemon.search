import { ComponentMeta, ComponentStory } from '@storybook/react';

import DetailRow from './DetailRow';
import mockDetailRowProps from './DetailRow.mocks';

export default {
  title: 'molecules/DetailRow',
  component: DetailRow,
  argTypes: {},
} as ComponentMeta<typeof DetailRow>;

const Template: ComponentStory<typeof DetailRow> = (args) => <DetailRow {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockDetailRowProps.base,
};
