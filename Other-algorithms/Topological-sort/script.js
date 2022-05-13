const nodes = [0, 1, 2, 3];
const edges = [
  [0, 3],
  [3, 1],
  [3, 2],
]

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
    let [a, b] = edge; то
    matrix[a][b] = 1;
  }
  return matrix;
}

function topologicalSort(matrix) {
  let nodeDegree = new Array(matrix.length).fill(0);
  let queue = [];
  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j]) {
        nodeDegree[j] += 1;
      }
    }
  }
  nodeDegree.filter((el, index) => {
    if (el === 0) {
      queue.push(index);
      return true;
    }
  });

  while (queue.length > 0) {
    let currentNode = queue.shift();
    result.push(currentNode);

    for (let i = 0; i < matrix[currentNode].length; i++) {
      if (matrix[currentNode][i]) {
        nodeDegree[i] -= 1;

        if (nodeDegree[i] === 0) {
          queue.push(i);
        }
      }
    }
  }
  return result;
}

const matrix = getAdjacencyMatrix(nodes, edges, false);
console.log(matrix);
console.log(topologicalSort(matrix))



