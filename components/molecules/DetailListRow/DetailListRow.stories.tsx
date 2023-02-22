import { ComponentMeta, ComponentStory } from '@storybook/react';

import DetailListRow from './DetailListRow';
import mockDetailListRowProps from './DetailListRow.mocks';

export default {
  title: 'molecules/DetailListRow',
  component: DetailListRow,
  argTypes: {},
} as ComponentMeta<typeof DetailListRow>;

const Template: ComponentStory<typeof DetailListRow> = (args) => <DetailListRow {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockDetailListRowProps.base,
};
