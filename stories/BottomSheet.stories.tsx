import React from 'react';
import { Meta, Story } from '@storybook/react';

import BottomSheet from '../src';

const meta: Meta = {
  title: 'Welcome',
  component: BottomSheet,
};

export default meta;

const Template: Story<any> = (args) => <BottomSheet {...args} />;

export const Default = Template.bind({});

Default.args = {};
