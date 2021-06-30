/* eslint-disable */

export default class Stack {
  constructor() {
    this.index = 0
    this.data = {}
  }

  length() {
    return this.index
  }

  isEmpty() {
    return this.index === 0
  }

  push(value) {
    this.data[this.index] = value
    this.index++
  }

  pop() {
    const element = this.data[this.index - 1]
    delete this.data[this.index - 1]
    this.index--

    return element
  }

  getElementAtIndex(index) {
    return this.data[index]
  }

}
