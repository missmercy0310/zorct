import {forestWest, forestEast, northOfHouse, swampNorth, westOfHouse, house, swampSouth, field, southOfHouse} from "./nodes"

class Node {
    constructor(name) {
        this.name = name;
        this.adjacents = []; // adjacency list
        this.things = [];
    }
  
    addAdjacent(node) {
        this.adjacents.push(node);
    }
  
    removeAdjacent(node) {
        const index = this.adjacents.indexOf(node);
        if(index > -1) {
            this.adjacents.splice(index, 1);
            return node;
        }
    }
  
    getAdjacents() {
        return this.adjacents;
    }
  
    isAdjacent(node) {
        return this.adjacents.indexOf(node) > -1;
    }
}

// class Graph {
//     constructor(noOfNodes) {
//         this.noOfNodes = noOfNodes;
//         this.nodes = new Map();
//     }

//     addNode(value) {
//         if(this.nodes.has(value)) {
//             return this.nodes.get(value);
//         } else {
//             const node = new Node(value);
//             this.nodes.set(value, node);
//             return node;
//         }
//     }

//     addEdge(n, e) {
//         this.nodes.get(n).push(e);
//         this.nodes.get(e).push(n);
//     }

//     printGraph() {
//         // get all the vertices
//         var get_keys = this.nodes.keys();
        
//         // iterate over the vertices
//         for (var i of get_keys) {
//             // great the corresponding adjacency list
//             // for the vertex
//             var get_values = this.nodes.get(i);
//             var conc = "";
 
//                 // iterate over the adjacency list
//                 // concatenate the values into a string
//                 for (var j of get_values)
//                     conc += j + " ";
 
//             // print the vertex and its adjacency list
//             console.log(i + " -> " + conc);
//         }
//     }
// }

class Graph {
    constructor(edgeDirection = Graph.UNDIRECTED) {
        this.nodes = new Map();
        this.edgeDirection = edgeDirection;
    }
    
    addEdge(source, destination) {
        const sourceNode = this.addVertex(source);
        const destinationNode = this.addVertex(destination);
      
        sourceNode.addAdjacent(destinationNode);
      
        if(this.edgeDirection === Graph.UNDIRECTED) {
            destinationNode.addAdjacent(sourceNode);
        }
      
        return [sourceNode, destinationNode];
    }

    addVertex(value) {
        if(this.nodes.has(value)) {
            return this.nodes.get(value);
        } else {
            const vertex = new Node(value);
            this.nodes.set(value, vertex);
            return vertex;
        }
    }

    removeVertex(value) {
        const current = this.nodes.get(value);
        if(current) {
            for (const node of this.nodes.values()) {
                node.removeAdjacent(current);
            }
        }
        return this.nodes.delete(value);
    }

    removeEdge(source, destination) {
        const sourceNode = this.nodes.get(source);
        const destinationNode = this.nodes.get(destination);
      
        if(sourceNode && destinationNode) {
            sourceNode.removeAdjacent(destinationNode);
      
            if(this.edgeDirection === Graph.UNDIRECTED) {
                destinationNode.removeAdjacent(sourceNode);
            }
        }
      
        return [sourceNode, destinationNode];
    }
}
  
Graph.UNDIRECTED = Symbol('undirected graph'); // two-ways edges
Graph.DIRECTED = Symbol('directed graph'); // one-way edges

const map = new Graph(Graph.UNDIRECTED);

map.addEdge(1, 2);
map.addEdge(1, 3);
map.addEdge(1, 4);
map.addEdge(5, 2);
map.addEdge(6, 3);
map.addEdge(7, 3);
map.addEdge(8, 4);
map.addEdge(9, 5);
map.addEdge(10, 6);

export {map, Node};