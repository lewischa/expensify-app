import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
    const total = selectExpensesTotal([]);
    expect(total).toBe(0);
});

test('Should correctly add up a single expense', () => {
    const expense = {
        amount: 12345
    };
    const total = selectExpensesTotal([expense]);
    expect(total).toBe(expense.amount);
});

test('Should correctly add up multiple expenses', () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toBe(114195);
});
