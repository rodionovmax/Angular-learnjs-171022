import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { map, of, timer } from 'rxjs';
import { productMock } from './product.mock';
import { ProductsApiService } from './products-api.service';
import { productsMock } from './products.mock';

// const httpClientMock: HttpClient = {
// 	get<T>(_url: string, _options: any) {}
// } as HttpClient;

// describe('ProductsApiService', () => {
// 	let service: ProductsApiService;

// 	beforeEach(() => {
// 		TestBed.configureTestingModule({
// 			providers: [
// 				ProductsApiService,
// 				{
// 					provide: HttpClient,
// 					useValue: httpClientMock,
// 				}
// 			]
// 		});
// 	});

// 	beforeEach(() => {
// 		service = TestBed.inject(ProductsApiService);

// 		const httpClient = TestBed.inject(HttpClient);

// 		spyOn(httpClient, 'get').and.returnValue(
// 			timer(1000).pipe(
// 				map(() => ({
// 					data: {items: productsMock}
// 				}))
// 			)
// 		);
// 	})

// 	it('Загрузка продуктов', done => {
// 		service.getProducts$().subscribe(products => {
// 			expect(products).toEqual(productsMock);

// 			done();
// 		})
// 	});
// });

describe('ProductsApiService', () => {
	let service: ProductsApiService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ProductsApiService],
			imports: [HttpClientTestingModule],
		});
	});

	beforeEach(() => {
		service = TestBed.inject(ProductsApiService);
		httpMock = TestBed.inject(HttpTestingController);
	});

	it('Загрузка продуктов', done => {
		service.getProducts$().subscribe(products => {
			expect(products).toEqual(productsMock);

			done();
		});

		httpMock.expectOne('/products').flush({ data: { items: productsMock } });
	});
});
