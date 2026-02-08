import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 h-145 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to UrbanThreads</h1>
      <p className="text-lg mb-6 text-center">
        Discover the latest trends in urban fashion with our exclusive collection of streetwear. From stylish hoodies to trendy sneakers, we have everything you need to elevate your wardrobe.
      </p>
    </div>
  );
}
