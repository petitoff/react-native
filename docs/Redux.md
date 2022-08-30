# Redux

## TypeScript
Wykorzystyanie i implementacja redux'a w TypeScrypt. This is from [course](https://egghead.io/lessons/react-intro-to-modern-redux-with-rtk-and-typescript).

## createSlice
Tworzymy plik dzięki któremu powiążemy dane oraz akcje z nimi związane. Będą tam również zawarte typy.

Najpierw importujemy `createSlice`
``` ts
import { createSlice } from "@reduxjs/toolkit";
```

Następnie tworzymy interfejs dla danych (state)
``` ts
export interface ProductsState {
  products: { [id: string]: Product }
}
```

Tworzymy `initialState`. Obiekt ma typ interfejsu, który wcześniej utworzyliśmy.
``` ts
const initialState: ProductsState = {
  products: {}
}
```

Tworzymy slice czyli obiekt który posiada `state` oraz akcje jakie mają być przeprowadzone na tych danych.
``` ts
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {}
});
```

Teraz możemy zaimplementować akcje dla naszych danych w reducers. `PayloadAction` jest typem zaimportowanym z biblioteki `reduxjs` natomiast `Product` jest typem (przez dodanie `[]` staję się to array of `Product`).
``` ts
const productsSlice = createSlice({
  initialState,
  name: "products",
  reducers: {
    receivedProducts(state, action: PayloadAction<Product[]>) {
      const products = action.payload;
      products.forEach(product => {
        state.products[product.id] = product;
      })
    }
  },
});
```
Stworzyliśmy akcje `receivedProducts`.

Eksportujemy `cartSlice` oraz naszą akcje
``` ts
export const { receivedProducts } = productsSlice.actions;
export default productsSlice.reducer;
```

## store
Aby połączyć wszystkie `reducer` w jednym miejscu używamy `store`. Importujemy wszystkie reducery oraz bibliotekę `configureStore`. Eksportujemy `store` jako `RootState`
``` ts
import productsReducer from "../features/products/productsSlice";
// ... other import

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

## dispatch
Możemy w aplikacji używać globalnego `dispatch` oraz `useSelector` zamaist wbudowanego w reduxa. W tym celu tworzymy plik `hooks.ts`
``` ts
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = () => TypedUseSelectorHook<RootState> = useSelector;
```

## implementacja w komponencie
``` ts
// getProducts() -> get products from api
// receivedProducts() => action state

const dispatch = useAppDispatch();
useEffect(() => {
  getProducts().then((products) => {
    dispatch(receivedProducts(products));
  });
}, []);

// get state
const products = useAppSelector((state) => state.products.products);
```
