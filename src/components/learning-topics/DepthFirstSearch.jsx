import React from 'react';
import ReferenceList from '../learning-components/ReferenceList';

import { DepthFirstSearchReferences } from '../../resources/text/learning';


export default function DepthFirstSearch() {
  return (
    <>
      {/* Topic Description */}
      <p>
        Search algorithm to traverse a Tree or Graph by traversing until a leaf node or dead-end
        is reached before backtracking. A stack is used to track traversal path and assist in
        backtracking.
      </p>

      <h4 className='learning-h4'>Performace</h4>
      <p>Runtime: O(|V| + |E|)</p>
      <p>Memory: O(|V|)</p>
      <p>|V| = Verticies, |E| = Edges</p>

      <h4 className='learning-h4'>Notes</h4>
      <p>
        DFS is more memory efficient than Breadth-First Search (BFS), but DFS will not always find the
        shortest path like BFS.
      </p>
      <p>
        Limiting search depth may be nessesary for very large graphs. DFS is not practical for
        graphs that have a near infinite size.
      </p>

      <h4 className='learning-h4'>References</h4>
      <ReferenceList references={DepthFirstSearchReferences} />
    </>
  );
}