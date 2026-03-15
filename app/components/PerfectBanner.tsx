import Link from "next/link";
import Image from "next/image";
import perfect from "../assets/perfect.png";

export const PerfectBanner = () => {
  return (
    <div className="grid items-center gap-8 rounded-3xl border border-black/10 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={perfect}
          alt="Perfect Occasions"
          width={442}
          height={500}
          className="h-auto w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold tracking-tight">Perfect Occasions</h2>
        <p className="text-base leading-7 text-black/70">
          Discover the perfect gifts for every occasion. Whether it&apos;s a birthday, anniversary, or just because, we have something special for everyone.
        </p>
        <p className="text-base leading-7 text-black/70">
          Explore our curated collection of unique and thoughtful gifts that are sure to make any occasion unforgettable.
        </p>
        <p className="text-base leading-7 text-black/70">
          Find the perfect present and make every moment extraordinary with our exclusive selection.
        </p>
        <div>
          <Link
            href="/shop"
            className="inline-flex items-center rounded-full border border-black px-5 py-2.5 text-sm font-semibold transition hover:bg-black hover:text-white"
          >
            Explore Shop
          </Link>
        </div>
      </div>
    </div>
  );
};