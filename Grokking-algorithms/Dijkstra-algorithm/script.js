const nodes = [0, 1, 2, 3, 4];

const edges = [
  [0, 1, 10],
  [1, 3, 20],
  [2, 1, 1],
  [3, 2, 1],
  [3, 4, 30]
]

function getWeightMatrix(nodes, edges, unoriented) {
  let matrix = [];
  for (let i = 0; i < nodes.length; i++) {
    let row = [];

    for (let j = 0; j < nodes.length; j++) {
      row.push(0);
    }
    matrix.push(row);
  }

  for (elem of edges) {
    let [a, b, weight] = elem;
    matrix[a][b] = weight;

    if (unoriented) {
      matrix[b][a] = weight;
    }
  }
  return matrix;
}

function Dijkstra(matrix, startNode = 0) {
  let distance = new Array(matrix.length).fill(Infinity);
  let parentNode = new Array(matrix.length).fill(null);
  let checked = [];
  let queue = [startNode];
  distance[startNode] = 0;

  while (queue.length > 0) {
    let currentNode = queue.shift();
    for (let i = 0; i < matrix[currentNode].length; i++) {
      let weight = matrix[currentNode][i];

      if (weight && (weight + distance[currentNode] < distance[i])) {
        distance[i] = weight + distance[currentNode];
        parentNode[i] = currentNode;
      }
    }
    checked.push(currentNode);

    let min = Infinity;
    let minIndex = null;
    for (let i = 0; i < distance.length; i++) {
      if (!checked.includes(i) && distance[i] < min) {
        min = distance[i];
        minIndex = i;
      }
    }
    if (minIndex !== null) {
      queue.push(minIndex);
    }
  }
  return {
    parentNode: parentNode,
    distance: distance
  };
}

const matrix = getWeightMatrix(nodes, edges, false)
console.log(matrix);
console.log(Dijkstra(matrix))
