import React, { useEffect, useState } from 'react';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((r) => r.json())
      .then(setProducts);
  }, []);

  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    const cat = product.category?.trim() || 'Uncategorized';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(product);
    return acc;
  }, {});

  const categoryOrder = [
    'Single Sound Crackers',
    'Flower Pot',
    'Ground Chakkar',
    'Twinkling Star',
    'Bombs',
    'PAPER BOMBS',
    'SOUND WAR',
    'ROCKETS',
    'LOOSE CRACKERS',
    'PEACOCK VARIETIE FOUNTAINS',
    'COLOUR FOUNTAIN (1 PC)',
    'COLOUR FOUNTAIN (2 PC)',
    'MOTHER"S BRAND FOUTAIN',
    'NOVELTIES CRACKERS',
    'KIDS VARIETIE',
    'SPARKLERS',
    'GIFT BOXES',

  ];

  return (
    <div className="product-table-container">
      <h2 className="title">Order Online</h2>

      <table className="product-table">
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Packs</th>
            <th>Category</th>
            <th>Price</th>
            <th>QTY</th>
            <th>Add Cart</th>
          </tr>
        </thead>
        <tbody>
          {categoryOrder.map((category) => {
            const items = groupedProducts[category];
            if (!items) return null;

            return (
              <React.Fragment key={category}>
                <tr>
                  <td colSpan="8" className="category-row">
                    {category.toUpperCase()}
                  </td>
                </tr>
                {items.map((p) => (
                  <tr key={p._id}>
                    <td><input type="checkbox" /></td>
                    <td>
                      <img
                        src={p.imageUrl}
                        alt={p.name}
                        className="product-img"
                      />
                    </td>
                    <td>{p.name}</td>
                    <td>{p.pack || '1 Pkt'}</td>
                    <td><strong>{p.category}</strong></td>
                    <td>
                       <span className="original-price">₹{(p.originalPrice || 0).toFixed(2)}</span>
                       <span className="discount-price">₹{(p.discountPrice || 0).toFixed(2)}</span>
                    </td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        defaultValue="1"
                        name={`qty-${p._id}`}
                        id={`qty-${p._id}`}
                        className="qty-input"
                      />
                    </td>
                    <td>
                      <button className="add-btn">Add</button>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>

      {products.length === 0 && <p className="no-products">No products available</p>}
    </div>
  );
};

export default ProductList;
