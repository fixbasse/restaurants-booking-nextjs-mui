import { bookingDataType, restaurantDataTypes } from '@/types/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem extends bookingDataType {
    count: number;
};

type CartStore = {
    cart: CartItem[],
    count: () => number;
    add: (product: bookingDataType) => void,
    remove: (idProduct: string) => void,
    removeAll: () => void
};

export const useBookingStore = create<CartStore>()(
    persist(
        (set, get) => ({
            cart: [],
            // totalPrice: () => {
            //     const { cart } = get();
            //     if (cart.length) return cart.map(item => item.price).reduce((prev, curr) => prev + curr);
            // },
            count: () => {
                const { cart } = get();
                if (cart.length) {
                    return cart.map(item => item.count).reduce((prev, curr) => prev + curr);
                }

                return 0;
            },
            add: (product: bookingDataType) => {
                const { cart } = get();
                const updatedCart = updateCart(product, cart)
                set({ cart: updatedCart });
            },
            remove: (idProduct: string) => {
                const { cart } = get();
                const updatedCart = removeCart(idProduct, cart)
                set({ cart: updatedCart });
            },
            removeAll: () => set({ cart: [] }),
        }),
        { name: 'bookingItem' } // localstorage
    ));

//* add 
function updateCart(product: bookingDataType, cart: CartItem[]): CartItem[] {
    const cartItem = { ...product, count: 1 } as CartItem;

    const productOnCart = cart.map(item => item.id).includes(product.id);

    if (!productOnCart) cart.push(cartItem)
    else {
        return cart.map(item => {
            if (item.id === product.id)
                return { ...item, count: item.count + 1 } as CartItem;
            return item
        })
    }

    return cart;
};

//* remove 
function removeCart(idProduct: string, cart: CartItem[]): CartItem[] {
    return cart.map(item => {
        if (item.id === idProduct)
            return { ...item, count: item.count - 1 }
        return item;
    }).filter(item => {
        return item.count;
    });
};
