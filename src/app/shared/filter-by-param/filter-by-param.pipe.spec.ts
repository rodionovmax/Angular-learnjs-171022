import { productsMock } from '../products/products.mock';
import { FilterByParamPipe } from './filter-by-param.pipe';

describe('FilterByParamPipe', () => {
	const pipe = new FilterByParamPipe();

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('Фильтрация по имени', () => {
		const value = pipe.transform(productsMock, productsMock[0].name, 'name');

		expect(value).toEqual([productsMock[0]]);
	});

	it('Фильтрация по id', () => {
		const value = pipe.transform(productsMock, productsMock[0]._id, '_id');

		expect(value).toEqual([productsMock[0]]);
	});

	it('Не успешная фильтрация по id', () => {
		const value = pipe.transform(productsMock, 'not-found', '_id');

		expect(value).toEqual([]);
	});
});
