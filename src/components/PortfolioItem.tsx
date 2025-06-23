'use client';

import { useState } from 'react';
import Link from 'next/link';

interface PortfolioItemProps {
  imageUrl: string;
  title: string;
}

export default function PortfolioItem({ imageUrl, title }: PortfolioItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="/portfolio" className="block">
      <div
        className="relative overflow-hidden rounded-lg aspect-square"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out ${isHovered ? 'scale-110' : ''}`}
        />
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 ease-in-out ${isHovered ? 'opacity-60' : 'opacity-0'}`}
        />
        <div
          className={`absolute inset-0 flex items-center justify-center text-white transition-opacity duration-500 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
      </div>
    </Link>
  );
} 