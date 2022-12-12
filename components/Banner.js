import React, { Suspense } from 'react';
import { HomeIcon } from '@heroicons/react/24/solid';

import Typed from 'react-typed';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Drei } from '@react-three/drei';
import { Tokyo } from './Tokyo';
import Link from 'next/link';
function Banner() {
  return (
    <div>
      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={{
          backgroundColor: '#FFFFFF',
          width: '100vw',
          height: '100vh',
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Tokyo position={[0.025, -0.1, 0]} />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate={true} />
      </Canvas>
      <div className="absolute top-1/2 w-full text-center ">
        <button className="text-blue-500  bg-white px-6 py-3 mt-12 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          <Link href="/home">
            <HomeIcon className="hidden md:inline-flex h-8 bg-blue-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
            <Typed
              strings={[
                'Selamat datang di re:on',
                'tempat mencari kos ',
                'temukan tempat nyaman',
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            >
              <input type="text" />
            </Typed>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Banner;
