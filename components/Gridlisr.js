import Link from 'next/link';
import React from 'react';

function Gridlisr() {
  return (
    <div class="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">
      <Link href="https://kaji-infoweb.vercel.app/">
        <div class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
          <span class="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200">
            <img src="img/indexicon/website.png" alt="" className="w-10 h-10" />
          </span>
          <p class="text-xl font-medium text-slate-700 mt-3">ウェブサイト</p>
          <p class="mt-2 text-sm text-slate-500">
            Team BrainEdge education is a bunch of highly focused, energetic set
            of people.
          </p>
        </div>
      </Link>
      <Link href="https://kaji.vercel.app/">
        <div class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
          <span class="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200">
            <img src="img/indexicon/quiz.png" alt="" className="w-10 h-10" />
          </span>
          <p class="text-xl font-medium text-slate-700 mt-3">クイズ</p>
          <p class="mt-2 text-sm text-slate-500">
            Know where you stand and what next to do to
            succeeaaaaaaaaaaaaaaaaaaaaaa .
          </p>
        </div>
      </Link>
      <Link href="/news">
        <div class="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
          <span class="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200">
            <img
              src="img/indexicon/newspaper.png"
              alt=""
              className="w-10 h-10"
            />
          </span>

          <p class="text-xl font-medium text-slate-700 mt-3">ニュース</p>
          <p class="mt-2 text-sm text-slate-500">
            Professional Advice for higher education abroad and select the top
            institutions worldwide.
          </p>
        </div>
      </Link>
      <Link href="/maps">
        <div class="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
          <span class="p-5 rounded-full bg-lime-500 text-white shadow-lg shadow-lime-200">
            <img src="img/indexicon/map.png" alt="" className="w-10 h-10" />
          </span>

          <p class="text-xl font-medium text-slate-700 mt-3">避難場所</p>

          <p class="mt-2 text-sm text-slate-500">
            Yet another year ! Yet another jewel in our crown! Yet another year
            ! Yet another jewel in our crown!
          </p>
        </div>
      </Link>
      <Link href="/goaltraker">
        <div class="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
          <span class="p-5 rounded-full bg-teal-500 text-white shadow-lg shadow-teal-200">
            <img
              src="img/indexicon/checklist.png"
              alt=""
              className="w-10 h-10"
            />
          </span>

          <p class="text-xl font-medium text-slate-700 mt-3">チェックリスト</p>
          <p class="mt-2 text-sm text-slate-500">
            Get Topic-Wise Tests, Section- Wise and mock tests for your
            preparation.
          </p>
        </div>
      </Link>

      <div class="p-10 flex flex-col items-center text-center group hover:bg-slate-50 cursor-pointer">
        <span class="p-5 rounded-full bg-purple-500 text-white shadow-lg shadow-indigo-200">
          <img src="img/indexicon/instagram.png" alt="" className="w-10 h-10" />
        </span>
        <p class="text-xl font-medium text-slate-700 mt-3">インスタ</p>
        <p class="mt-2 text-sm text-slate-500">
          Visa process by helping you create the necessary documentation
        </p>
      </div>
    </div>
  );
}

export default Gridlisr;
