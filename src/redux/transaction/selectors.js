import { createSelector } from '@reduxjs/toolkit';

export const selectTransactions = state => state.transactions.transactions;
export const selectSummary = state => state.transactions.summary;
export const selectError = state => state.transactions.error;
export const selectIsLoading = state => state.transactions.isLoading;
export const selectOperationType = state => state.transactions.operationType;

export const getSelectTransactions = createSelector(
    [selectTransactions],
    transactions => {
        const sortedTransactions = [...transactions].sort((a, b) => 
         b.createdAt.localeCompare(a.createdAt));
         const sortedSumTransactions = [...sortedTransactions].sort((a, b) => 
         b.sum - a.sum);
        return sortedSumTransactions;
    }
);
