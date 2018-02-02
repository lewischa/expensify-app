import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectVisibleExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = (props) => {
    const expenseWord = props.numExpenses !== 1 ? 'expenses ' : 'expense ';
    const formattedTotal = numeral(props.total / 100).format('$0,0.00');

    return (
        <div>
            Viewing {props.numExpenses} {expenseWord}
            totalling {formattedTotal}
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectVisibleExpenses(state.expenses, state.filters);
    return {
        numExpenses: visibleExpenses.length,
        total: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);
