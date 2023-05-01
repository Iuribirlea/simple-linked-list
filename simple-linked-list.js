'use strict';

class Element {
  #value = null;
  #next = null;

  /**
   * The constructor function for the class Element.
   * @param {Number} value Set the value of the instance
   * @return The object that is created when the constructor function is called
   */
  constructor(value) {
    this.#value = value;
  }

  /**
   * The value function returns the value of the private property #value.
   * @return The value of the instance variable #value
   */
  get value() {
    return this.#value;
  }

  /**
   * The next function returns the next node in the linked list.
   * @return The next node in the list
   */
  get next() {
    return this.#next;
  }

  /**
   * @param {Element} nextValue Set the value of the next property
   */
  set next(nextValue){
    this.#next = nextValue;
  }
}

class List {
  #head = null;
  #length = 0;

  /**
   * The constructor function for the linked list .
   * @param {Array} values Create an array of Elements
   * @return A new linked list
   *
   */
  constructor(values) {
    if (Array.isArray(values)) {
      for (const idx in values) {
        this.add(new Element(values[idx]));
      }
    }
  }

  /**
   * The add function adds a new element to the list.
   * @param nextValue Add a new node to the linked list
   * @return The linked list itself
   */
  add(nextValue) {
    if (nextValue instanceof Element) {

      if (this.head !== null) {
        nextValue.next = this.head
      }

      this.#head = nextValue;
      this.#length++;
    }
    return this;
  }

  /**
   * @return The length of the linked list
   */
  get length(){
    return this.#length;
  }

  /**
   * @return The first node in the linked list
   */
  get head() {
    return this.#head;
  }

  /**
   * The toArray function returns an array of all the values in the linked list.
   * @return An array of the values in the linked list
   */
  toArray() {
    const result = [];
    let current = this.head;

    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }

  /**
   * The reverse function reverses the order of the nodes in a linked list.
   * @return The reversed linked list
   */
  reverse() {
    let prev = null;
    let current = this.head;

    while (current !== null) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.#head = prev;

    return this;
  }
}
export { List, Element}