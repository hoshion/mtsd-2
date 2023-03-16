import { ListI } from './List.interface';
import { LinkedList } from './LinkedList';

function main() {
  let list: ListI = new LinkedList();

  const student = 'Шестеров Святослав Сергійович';
  for (const char of student) {
    list.append(char);
  }
  list.deleteAll(' ');
  list.reverse();
  console.log(stringify(list));

  const otherList: ListI = list.clone();
  list.reverse();
  list.extend(otherList);
  console.log(stringify(list));

  otherList.reverse();
  otherList.deleteAll('С');
  otherList.delete(0);
  otherList.insert('С', 7);
  otherList.insert('С', 16);
  otherList.reverse();
  otherList.append('Ш');
  otherList.reverse();
  otherList.insert(' ', otherList.findFirst('С'));
  otherList.insert(' ', otherList.findLast('С'));
  console.log(stringify(otherList));

}
main();

function stringify(list: ListI) {
  let str = '';
  for (let i = 0; i < list.length(); i++) {
    str += list.get(i);
  }
  return str;
}