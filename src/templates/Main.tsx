import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Navbar } from '../navigation/Navbar';
import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 px-3 md:px-0">
    {props.meta}

    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className=" pb-8">
            <Navbar>
              <li className="mr-6">
                <Link href="/">Inicio</Link>
              </li>
              <li className="mr-6">
                <Link href="/about/">Sobre Mi</Link>
              </li>
            </Navbar>
          </div>
          <div className="font-semibold text-3xl text-gray-900">
            {AppConfig.title}
          </div>
          <div className="text-xl">{AppConfig.description}</div>
        </div>
      </div>

      <div className="text-xl py-5">{props.children}</div>
    </div>
  </div>
);

export { Main };
