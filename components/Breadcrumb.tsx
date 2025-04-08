'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Breadcrumb = () => {
  const pathname = usePathname();

  const pathSegments = pathname.split('/').filter((segment) => segment);

  const generatePath = (index: number) => {
    return '/' + pathSegments.slice(0, index + 1).join('/');
  };

  return (
    <nav className="text-sm text-gray-600 py-4  px-4" aria-label="breadcrumb">
      <ol className="list-reset flex items-center space-x-2">
        <li>
          <Link href="/" className="text-blue-600 text-xl hover:underline">Home</Link>
        </li>
        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const path = generatePath(index);
          const label = decodeURIComponent(segment).replace(/-/g, ' ');

          return (
            <li key={index} className="flex items-center space-x-2">
              <span>/</span>
              {isLast ? (
                <span className="text-black text-xl capitalize">{label}</span>
              ) : (
                <Link href={path} className="text-blue-600 hover:underline capitalize">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
