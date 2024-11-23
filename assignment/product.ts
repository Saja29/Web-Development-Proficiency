
// Task 4
interface Product {
  name: string; 
  price: number; 
}

// product Array 
const products: Product[] = [
  { name: "Laptop", price: 1200.99 },
  { name: "Table", price: 60 },
  { name: "Desk", price: 299 }
];
// get price sum for the given arry 
function PriceSum( Products: Product[]): number {
  return products.reduce((total, product) => total + product.price, 0);
}
// print the sum
console.log(PriceSum(products))

// Task 5
function isValidEmail(email: string): boolean {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return emailRegex.test(email);
}
