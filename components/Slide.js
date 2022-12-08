import React from 'react';

import { urlFor } from '../sanity';
import Link from 'next/link';

function Slide({ product: { image, title } }) {
  return (
    <div>
      <Link href={`/product/${title.current}`}>
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out scrollbar-hide ">
          <div className="relative h-80 w-80  scrollbar-hide">
            <img
              src={urlFor(image)}
              layout="fill"
              className="rounded-xl  scrollbar-hide h-80 w-80"
            />
          </div>

          <h3 className="text-2xl mt-3">{title}</h3>
        </div>
      </Link>
    </div>
  );
}

export default Slide;
