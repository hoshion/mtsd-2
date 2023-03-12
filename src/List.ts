export class List {
  arr: Array<string>;

  constructor () {
    this.arr = [];
  }

  length(): number {
    return this.arr.length;
  }

  append(element: string): void {
    this.arr.push(element);
  }

  insert(element: string, index: number): void {
    if (index < 0 || index > this.arr.length) {
      throw new Error('Invalid number');
    }

    this.arr.splice(index, 0, element);
  }

  delete(index: number): string {
    if (index < 0 || index > this.arr.length - 1) {
      throw new Error('Invalid number');
    }

    return this.arr.splice(index, 1)[0];
  }

  deleteAll(element: string): void {
    let index = this.arr.indexOf(element);
    while (index !== -1) {
      this.delete(index);
      index = this.arr.indexOf(element);
    }
  }

  get(index: number): string {
    if (index < 0 || index > this.arr.length - 1) {
      throw new Error('Invalid number');
    }

    return this.arr[index];
  }

  clone(): Array<string> {
    return [...this.arr];
  }

  reverse(): void {
    this.arr.reverse();
  }

  findFirst(element: string): number {
    return this.arr.indexOf(element);
  }

  findLast(element: string): number {
    return this.arr.lastIndexOf(element);
  }

  clear() {
    this.arr.length = 0;
  }

  extend(elements: Array<string>): void {
    this.arr = [...this.arr, ...elements];
  }

}