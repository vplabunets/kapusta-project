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
        return sortedTransactions;
    }
);

export const selectTransactionsByRecentDate = createSelector(
    [selectTransactions],
    transactions => {
        const sortedTransactions = [...transactions].sort((a, b) => 
         new Date(b.date) - new Date(a.date));
        return sortedTransactions;
    }
);

export const selectTransactionsByOlderDate = createSelector(
    [selectTransactions],
    transactions => {
        const sortedTransactions = [...transactions].sort((a, b) => 
         new Date(a.date) - new Date(b.date));
        return sortedTransactions;
    }
);

export const selectTransactionsByLargerSum = createSelector(
    [selectTransactions],
    transactions => {
        const sortedTransactionsBySum = [...transactions].sort((a, b) => 
         b.sum - (a.sum));
        return sortedTransactionsBySum;
    }
);

export const selectTransactionsBySmallerSum = createSelector(
    [selectTransactions],
    transactions => {
        const sortedTransactionsBySum = [...transactions].sort((a, b) => 
         a.sum - (b.sum));
        return sortedTransactionsBySum;
    }
);