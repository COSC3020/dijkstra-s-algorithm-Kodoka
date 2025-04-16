// dijkstra takes graph input of edges in the form [[x, y, z], ..., ...], where
// x represents the originating vertex, y represents the distination vertex,
// and z represents the distance. sourceNode is the the initial node from which
// distances will be calculated. It then returns key/value pairs for each vertex
// and the shortest distance to said vertex.

function dijkstra(graph, sourceNode)
{
    var verticesSet = new Set();
    var vertices = [];
    var distances = [];
    var visited = new Set();

    // Get all unique vertices by iterating through graph elements, and store 
    // them vertices. Must use graph[i][0] and graph[i][1], as some vertices
    // may not have edges originating from.
    for(var i = 0; i < graph.length; i++)
    {
        verticesSet.add(graph[i][0]);
        verticesSet.add(graph[i][1]);
    }

    // Convert vertices set to an array.
    vertices = [...verticesSet];

    // For each unique vertex, except sourceNode, initial distance is Infinity,
    // sourceNode initial distance is 0.
    for(var i = 0; i <vertices.length; i++)
    {
        if(vertices[i] != sourceNode)
        {
            distances.push(Infinity);
        }
        else
        {
            distances.push(0);
        }
    }

    // Iterate through all vertices.
    while(visited.size < vertices.length)
    {
        var currentIndex = -1;
        var currentDistance = Infinity;

        // Find the nearest unvisited vertex.
        for(var i = 0; i < vertices.length; i++)
        {
            // If the vertex hasn't been visited, and the distance is less than
            // that of the current alternative...
            if(!visited.has(vertices[i]) && distances[i] < currentDistance)
            {
                currentDistance = distances[i];
                currentIndex = i;
            }
        }

        // If there are no unvisited vertices available, break.
        if(currentIndex == -1)
        {
            break;
        }

        // Get the current vertex from its index, and mark it as visited.
        var currentVertex = vertices[currentIndex];
        visited.add(currentVertex);

        // For each edge...
        for(var i = 0; i < graph.length; i++)
        {
            // If it originates from the currentVertex...
            if(graph[i][0] == currentVertex)
            {
                var neighbor = graph[i][1]; // Get neighbor.
                var distance = graph[i][2]; // Get distance to neighbor.
                var neighborIndex = vertices.indexOf(neighbor); // Get the neighbor's index.
                var newDistance = distances[currentIndex] + distance; // Calculate the potential distance.
                // If newDistance provides a shorter path, replace old distance.
                if(newDistance < distances[neighborIndex])
                {
                    distances[neighborIndex] = newDistance;
                }
            }
        }
    }

    // Make key/value pairs for each vertcex, and it's shortest distance.
    var results = {};
    for(var i = 0; i < vertices.length; i++)
    {
        results[vertices[i]] = distances[i];
    }

    return results;
}
