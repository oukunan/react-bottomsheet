import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as BottomSheet } from '../stories/BottomSheet.stories';

describe('BottomSheet', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BottomSheet />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
