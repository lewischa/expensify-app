import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('ExpenseSummary snapshot should match with 0 expenses', () => {
    const wrapper = shallow(<ExpenseSummary numExpenses={0} total={0}/>);
    expect(wrapper).toMatchSnapshot();
});

test('ExpenseSummary snapshot should match with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary numExpenses={1} total={2346} />);
    expect(wrapper).toMatchSnapshot();
});

test('ExpenseSummary snapshot should match with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary numExpenses={23} total={2364236643} />);
    expect(wrapper).toMatchSnapshot();
});
