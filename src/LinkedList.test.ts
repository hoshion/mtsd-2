import { LinkedList } from './LinkedList';
import { List } from './List';

describe('Testing circular linked list', () => {
  test('Checking adding of head', () => {
    const list = new LinkedList();

    list.append('A');

    expect(list.head).not.toBeNull();
    expect(list.head?.next).toBe(list.head);
    expect(list.head?.value).toBe('A');
  });

  test('Check adding of head and its child', () => {
    const list = new LinkedList();

    list.append('A');
    list.append('B');

    expect(list.head?.next).not.toBe(list.head);
    expect(list.head?.next.value).toBe('B');
    expect(list.head?.next.next).toBe(list.head);
  });

  test('Check length of the list', () => {
    const list = new LinkedList();
    list.append('A');
    list.append('B');
    list.append('С');

    const length = list.length();

    expect(length).toBe(3);
  });

  test('Check length of empty list', () => {
    const list = new LinkedList();

    const length = list.length();

    expect(length).toBe(0);
  });

  test('Check getting of the element by index', () => {
    const list = new LinkedList();
    list.append('A');
    list.append('B');
    list.append('С');

    const element = list.get(1);
    const element2 = list.get(0);

    expect(element).toBe('B');
    expect(element2).toBe('A');
  });

  test('Check deleting of the head of list', () => {
    const list = new LinkedList();
    list.append('A');

    const value = list.delete(0);

    expect(value).toBe('A');
    expect(list.head).toBeNull();
  })

  test('Check deleting of the element of list', () => {
    const list = new LinkedList();
    list.append('A');
    list.append('B');

    const value = list.delete(1);

    expect(value).toBe('B');
    expect(list.head).toBe(list.head?.next);
  });

  test('Check inserting the element', () => {
    const list = new LinkedList();
    list.append('A');
    list.append('B');

    list.insert('C', 1);

    const value1 = list.get(1);
    const value2 = list.get(2);
    expect(value1).toBe('C');
    expect(value2).toBe('B');
  });

  test('Check reversing of the list', () => {
    const list = new LinkedList();
    list.append('A');
    list.append('B');
    list.append('C');
    list.append('B');

    list.reverse();

    expect(list.get(3)).toBe('A');
    expect(list.get(2)).toBe('B');
    expect(list.get(1)).toBe('C');
    expect(list.get(0)).toBe('B');
  });

  test('Check finding first index by value', () => {
    const list = new LinkedList();
    list.append('A');
    list.append('B');
    list.append('C');
    list.append('B');
    list.append('D');

    const index = list.findFirst('B');

    expect(index).toBe(1);
  });

  test('Check finding last index by value', () => {
    const list = new LinkedList();
    list.append('A');
    list.append('B');
    list.append('C');
    list.append('B');
    list.append('D');

    const index = list.findLast('B');

    expect(index).toBe(3);
  });

  test('Check deleting all elements by value', () => {
    const list = new LinkedList();
    list.append('A');
    list.append('B');
    list.append('C');
    list.append('B');
    list.append('D');

    list.deleteAll('B');

    expect(list.length()).toBe(3);
  });

  test('Check cloning the list', () => {
    const list = new LinkedList();
    list.append('A');
    list.append('B');

    const clone = list.clone();

    expect(clone.head).not.toBe(list.head);
    expect(clone.head?.next).not.toBe(list.head?.next);
    expect(clone.get(0)).toBe(list.get(0));
    expect(clone.get(1)).toBe(list.get(1));
  });

  test('Check clearing the list', () => {
    const list = new LinkedList();
    list.append('A');
    list.append('B');

    list.clear();

    expect(list.length()).toBe(0);
  });

  test('Check extending the list', () => {
    const list = new LinkedList();
    list.append('A');
    list.append('B');
    const extendingList = new LinkedList();
    list.append('C');
    list.append('D');

    list.extend(extendingList);

    expect(list.get(2)).toBe('C');
    expect(list.get(3)).toBe('D');
  });


});