import Link from "next/link";
import type { Product as ProductType } from "../util/product";

type ProductCardProps = Omit<ProductType, "price" | "slug" | "image"> & {
    price: number | string;
    slug: string | { current: string };
    image: string | { asset?: { url?: string } } | Array<{ asset?: { url?: string } }>;
};

export const Product = ({ slug, image, name, price }: ProductCardProps) => {
    const slugValue = typeof slug === "string" ? slug : slug.current;
    const imageValue = Array.isArray(image) ? image[0] : image;
    const imageSrc =
        typeof imageValue === "string" ? imageValue : imageValue?.asset?.url || "/next.svg";
    const numericPrice =
        typeof price === "number"
            ? price
            : Number(String(price).replace(/[^0-9.-]+/g, ""));

    return (
        <div>
            <Link href={`/product/${slugValue}`}>
                <div className="product-card">
                    <img src={imageSrc} width={250} height={250} className="product-image" alt={name} />
                    <p className="product-name">{name}</p>
                    <p className="product-price">
                        $
                        {(Number.isFinite(numericPrice) ? numericPrice : 0).toLocaleString("en-US", {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                        })}
                    </p>
                </div>
            </Link>
        </div>
    );
};
