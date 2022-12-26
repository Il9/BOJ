const fs = require('fs');

const inputString = fs.readFileSync('/dev/stdin').toString().trim();
const input = inputString.split('\n');

const N = Number(input.shift());
const P = Number(input.shift());
const pairs = input;

class Graph {
  id;
  connected = new Set();
  visited = false;

  constructor(id) {
    this.id = id;
  }

  connect(graph) {
    this.connected.add(graph);
  }
}

const map = new Map();

for (let i = 0; i < P; i++) {
  const [base, compare] = pairs.at(i).split(' ').map(Number);

  const baseGraph = map.get(base) ?? map.set(base, new Graph(base)).get(base);
  const compareGraph = map.get(compare) ?? map.set(compare, new Graph(compare)).get(compare);

  baseGraph.connect(compareGraph);
  compareGraph.connect(baseGraph);

  map.set(compare, compareGraph);
}

let answer = 0;

const visit = graph => {
  if (graph.visited) {
    return;
  }

  graph.visited = true;
  answer++;

  graph.connected.forEach(visit);
};

visit(map.get(1));
console.log(answer - 1);
