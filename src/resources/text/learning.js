import ArrayList from '../../components/learning-topics/ArrayList';
import BinaryTree from '../../components/learning-topics/BinaryTree';
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
      '/BinaryTree',
      '/Graph',
      '/HashMap',
      '/HashSet',
      '/Heap',
      '/LinkedList',
      '/TreeMap',
      '/TreeSet',
      '/Stack',
      '/Queue',
    ]
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
    ]
  }
];

export const LEARNING_CONTENT = {
  '/ArrayList': { 'content': ArrayList, 'group': 'Data Structures' },
  '/BinaryTree': { 'content': BinaryTree, 'group': 'Data Structures' },
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