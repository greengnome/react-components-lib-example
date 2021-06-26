import React from 'react';

import { Loading } from 'my-lib';

const basicConfig = {
  title: '@my-lib/Loading',
  component: Loading,
  argTypes: {
    loadingText: {
      control: 'text',
    },
  },
};

const Template = (args) => <Loading {...args} />;

export const Example = Template.bind({});
Example.args = {
  loadingText: 'Processing...',
};

export default basicConfig;
