import Link from "next/link";

export const NavBar = () => {   
    return ( 
        <nav className="navbar">
            <div className="logo">E-Cake Shop</div>
            <div className="nav-links">
                <Link href="/">Home</Link>
                <Link href="/shop">Shop</Link>   
                <Link href="/about">About</Link> 
                <Link href="/contact">Contact</Link>
            </div>
            <button className="cart-button">Cart</button>
        </nav>
    );
};