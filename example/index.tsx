import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Sheet from '../src';

const App = () => {
  return (
    <div>
      <Sheet>Lorem Ipsum</Sheet>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
