export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectName = state => state.auth.name;
export const selectBalance = state => state.auth.balance;
export const selectIsLoading = state => state.auth.isLoading;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectError = state => state.auth.error;
