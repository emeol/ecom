import Image from "next/image";
import newsletter from "../assets/newsletter.png";

export const Newsletter = () => {
  return (
    <div className="newsletter">
        <form action="/send-data-here" method="post" className="email-signup">
        <span>Join our newsletter</span>
        <input type="text" placeholder="First name" required />
        <input type="text" placeholder="Last name" required />
        <input type="email" placeholder="Email address" required />
        <button type="submit">Subscribe</button>
      </form>
      <span className="newsletter-image">
        <Image src={newsletter} alt="Newsletter" width={400} height={300} />
      </span>
    </div>
  );
}