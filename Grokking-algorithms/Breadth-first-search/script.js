const nodes = [0, 1, 2, 3];
const edges = [
  [0, 1],
  [1, 2],
  [1, 3],
  [3, 0],
  [3, 2]
];

const nodesA = ['A', 'B', 'C', 'D', 'F', 'E', 'G', 'H', 'I'];
const edgesA = [
  ['A', 'B'],
  ['A', 'C'],
  ['A', 'D'],
  ['B', 'E'],
  ['B', 'F'],
  ['C', 'G'],
  ['D', 'H'],
  ['D', 'I']
];

function getAdjacencyList(nodes, edges, unoriented) {
  let list = {}
  for (let i = 0; i < nodes.length; i++) {
    let key = nodes[i]
    list[key] = [];
    for (let edge of edges) {
      let [a, b] = edge;
      if (a === key) {
        list[key].push(b)
      }
      if (unoriented) {
        if (b === key) {
          list[key].push(a)
        }
      }
    }
  }
  return list;
}

function breadthFirstSearchList(list, startNode, endNode) {
  let checked = [];
  let queue = [startNode];

  while (queue.length > 0) {
    let node = queue.shift();
    checked.push(node);

    for (item of list[node]) {
      if (!checked.includes(item) && !queue.includes(item)) {

        if (item === endNode) {
          return true;
        }
        queue.push(item);
      }
    }

  }
  return false;
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

function getAdjacencyMatrix(nodes, edges, unoriented) {
  let matrix = [];
  for (let i = 0; i < nodes.length; i++) {
    let row = [];

    for (let i = 0; i < nodes.length; i++) {
      row.push(0);
    }
    matrix.push(row);
  }

  for (let edge of edges) {
    let [a, b] = edge;
    matrix[a][b] = 1;
    if (unoriented) {
      matrix[b][a] = 1;
    }
  }
  return matrix;
}

function breadthFirstSearchMatrix(matrix, startNode, endNode) {
  let checked = [];
  let queue = [startNode];

  while (queue.length > 0) {
    let node = queue.shift();
    checked.push(node);

    for (let i = 0; i < matrix[node].length; i++) {
      let neighbor = matrix[node][i];

      if (neighbor && !checked.includes(i) && !queue.includes(i)) {
        if (i === endNode) {
          return true;
        }
        queue.push(i);
      }
    }
  }
  return false;
}

const list = getAdjacencyList(nodesA, edgesA, false);
const matrix = getAdjacencyMatrix(nodes, edges, true);

console.log(list);
console.log(matrix);

console.log(breadthFirstSearchList(list, 'A', 'I'));
console.log(breadthFirstSearchMatrix(matrix, 2, 0));