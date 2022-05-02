const nodes = [0, 1, 2, 3];
const edges = [
  [0, 1, 10],
  [0, 2, 3],
  [1, 2, 4],
  [2, 3, 11]
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
  distance[0] = 0;
  let rows = matrix.length;
  let cols = matrix.length;

  for (let i = 0; i < rows; i++) {
    // Недоступные вершины не могут быть использованы в качестве транзитных точек перехода
    if (distance[i] < Infinity) {
      for (let j = 0; j < cols; j++) {
        // Например, сравнивая размер расстояния [i] + матрица [i] [j] и расстояние [j], чтобы определить, обновлять ли расстояние [j].
        if (matrix[i][j] + distance[i] < distance[j]) {
          distance[j] = matrix[i][j] + distance[i];
        }
      }
      console.log(distance);
    }
  }
  return distance
}

const matrix = getWeightMatrix(nodes, edges, true)
console.log(matrix);
console.log(Dijkstra(matrix))
