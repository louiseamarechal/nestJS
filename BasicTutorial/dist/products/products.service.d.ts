import { Product } from './product.model';
export declare class ProductService {
    private products;
    inserProduct(title: string, desc: string, price: number): string;
    getProducts(): Product[];
    getSingleProduct(productId: string): {
        id: string;
        title: string;
        desc: string;
        price: number;
    };
    updateProduct(productId: string, title: string, desc: string, price: number): void;
    deleteProduct(prodId: string): void;
    private findProduct;
}
