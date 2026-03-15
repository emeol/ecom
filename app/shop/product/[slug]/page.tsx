import { notFound } from "next/navigation";
import { products } from "../../../util/productData";

type ProductPageProps = {
	params: Promise<{ slug: string }>;
};

export default async function ProductDetails({ params }: ProductPageProps) {
	const { slug } = await params;
	const product = products.find((item) => item.slug === slug);

	if (!product) {
		notFound();
	}

	return (
		<section className="mx-auto w-full max-w-6xl px-6 py-10 md:py-14">
			<div className="grid gap-8 md:grid-cols-2 md:gap-10">
				<div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
					<img
						src={product.image}
						alt={product.name}
						width={900}
						height={900}
						className="h-full w-full object-cover"
					/>
				</div>

				<article className="flex flex-col gap-5 rounded-3xl border border-black/10 bg-white p-6 shadow-sm md:p-8">
					<h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{product.name}</h1>
					<p className="text-2xl font-bold">{product.price}</p>

					<div className="space-y-2 text-sm text-black/75">
						<p>
							<span className="font-semibold text-black">SKU:</span> {product.sku}
						</p>
						<p>
							<span className="font-semibold text-black">Weight:</span> {product.weight}
						</p>
						<p>
							<span className="font-semibold text-black">Delivery:</span> {product.delivery}
						</p>
					</div>

					<div className="h-px w-full bg-black/10" />

					<div className="space-y-2">
						<h2 className="text-lg font-semibold tracking-tight">Product Details</h2>
						<p className="leading-7 text-black/75">{product.details}</p>
					</div>
				</article>
			</div>
		</section>
	);
}
