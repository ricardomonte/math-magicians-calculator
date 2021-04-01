import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

function Home() {
  return (
    <div className="Home">
      <h1>Welcome to our page</h1>
      <LoremIpsum p={2} />
    </div>
  );
}

export default Home;
