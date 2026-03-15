import Link from "next/link";

export const PerfectBanner = () => {
  return (
    <div className="frontlogo">
      <div className="banner">
        <span className="tagline">Welcome to the Future of AI</span>
        <span>
          <Link className="shop-now" href="/shop">
            Shop Now
          </Link>
        </span>
      </div>
    </div>
  );
}