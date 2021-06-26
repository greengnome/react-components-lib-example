import React from 'react';

import { Greeting } from 'my-lib';

const basicConfig = {
  title: '@my-lib/Greeting',
  component: Greeting,
  argTypes: {
    name: { control: 'text' },
  },
};

const Template = (args) => <Greeting {...args} />;

export const Example = Template.bind({});
Example.args = {
  name: 'Kirill',
};

export default basicConfig;
