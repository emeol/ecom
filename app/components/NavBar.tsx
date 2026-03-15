import Link from "next/link";

export const NavBar = () => {
    return (
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between border-b border-black/10 px-6 py-4">
            <span className="text-lg font-semibold tracking-tight">E-Cake Shop</span>
            <div className="flex items-center gap-6 text-sm font-medium">
                <Link href="/">Home</Link>
                <Link href="/shop">Shop</Link>   
                <Link href="/about">About</Link> 
                <Link href="/contact">Contact</Link>
            </div>
            <button className="cart-button">Cart</button>
        </nav>
    );
};