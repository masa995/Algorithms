// при условии, что мы имеем дело со смежным списком
// например, таким: adj = {A:[B,C,D], B:[E,F], ... }
function bfs(adj, s, t) {
  // adj - смежный список
  // s - начальная вершина
  // t - пункт назначения

  // инициализируем очередь
  let queue = []
  // добавляем s в очередь
  queue.push(s)
  // помечаем s как посещенную вершину во избежание повторного добавления в очередь
  s.visited = true
  while (queue.length > 0) {
    // удаляем первый (верхний) элемент из очереди
    let v = queue.shift()
    // abj[v] - соседи v
    for (let neighbor of adj[v]) {
      // если сосед не посещался
      if (!neighbor.visited) {
        // добавляем его в очередь
        queue.push(neighbor)
        // помечаем вершину как посещенную
        neighbor.visited = true
        // если сосед является пунктом назначения, мы победили
        if (neighbor === t) return true
      }
    }
  }
  // если t не обнаружено, значит пункта назначения достичь невозможно
  return false
}

const adj = {
  A: ['B', 'C', 'D'],
  B: ['E', 'F'],
  C: ['G'],
  D: ['H', 'I']
};
console.log(bfs(adj, 'A', 'G'));
console.log(bfs(adj, 'C', 'I'));