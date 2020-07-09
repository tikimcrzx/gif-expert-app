import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export default function GifExpertApp() {
  const [categories, setCategories] = useState(['One Punch']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
}
