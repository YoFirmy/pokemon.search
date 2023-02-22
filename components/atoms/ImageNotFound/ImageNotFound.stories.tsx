import { ComponentMeta, ComponentStory } from '@storybook/react';

import ImageNotFound from './ImageNotFound';

export default {
  title: 'atoms/ImageNotFound',
  component: ImageNotFound,
  argTypes: {},
} as ComponentMeta<typeof ImageNotFound>;

const Template: ComponentStory<typeof ImageNotFound> = (args) => <ImageNotFound {...args} />;

export const Base = Template.bind({});

Base.args = {};
