/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0

    const toVisitStack = [this.root]

    while (toVisitStack.length) {
      const current = toVisitStack.pop()

      if (!current) return sum
      if (current.val) sum += current.val

      for (let child of current.children) {
        toVisitStack.push(child)
      }
    }

    return sum
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let numEvens = 0

    const toVisitStack = [this.root]

    while (toVisitStack.length) {
      const current = toVisitStack.pop()

      if (!current) return numEvens
      if (current.val % 2 === 0) numEvens++

      for (let child of current.children) {
        toVisitStack.push(child)
      }
    }

    return numEvens
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let numGreater = 0

    const toVisitStack = [this.root]

    while (toVisitStack.length) {
      const current = toVisitStack.pop()

      if (!current) return numGreater
      if (current.val > lowerBound) numGreater++

      for (let child of current.children) {
        toVisitStack.push(child)
      }
    }

    return numGreater
  }
}

module.exports = { Tree, TreeNode };


tree = new Tree(new TreeNode(6, [
  new TreeNode(2, [new TreeNode(5), new TreeNode(12), new TreeNode(8)]),
  new TreeNode(7, [new TreeNode(2), new TreeNode(45)]),
  new TreeNode(9, [new TreeNode(8), new TreeNode(6), new TreeNode(12)])
]))

tree.sumValues()