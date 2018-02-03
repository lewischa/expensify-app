import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('Should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expenses if ID is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});


test('Should add an expense', () => {
    const expenseToAdd = {
        id: 'abc',
        description: 'Adding new expense',
        note: '',
        amount: 10000,
        createdAt: moment()
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenseToAdd
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expenseToAdd]);
});

test('Should edit an expense', () => {
    const updates = {
        description: 'edited',
        note: '',
        amount: 1234500
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state[2]).toEqual({ ...expenses[2], ...updates });
});

test('Should not edit an expense if expense not found by ID', () => {
    const updates = {
        description: 'edited',
        note: '',
        amount: 1234500
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should set expenses', () => {
    const updatedExpenses = [{
        id: '123abc',
        description: 'an expense',
        amount: 1234500,
        note: '',
        createdAt: 12352341234123
    }];
    const action = {
        type: 'SET_EXPENSES',
        expenses: updatedExpenses
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(updatedExpenses);
});
