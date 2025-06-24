import React from 'react';
import ProductList from './components/ProductList';

function App() {
  return (
    <>
      {/* If advay header/nav is static in public/index.html, React will inject here */}
      <ProductList />
      {/* advay footer if exists */}
    </>
  );
}

export default App;
