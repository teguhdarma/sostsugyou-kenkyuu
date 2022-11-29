import React from 'react';

// import { useRouter } from 'next/router';
// import format from 'date-fns/format';
// import Pagination from '../components/Pagination';
// import App from '../components/Map';
import { sanityClient, urlFor } from '../sanity';
import App from '../components/Map';
import Link from 'next/link';

function maps({ map, posts }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <div>
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          {/* <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <Link a href={`/post/Carausel`}>
              <p className="button  hover:text-white hover:bg-sky-500 hover:ring-sky-500">
                all
              </p>
            </Link>
            <Link a href={`/Type`}>
              <p className="button hover:text-white hover:bg-sky-500 hover:ring-sky-500">
                type of place
              </p>
            </Link>

            <p className="button hover:text-white hover:bg-sky-500 hover:ring-sky-500">
              price
            </p>

            <p className="button  hover:text-white hover:bg-sky-500 hover:ring-sky-500">
              More filters
            </p>
          </div> */}
          {/* render info card */}
          <div>
            {posts.map((post) => (
              <Link key={post._id} href={`/${post.slug.current}`}>
                <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t ">
                  <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 hover:scale-105 transform transition duration-300 ease-out">
                    {post.mainImage && (
                      <img
                        className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                        src={urlFor(post.mainImage).url()}
                        alt=""
                      />
                    )}
                  </div>
                  <div className="flex flex-col flex-grow pl-5">
                    <h4 className="text-xl">{post.title}</h4>

                    <div className="border-b w-10 py-2" />
                    <p className="pt-2 text-sm text-zinc-800">{post.alamat}</p>
                    <p className="pt-2 text-sm text-zinc-500">
                      {post.location.title}
                    </p>

                    <div className="flex justify-between items-end py-3 ">
                      <p className="flex items-center">
                        <p className="text-blue-500">lihat lebih</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </p>
                    </div>

                    <div className="flex justify-between items-end ">
                      <p className="flex items-center">
                        <p>{post.star}</p>
                        sat
                      </p>

                      <div>
                        <p className="text-lg lg:text-2xl font-semibold pb-2 text-blue-400">
                          {post.price}
                        </p>
                        <p className="text-right font-extralight">
                          {post.author.name}
                        </p>
                        <p className="text-right font-extralight">{post.no}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <App posts={posts} />
        </section>
      </main>
    </div>
  );
}

export default maps;

export async function getServerSideProps() {
  const query = `*[_type == "post" ]{
    _id,
    title,
    author->{
    name,image
  },
  description,
  mainImage,
  mainImage2,
  location->{
      title,description,
  },
  fasilitas->{
    image,image1,image2,image3,image4,image5
},
  slug,
  star,
  price,
  long,
  lang,
  no,
  alamat
  
  
  }`;

  const posts = await sanityClient.fetch(query);

  const map = await fetch(
    'https://api.mapbox.com/directions/v5/mapbox/driving/11.59838875578771,48.1498484882143;11.646071564986642,48.157168731123306.json?overview=false&engine=electric&ev_initial_charge=600&ev_max_charge=50000&ev_connector_types=ccs_combo_type1,ccs_combo_type2&energy_consumption_curve=0,300;20,160;80,140;120,180&ev_charging_curve=0,100000;40000,70000;60000,30000;80000,10000&ev_min_charge_at_charging_station=1&access_token=pk.eyJ1IjoidGVndWhkYXJtYSIsImEiOiJja3psNjRneWsxNHQ1Mm5ueXh2dThpY2xuIn0.EOP9mO-H8NKTAW6jcvX7KQ'
  ).then((res) => res.json());
  return {
    props: {
      map,
      posts,
    },
  };
}
