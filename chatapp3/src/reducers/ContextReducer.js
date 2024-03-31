import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "../components/data/data";

const INITIALSTATE = {
    contacts: [],
    error: null,
}

let allUser;

const contactSlice = createSlice({
    name: "contacts",
    initialState: INITIALSTATE,
    reducers: {
        fetchSuccess: (state, action) => {
            state.contacts = action.payload;
            allUser = action.payload;
        },
        fetchError: (state, action) => {
            state.error = "failed to fetch contacts";
        },
        searchContact: (state, action) => {
            const filterContacts = allUser.filter((user) => user.name.toLowerCase().includes(action.payload.toLowerCase()));
            state.contacts = filterContacts;
            console.log(filterContacts);
        },
        addMessage: (state, action) => {
            const { userId, message } = action.payload;
            const contactIndex = state.contacts.findIndex(contact => contact.id === userId);
            if (contactIndex !== -1) {
                state.contacts[contactIndex].chatlog.push(message);
            }
        },
    }
})

export const getContacts = createAsyncThunk("contacts/getContacts", async (_, thunkAPI) => {
    try {
        thunkAPI.dispatch(fetchSuccess(data.profile.contacts));
    }
    catch (error) {
        thunkAPI.dispatch(fetchError());
    }
});


export const contactReducer = contactSlice.reducer;
export const { fetchSuccess, fetchError, searchContact, addMessage } = contactSlice.actions;
export const contactSelector = (state) => state.contactReducer.contacts;