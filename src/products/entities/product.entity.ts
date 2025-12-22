export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    createdAt: Date;

    constructor(id: number, name: string, description: string, price: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.createdAt = new Date();
    }
}
