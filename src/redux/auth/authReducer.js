const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  userData: { name: null, email: null },
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {},
});

export const authReducer = authSlice.reducer;
