import { TestBed } from '@angular/core/testing';

import { RequestErrorInterceptor } from './request-error.interceptor';

describe('RequestErrorInterceptor', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			providers: [RequestErrorInterceptor],
		}),
	);

	it('should be created', () => {
		const interceptor: RequestErrorInterceptor = TestBed.inject(RequestErrorInterceptor);
		expect(interceptor).toBeTruthy();
	});
});
