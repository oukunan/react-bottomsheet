import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BottomSheet } from '../src';

const App = () => {
  return (
    <div>
      <BottomSheet />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
