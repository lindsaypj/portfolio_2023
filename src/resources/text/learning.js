import ArrayList from '../../components/learning-topics/ArrayList';
import Graph from '../../components/learning-topics/Graph';
import HashMap from '../../components/learning-topics/HashMap';
import HashSet from '../../components/learning-topics/HashSet';
import Heap from '../../components/learning-topics/Heap';
import LinkedList from '../../components/learning-topics/LinkedList';
import TreeMap from '../../components/learning-topics/TreeMap';
import TreeSet from '../../components/learning-topics/TreeSet';
import Stack from '../../components/learning-topics/Stack';
import Queue from '../../components/learning-topics/Queue';
import BellmanFord from '../../components/learning-topics/BellmanFord';
import BinarySearch from '../../components/learning-topics/BinarySearch';
import BreadthFirstSearch from '../../components/learning-topics/BreadthFirstSearch';
import DepthFirstSearch from '../../components/learning-topics/DepthFirstSearch';
import Dijkstra from '../../components/learning-topics/Dijkstra';
import FloodFill from '../../components/learning-topics/FloodFill';
import HeapSort from '../../components/learning-topics/HeapSort';
import HuffmanCoding from '../../components/learning-topics/HuffmanCoding';
import MergeSort from '../../components/learning-topics/MergeSort';
import QuickSort from '../../components/learning-topics/QuickSort';
import UnionFind from '../../components/learning-topics/UnionFind';
import DefaultTopic from '../../components/learning-topics/DefaultTopic';

export const LEARNING_TOPICS = [
  {
    'name': 'Data Structures',
    'contents': [
      '/ArrayList',
      '/Graph',
      '/HashMap',
      '/HashSet',
      '/Heap',
      '/LinkedList',
      '/TreeMap',
      '/TreeSet',
      '/Stack',
      '/Queue',
    ],
    'complete': {
      '/ArrayList': true,
    }
  },
  {
    'name': 'Algorithms',
    'contents': [
      '/BellmanFord',
      '/BinarySearch',
      '/BreadthFirstSearch',
      '/DepthFirstSearch',
      '/Dijkstra',
      '/FloodFill',
      '/HeapSort',
      '/HuffmanCoding',
      '/MergeSort',
      '/QuickSort',
      '/UnionFind',
    ],
    'complete': {
      '/DepthFirstSearch': true,
    }
  }
];

export const LEARNING_CONTENT = {
  '/ArrayList': { 'content': ArrayList, 'group': 'Data Structures' },
  '/Graph': { 'content': Graph, 'group': 'Data Structures' },
  '/HashMap': { 'content': HashMap, 'group': 'Data Structures' },
  '/HashSet': { 'content': HashSet, 'group': 'Data Structures' },
  '/Heap': { 'content': Heap, 'group': 'Data Structures' },
  '/LinkedList': { 'content': LinkedList, 'group': 'Data Structures' },
  '/TreeMap': { 'content': TreeMap, 'group': 'Data Structures' },
  '/TreeSet': { 'content': TreeSet, 'group': 'Data Structures' },
  '/Stack': { 'content': Stack, 'group': 'Data Structures' },
  '/Queue': { 'content': Queue, 'group': 'Data Structures' },
  '/BellmanFord': { 'content': BellmanFord, 'group': 'Algorithms' },
  '/BinarySearch': { 'content': BinarySearch, 'group': 'Algorithms' },
  '/BreadthFirstSearch': { 'content': BreadthFirstSearch, 'group': 'Algorithms' },
  '/DepthFirstSearch': { 'content': DepthFirstSearch, 'group': 'Algorithms' },
  '/Dijkstra': { 'content': Dijkstra, 'group': 'Algorithms' },
  '/FloodFill': { 'content': FloodFill, 'group': 'Algorithms' },
  '/HeapSort': { 'content': HeapSort, 'group': 'Algorithms' },
  '/HuffmanCoding': { 'content': HuffmanCoding, 'group': 'Algorithms' },
  '/MergeSort': { 'content': MergeSort, 'group': 'Algorithms' },
  '/QuickSort': { 'content': QuickSort, 'group': 'Algorithms' },
  '/UnionFind': { 'content': UnionFind, 'group': 'Algorithms' },
  '': { 'content': DefaultTopic, 'group': '' },
};



////    RUNTIME TABLES    ////

export const ArrayListRuntimes = [
  {'name': 'get()', 'runtime': 'O(1)'},
  {'name': 'add()', 'runtime': 'O(1) (Amortized)'},
  {'name': 'remove()', 'runtime': 'O(n)'},
  {'name': 'indexOf()', 'runtime': 'O(n)'},
  {'name': 'size()', 'runtime': 'O(1)'},
];

// export const SearchTreeRuntimes = [
//   {'name': 'get()', 'runtime': 'O(1)'},
//   {'name': 'add()', 'runtime': 'O(1) (Amortized)'},
//   {'name': 'remove()', 'runtime': 'O(n)'},
//   {'name': 'indexOf()', 'runtime': 'O(n)'},
//   {'name': 'size()', 'runtime': 'O(1)'},
// ];



////    REFERENCES    ////

export const ArrayListReferences = [
  {
    'prefix': 'Java',
    'displayText': 'Oracle Documentation (Java 8)',
    'link': 'https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html'
  },
  {
    'prefix': 'JavaScript',
    'displayText': 'MDN Web Docs JS Array',
    'link': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'
  },
];
export const DepthFirstSearchReferences = [
  {
    'prefix': 'Wikipedia',
    'displayText': 'Depth-first search',
    'link': 'https://en.wikipedia.org/wiki/Depth-first_search'
  },
  {
    'prefix': 'Stanford Lecture',
    'displayText': 'Graphs, DFS and Topological Sort',
    'link': 'https://web.stanford.edu/class/archive/cs/cs161/cs161.1166/lectures/lecture10.pdf'
  }
]


////    GLOSSARY TERMS    ////

export const Glossary = {
  'ArrayList': 'a list of elements stored as a dynamically resizing array.',
  'BinaryTree': 'a tree where each node has a maximum of 2 child nodes.',
  'Complete tree': 'a tree in which all levels are fully filled, except for possibly the last level, which is filled from left to right.',
  'Full tree': 'a tree in which all nodes are leaf nodes or have the max number of child nodes.',
  'Graph': 'a non-linear collection of verticies and edges which together simulate the relationship between values.',
  'Leaf node': 'a tree node with no child nodes.',
  'LinkedList': 'a sequence of nodes containing data and a reference to the next node in the list.',
  'Node': 'an element within a network that defines its relation to other elements in the network. Also refered to as a Vertex in Graph Theory.',
};