import Link from "next/link";
import Image from "next/image";
import perfect from "../assets/perfect.png";

export const PerfectBanner = () => {
  return (
    <div className="perfect-occasions">
        <div>
            <Image src={perfect} alt="Perfect Occasions" width={442} height={500} />
        </div>
        <div className="perfect-message">
            <h2>Perfect Occasions</h2>
            <p>Discover the perfect gifts for every occasion. Whether it's a birthday, anniversary, or just because, we have something special for everyone.</p>
            <p>Explore our curated collection of unique and thoughtful gifts that are sure to make any occasion unforgettable.</p>
            <p>Find the perfect present and make every moment extraordinary with our exclusive selection.</p>
        </div>
    </div>
  );
}