import { Dictionary } from '@ngrx/entity';
import { createFeature, createFeatureSelector, createSelector } from '@ngrx/store';
import { IProduct } from '../../shared/products/product.interface';
import { IState } from '../reducer';
import { IProductsState, productsAdapter, PRODUCTS_STATE } from './products.state';

// export const productsSelector = ({products: {entities, ids}}: IState): IProduct[] => ids.map(id => entities[id] as IProduct);

// export const productsFeatureSelector = (state: IState) => state[PRODUCTS_STATE] as IProductsState
export const productsFeatureSelector = createFeatureSelector<IProductsState>(PRODUCTS_STATE);

// export const productsSelector = (state: IState): IProduct[] => productsFeatureSelector(state).ids.map(id => productsFeatureSelector(state).entities[id] as IProduct);

// export const productsSelector = createSelector(
//     productsFeatureSelector,
//     ({ids, entities}: IProductsState) => ids.map(id => entities[id]),
// )

// const customSelector = ({ids, entities}: IProductsState) => ids.map(id => entities[id] as IProduct);

// export const productsSelector = createSelector(
//     productsFeatureSelector,
//     customSelector,
// )

// (state: IState) => customSelector(productsFeatureSelector(state)) == productsSelector

// const productsAdapterSelectors = productsAdapter.getSelectors();
// const {selectAll} = productsAdapter.getSelectors();

// export const productsSelector = createSelector(
//     productsFeatureSelector,
//     // productsAdapterSelectors.selectAll, // productsAdapterSelectors.selectAll === customSelector
//     selectAll,
// )

export const { selectAll: productsSelector, selectEntities } = productsAdapter.getSelectors(productsFeatureSelector);

// const {selectAll} = productsAdapter.getSelectors(productsFeatureSelector)
// export const productsSelector = selectAll;

// export const {selectEntities, selectIds} = productsAdapter.getSelectors(productsFeatureSelector)
// export const productsSelector = createSelector(
//     selectEntities,
//     selectIds,
//     (entities: Dictionary<IProduct>, ids: string[] | number[]) => ids.map(id => entities[id] as IProduct)
// )

export const productByIdSelect = (id: string) => createSelector(selectEntities, entities => entities[id]);
