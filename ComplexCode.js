/* 
   File Name: ComplexCode.js
   
   Description: This code implements a complex algorithm for finding the shortest path in a weighted graph using the Dijkstra's algorithm.
   The graph is represented as an adjacency matrix, and the algorithm is implemented using a priority queue.

   Author: John Doe
   Created: 2021-07-01
*/

// Graph class to represent the graph and encapsulate related methods
class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjMatrix = [];
  }

  // Method to add an edge between two vertices with a weight
  addEdge(srcVertex, destVertex, weight) {
    this.adjMatrix[srcVertex][destVertex] = weight;
    this.adjMatrix[destVertex][srcVertex] = weight;
  }

  // Method to initialize the adjacency matrix with initial values
  initializeAdjMatrix() {
    for (let i = 0; i < this.vertices; i++) {
      this.adjMatrix[i] = [];
      for (let j = 0; j < this.vertices; j++) {
        this.adjMatrix[i][j] = -1;
      }
    }
  }

  // Method to find the shortest path using Dijkstra's algorithm
  findShortestPath(source) {
    const dist = new Array(this.vertices).fill(Number.MAX_SAFE_INTEGER); // Distance array
    const visited = new Array(this.vertices).fill(false); // Visited array
    dist[source] = 0;

    // Priority queue to store the vertices with their distances
    const pq = new PriorityQueue();
    pq.enqueue(source, 0);

    while (!pq.isEmpty()) {
      const currentVertex = pq.dequeue().element;
      visited[currentVertex] = true;

      for (let i = 0; i < this.vertices; i++) {
        if (
          this.adjMatrix[currentVertex][i] !== -1 &&
          !visited[i] &&
          dist[currentVertex] + this.adjMatrix[currentVertex][i] < dist[i]
        ) {
          dist[i] = dist[currentVertex] + this.adjMatrix[currentVertex][i];
          pq.enqueue(i, dist[i]);
        }
      }
    }
    return dist;
  }
}

// Priority queue class to store the vertices with their distances
class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(vertex, weight) {
    const node = { vertex, weight };
    let contain = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].weight > weight) {
        this.items.splice(i, 0, node);
        contain = true;
        break;
      }
    }

    if (!contain) {
      this.items.push(node);
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Usage example
(function run() {
  const graph = new Graph(6);
  graph.initializeAdjMatrix();
  graph.addEdge(0, 1, 7);
  graph.addEdge(0, 2, 9);
  graph.addEdge(0, 5, 14);
  graph.addEdge(1, 2, 10);
  graph.addEdge(1, 3, 15);
  graph.addEdge(2, 3, 11);
  graph.addEdge(2, 5, 2);
  graph.addEdge(3, 4, 6);
  graph.addEdge(4, 5, 9);

  const shortestDistances = graph.findShortestPath(0);

  console.log("Shortest distances from source vertex:");
  for (let i = 0; i < shortestDistances.length; i++) {
    console.log(`Node ${i}: ${shortestDistances[i]}`);
  }
})();
