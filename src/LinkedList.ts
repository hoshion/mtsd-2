class Node {
  next: Node;
  value: string;

  constructor (value: string) {
    this.value = value;
    this.next = this;
  }
}

export class LinkedList {
  head: Node | null;

  constructor (arr: Array<string> = []) {
    this.head = null;
  }

  length(): number {
    if (!this.head) return 0;
    let counter = 1;
    let current = this.head.next;
    while (current !== this.head) {
      current = current.next;
      counter++;
    }
    return counter;
  }

  append(element: string): void {
    if (!this.head) {
      this.head = new Node(element,);
      this.head.next = this.head;
    } else {
      let current = this.head.next;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = new Node(element);
      current.next.next = this.head;
    }
  }

  insert(element: string, index: number): void {
    if (index < 0 || index > this.length()) {
      throw new Error('Invalid number');
    }
    if (index === this.length()) {
      this.append(element);
    } else {
      const previous = this.get(index - 1);
      const next = previous.next;
      previous.next = new Node(element);
      previous.next.next = next;
    }
  }

  delete(index: number): string {
    if (index < 0 || index > this.length() - 1) {
      throw new Error('Invalid number');
    }

    let value;

    if (this.length() === 1) {
      value = (this.head as Node).value;
      this.head = null;
    } else if (index === 0) {
      const last = this.get(this.length() - 1);
      const head = this.head as Node;
      value = head.value;
      this.head = head.next;
      last.next = this.head;
    } else {
      const previous = this.get(index - 1);
      value = previous.next.value;
      previous.next = previous.next.next;
    }

    return value;
  }

  deleteAll(element: string): void {
    let index = this.findFirst(element)
    while (index !== -1) {
      this.delete(index);
      index = this.findFirst(element);
    }
  }

  get(index: number): Node {
    if (index < 0 || index > this.length() - 1) {
      throw new Error('Invalid number');
    }

    let counter = 0;
    let current = this.head as Node;
    while (counter < index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  clone(): LinkedList {
    const list = new LinkedList()
    if (this.head) {
      let counter = 0;
      let current = this.head;
      while (counter < this.length()) {
        list.append(current.value);
        current = current.next;
      }
    }
    return list;
  }

  reverse(): void {
    const last = this.get(this.length() - 1);
    const newHead = new Node(last.value);
    const current = newHead;
    for (let i = this.length() - 2; i >= 0; i--) {
      newHead.next = this.get(i);
    }
    current.next = newHead;
    this.head = newHead;
  }

  findFirst(element: string): number {
    if (!this.head) return -1;
    if (this.head.value === element) return 0;

    let counter = 0;
    let current = this.head;
    while (current.value !== element && counter < this.length()) {
      counter++;
      current = current.next;
    }

    if (counter === 0) return -1;
    else return counter;
  }

  findLast(element: string): number {
    if (!this.head) return -1;
    if (this.get(this.length() - 1).value === element) return 0;

    let counter = this.length() - 1;
    let current = this.get(counter);
    while (current.value !== element && counter >= 0) {
      counter++;
      current = current.next;
    }

    if (counter === this.length() - 1) return -1;
    else return counter;
  }

  clear() {
    this.head = null;
  }

  extend(elements: LinkedList): void {
    if (!elements.head) return;

    const clone = elements.clone();
    if (!this.head) {
      this.head = clone.head;
    } else {
      const last = this.get(this.length() - 1);
      last.next = clone.head as Node;
      clone.get(clone.length() - 1).next = this.head;
    }
  }
}