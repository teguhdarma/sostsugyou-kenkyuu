import React from 'react';
import Header from '../components/Header';
import Slide from '../components/Slide';
import { sanityClient } from '../sanity';
function Search({ category }) {
  return (
    <div>
      <Header />
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        category
      </h1>
      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 scrollbar-hide">
        {category?.map((product) => (
          <Slide key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  const query = `*[_type == "category"]{
      title,
      image,
    slug,
    
    
    
    }`;

  const category = await sanityClient.fetch(query);

  return {
    props: {
      category,
    },
  };
}

export default Search;
