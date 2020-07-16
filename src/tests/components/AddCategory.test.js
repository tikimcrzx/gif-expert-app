import React from 'react';
import '@testing-library/jest-dom';
const { shallow } = require('enzyme');
const { AddCategory } = require('../../components/AddCategory');

describe('Test at <AddCategory />', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('Show content component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Change textbox', () => {
    const input = wrapper.find('input');
    const value = 'Hi Cossette';
    input.simulate('change', { target: { value } });
    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test(`Don't post the informationm on submit`, () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('Required call setCategories and client textbox', () => {
    const value = 'Hi Cossette';
    const input = wrapper.find('input');
    input.simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop('value')).toBe('');
  });
});
