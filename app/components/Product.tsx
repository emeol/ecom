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
        <div className="group h-full">
            <Link href={`/shop/product/${slugValue}`} className="block h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md">
                    <div className="aspect-square overflow-hidden bg-black/5">
                        <img
                            src={imageSrc}
                            width={250}
                            height={250}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                            alt={name}
                        />
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-3 p-4">
                        <p className="line-clamp-2 text-base font-semibold tracking-tight text-black">{name}</p>
                        <p className="text-lg font-bold text-black">
                            $
                            {(Number.isFinite(numericPrice) ? numericPrice : 0).toLocaleString("en-US", {
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                            })}
                        </p>
                    </div>
                </article>
            </Link>
        </div>
    );
};
