// Import required modules
import React from 'react';
import ReactDOM from 'react-dom';

// Supports SCSS!
import './app.scss';

// Make a JSX component
const App = () => {
  return (
    <div className={'container'}>
      <h2>Hello world from React!</h2>
      <br />
      <p>
        To get started, edit something in <code>src/client/index.tsx</code>
        <br /> and watch it update live here!
      </p>
    </div>
  );
};

// Define our container
const root = document.createElement('div');
root.id = 'root';

// Render!
ReactDOM.render(<App />, document.body.appendChild(root));
