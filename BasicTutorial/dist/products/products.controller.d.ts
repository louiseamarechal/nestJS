import { ProductService } from "./products.service";
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductService);
    addProduct(prodTitle: string, prodDesc: string, prodPrice: number): {
        id: string;
    };
    getAllProducts(): import("./product.model").Product[];
    getProduct(prodId: string): {
        id: string;
        title: string;
        desc: string;
        price: number;
    };
    updateProduct(prodId: string, prodTitle: string, prodDesc: string, prodPrice: number): any;
    removeProduct(prodId: string): void;
}
