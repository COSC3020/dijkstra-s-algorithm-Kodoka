const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js') + '');

// Two nodes, one edge.
// 0:0 Source
// 1:5 0->1
var test1 = [[0, 1, 5]];
assert(JSON.stringify(dijkstra(test1, 0)) == JSON.stringify({0:0, 1:5}),
    "Test 1 failed.");

// Medium graph.
// 0:0 Source
// 1:8 0->2->1
// 2:5 0->2
// 3:9 0->2->1->3
// 4:7 0->2->4
var test2 = [[0, 2, 5],
            [2, 1, 3],
            [1, 3, 1],
            [2, 4, 2]];
assert(JSON.stringify(dijkstra(test2, 0)) == JSON.stringify(
    {0:0, 1:8, 2:5, 3:9, 4:7}), "Test 2 failed.");

// Large graph.
// 0:0 Source
// 1:2 0->1
// 2:2 0->3->2
// 3:1 0->3
// 4:5 0->1->4
// 5:5 0->3->2->5
// 6:7 0->3->2->5->6
var test3 = [[0, 1, 2],
            [0, 2, 5],
            [0, 3, 1],
            [1, 2, 2],
            [1, 4, 3],
            [2, 3, 2],
            [2, 5, 3],
            [3, 2, 1],
            [3, 5, 5],
            [4, 6, 4],
            [5, 4, 1],
            [5, 6, 2]];
assert(JSON.stringify(dijkstra(test3, 0)) === JSON.stringify(
    {0:0, 1:2, 2:2, 3:1, 4:5, 5:5, 6:7}), "Test 3 failed.");

// Graph that originates at non-zero index vertex.
// 0:7 1->2->0
// 1:0 Source
// 2:2 1->2
// 3:3 1->2->3
var test4 = [[0, 1, 3],
            [0, 2, 7],
            [1, 2, 2],
            [1, 3, 4],
            [2, 0, 5],
            [2, 3, 1],
            [3, 0, 6],
            [3, 1, 2]];
assert(JSON.stringify(dijkstra(test4, 1)) === JSON.stringify(
    {0:7, 1:0, 2:2, 3:3}), "Test 4 failed.");

// Disconnected graph.
// 0:0 Source
// 1:4 0->1
// 2:Infinity Unreachable from source
// 3:Infinity Unreachable from source
var test5 = [[0, 1, 4],
            [1, 0, 4],
            [2, 2, 0],
            [3, 3, 0]];
assert(JSON.stringify(dijkstra(test5, 0)) === JSON.stringify(
    {0:0, 1:4, 2:Infinity, 3:Infinity}), "Test 5 failed.");
