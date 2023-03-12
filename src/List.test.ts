import { List } from './List';

describe('Testing first implementation of List', () => {

  test('Check adding an element', () => {
    const list = new List();

    list.append('A');
    const result = list.arr[0];

    expect(result).toBe('A');
  });

  test('Check getting an element', () => {
    const list = new List();
    list.append('A');

    const result = list.get(0);

    expect(result).toBe('A');
  });

  test('Check length of a list', () => {
    const list = new List();
    list.append('A');
    list.append('A');
    list.append('A');

    const result = list.length();

    expect(result).toBe(3);
  });

  test('Check deleting by index', () => {
    const list = new List();
    list.append('A');

    const value = list.delete(0);
    const result = list.arr[0];

    expect(value).toBe('A');
    expect(result).toBeUndefined();

    try {
      list.delete(-1);
    } catch (e: any) {
      expect(e.message).toBe('Invalid number')
    }

    try {
      list.delete(list.length() + 1);
    } catch (e: any) {
      expect(e.message).toBe('Invalid number')
    }
  });

  test('Check deleting by value', () => {
    const list = new List();
    list.append('A');
    list.append('B');
    list.append('B');
    list.append('A');
    list.append('C');
    list.append('D');
    list.append('A');

    list.deleteAll('A');
    const index = list.arr.indexOf('A');

    expect(index).toBe(-1);
  });

  test('Check appending a list to an end', () => {
    const list = new List();
    list.append('A');
    list.append('B');
    list.append('B');
    list.append('A');

    list.extend(['B', 'C', 'D', 'A']);

    expect(list.arr[4]).toBe('B');
    expect(list.arr[5]).toBe('C');
    expect(list.arr[6]).toBe('D');
    expect(list.arr[7]).toBe('A');
  });

  test('Check finding a first index by value', () => {
    const list = new List();
    list.append('B');
    list.append('A');
    list.append('B');
    list.append('C');
    list.append('A');

    const character = list.findFirst('A');

    expect(character).toBe(1);
  });

  test('Check finding a last index by value', () => {
    const list = new List();
    list.append('B');
    list.append('A');
    list.append('B');
    list.append('C');
    list.append('A');

    const character = list.findLast('A');

    expect(character).toBe(4);
  });

  test('Check inserting an element', () => {
    const list = new List();
    list.append('B');
    list.append('A');
    list.append('B');
    list.append('C');

    list.insert('D', 2);
    const character = list.arr[2];

    expect(character).toBe('D');
  });

  test('Check cloning a list', () => {
    const list = new List();
    list.append('B');
    list.append('A');
    list.append('B');
    list.append('C');

    const newList = list.clone();

    expect(list).not.toBe(newList);
    newList.arr.forEach((value, index) => {
      expect(value).toBe(list.arr[index]);
    })
  });

  test('Check clearing list', () => {
    const list = new List();
    list.append('B');
    list.append('A');
    list.append('B');
    list.append('C');

    list.clear();

    expect(list.arr.length).toBe(0);
  });

  test('Check reversing list', () => {
    const list = new List();
    list.append('B');
    list.append('A');
    list.append('B');
    list.append('C');

    list.reverse();

    expect(list.arr[0]).toBe('C');
    expect(list.arr[1]).toBe('B');
    expect(list.arr[2]).toBe('A');
    expect(list.arr[3]).toBe('B');
  });

});