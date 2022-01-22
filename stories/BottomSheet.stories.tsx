import React from 'react';
import { Meta, Story } from '@storybook/react';

import Sheet from '../src';

const meta: Meta = {
  title: 'Welcome',
  component: Sheet,
};

export default meta;

const Template: Story<any> = (args) => (
  <Sheet>
    <Sheet.Overlay />
    Hello
  </Sheet>
);

export const Default = Template.bind({});
Default.args = {};
