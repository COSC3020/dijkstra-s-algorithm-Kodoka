# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## My Runtime Analysis

First my code iterates over $m$ edges, as it adds source and destination vertices
to a set, $\Theta(m)$.  

Then we loop over $n$ unique vertices, to iitialize the distance array, $\Theta(n)$.  

Once we have everything set up, we iterate through our $n$ vertices, until each
one has been visited. During each iteration, we work through $n$ vertices while
trying to find the nearest unvisited vertex. Additionally we check our $m$ edges
working to find all edges originating from our current vertex, $\Theta(m)$. Since the
while loop runs up to $n$ times, during which we perform $n + m$ work, we get
$\Theta(n \cdot (n + m)) = \Theta(n^2 + nm)$  

Finally we work through $n$ vertices making our key/value pairs for the best
distance, $\Theta(n)$.  

Altogether that means my code does $\Theta(m) + \Theta(n) + \Theta(n^2 + nm) +
\Theta(n)$ work. Not accounting for lower order terms or constants my code has
a runtime complexity of $\Theta(n^2)$  

## Sources

I used the spread operator you showed us some weeks back. 😎  

I used the following site to help plan my code:  
https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/#  

I watched the following video to help with understanding Dijkstra's conceptually:  
https://www.youtube.com/watch?v=EFg3u_E6eHU  

I reviewed cniemitalo's(commit b4886b2) test code to help get started writing my own:  
https://github.com/COSC3020/dijkstra-s-algorithm-cniemitalo/blob/main/code.test.js  

## Plagiarism Notice

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
