import Link from "next/link";
import { PerfectBanner } from "./components/PerfectBanner";
import { Newsletter } from "./components/Newsletter";

export default function Home() {
  return (
    <>
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
    <div className="intro">
      <p>Discover the latest advancements in AI technology and explore our innovative products.</p>
      <p>Join us on a journey to revolutionize the way we interact with technology.</p>
      <p>Experience the power of AI and unlock new possibilities for your business and personal life.</p>
    </div>

    <PerfectBanner />
    <Newsletter />

    </>
  );
}
