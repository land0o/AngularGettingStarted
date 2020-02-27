import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    pageTitle = 'Product List';
    products: any[] = [
    {
        productId: 2,
        productName: 'Garden Cart',
        ProductCode: 'GDN-0023',
        releaseDate: 'March 18, 2020',
        description: '15 gallon capacity rolling garden cart',
        price: 32.99,
        starRating: 4.2,
        imageUrl: 'assets/images/garden_cart.png'
    },
    {
        productId: 5,
        productName: 'Hammer',
        ProductCode: 'TBX-0048',
        releaseDate: 'May 18, 2020',
        description: 'Curved claw stell hammer',
        price: 2.9,
        starRating: 4.8,
        imageUrl: 'assets/images/hammer.png'
    }

    ];
}
