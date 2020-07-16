import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Test Gif Grid Item', () => {
  const title = 'title';
  const url = 'http://localhost:3000';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('Show GifGridItem <GifGridItem />', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Content param <p>', () => {
    const p = wrapper.find('p').text().trim();
    expect(p).toBe(title);
  });

  test('Content url image and alt the image', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('Required class animate__fadeIn', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    const classNameCompare = 'animate__fadeIn';
    expect(className.includes(classNameCompare)).toBe(true);
  });
});
