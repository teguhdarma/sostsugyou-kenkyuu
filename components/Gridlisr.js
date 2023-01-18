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
            火事を未然に防ぐための情報をまとめた情報掲載ページです。自分の命や財産を守れるように意識を変えることができます。
          </p>
        </div>
      </Link>
      <Link href="https://kaji-maru-batsu.vercel.app/">
        <div class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
          <span class="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200">
            <img src="img/indexicon/quiz.png" alt="" className="w-10 h-10" />
          </span>
          <p class="text-xl font-medium text-slate-700 mt-3">クイズ</p>
          <p class="mt-2 text-sm text-slate-500">
            火災、地震、津波の予備知識をつけてもらって、いざ、災害が起きてしまった時にスムーズに避難ができるようにする
          </p>
        </div>
      </Link>
      <Link href="/news">
        <div class="p-10 flex flex-col items-center text-center group  md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
          <span class="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200">
            <img
              src="img/indexicon/newspaper.png"
              alt=""
              className="w-10 h-10"
            />
          </span>

          <p class="text-xl font-medium text-slate-700 mt-3">ニュース</p>
          <p class="mt-2 text-sm text-slate-500">
            災害時にテレビ等から情報が入手しにくい状況でも社会の出来事について知ることができるようにする
          </p>
        </div>
      </Link>
      <Link href="/Search">
        <div class="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
          <span class="p-5 rounded-full bg-lime-500 text-white shadow-lg shadow-lime-200">
            <img src="img/indexicon/map.png" alt="" className="w-10 h-10" />
          </span>

          <p class="text-xl font-medium text-slate-700 mt-3">避難場所</p>

          <p class="mt-2 text-sm text-slate-500">
            避難場所の情報をマップと合わせて災害のカテゴリーと県を入力するとその県の避難場所の情報を確認することができます。
          </p>
        </div>
      </Link>
      <Link href="/openai">
        <div class="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
          <span class="p-5 rounded-full bg-teal-500 text-white shadow-lg shadow-teal-200">
            <img src="img/indexicon/ai.png" alt="" className="w-10 h-10" />
          </span>
          <p class="text-xl font-medium text-slate-700 mt-3">AIに相談</p>
          <p class="mt-2 text-sm text-slate-500">
            災害や火災についての身近な疑問に関わらず何でも答えてくれます。
          </p>
        </div>
      </Link>
      <Link href="https://social-media-7bum.vercel.app/">
        <div class="p-10 flex flex-col items-center text-center group hover:bg-slate-50 cursor-pointer">
          <span class="p-5 rounded-full bg-purple-500 text-white shadow-lg shadow-indigo-200">
            <img
              src="img/indexicon/instagram.png"
              alt=""
              className="w-10 h-10"
            />
          </span>
          <p class="text-xl font-medium text-slate-700 mt-3">SNS</p>
          <p class="mt-2 text-sm text-slate-500">
            火事を未然に防ぐための知識をSNSに投稿をし
            拡散することでより多くの人に火事についての意識を変えてもらう
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Gridlisr;
