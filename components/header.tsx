import React from 'react'

export default function Header() {
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-xl font-bold">UrbanThreads</h1>
        <ul className="flex space-x-4 mt-2">
          <li><a href="/" className="hover:text-gray-300">Home</a></li>
          <li><a href="/products" className="hover:text-gray-300">Products</a></li>
          <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
          <li><a href="/about" className="hover:text-gray-300">About</a></li>
        </ul>
      </div>
    </div>
  )
}
