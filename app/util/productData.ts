type Product = {
  _id: string;
  price: string;
  image: string;
  name: string;
  slug: string;
  details: string;
  sku: string;
  weight: string;
  delivery: string;
};

export const products: Product[] = [
    {
        _id: "1",
        price: "$19.99",
        image: "./assets/cake1.jpg",
        name: "Product 1",
        slug: "product-1",
        details: "Details about Product 1",
        sku: "SKU001",
        weight: "1kg",
        delivery: "Free Shipping"
    },
    {
        _id: "2",
        price: "$29.99",
        image: "./assets/cake2.jpg",
        name: "Product 2",
        slug: "product-2",
        details: "Details about Product 2",
        sku: "SKU002",
        weight: "2kg",
        delivery: "Free Shipping"
    },
    {
        _id: "3",
        price: "$39.99",
        image: "./assets/cake3.jpg",
        name: "Product 3",
        slug: "product-3",
        details: "Details about Product 3",
        sku: "SKU003",
        weight: "3kg",
        delivery: "Free Shipping"
    }, {
        _id: "4",
        price: "$49.99",
        image: "./assets/cake4.jpg",
        name: "Product 4",
        slug: "product-4",
        details: "Details about Product 4",
        sku: "SKU004",
        weight: "4kg",
        delivery: "Free Shipping"
    },
    {
        _id: "5",
        price: "$59.99",
        image: "./assets/cake5.jpg",
        name: "Product 5",
        slug: "product-5",
        details: "Details about Product 5",
        sku: "SKU005",
        weight: "5kg",
        delivery: "Free Shipping"
    }
];