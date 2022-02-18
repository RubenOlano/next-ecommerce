import { createAction } from "@reduxjs/toolkit";
import { ICartItems } from "./cartReducer";

export const toggleHidden = createAction("cart/toggleHidden");
export const addItem = createAction<ICartItems>("cart/addItem");
export const clearItems = createAction<ICartItems>("cart/clearItems");
export const removeItem = createAction<ICartItems>("cart/removeItem");
