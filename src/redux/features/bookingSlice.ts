import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";

type BookingState = {
    bookingItems: BookingItem[]
}

const initialState:BookingState = { bookingItems:[] }

export const bookingSlice = createSlice ({
    name: "booking",
    initialState,
    reducers: {
        addBooking: (state, action:PayloadAction<BookingItem>) => {
            state.bookingItems.push(action.payload)
        },
        removeBooking: (state, action:PayloadAction<BookingItem>) => {
            const remainItems = state.bookingItems.filter(obj=>{
                return ((obj.coworkingId !== action.payload.coworkingId)
                && (obj.bookDate !== action.payload.bookDate)
                )
            })
            state.bookingItems = remainItems
        }
    }
})

export const { addBooking, removeBooking } = bookingSlice.actions
export default bookingSlice.reducer