import React from 'react';
import * as ReactDOM from 'react-dom';
import Sheet from '../src';

describe.skip('BottomSheet', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Sheet>{/* TODO: Need to complete the test. */}</Sheet>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
