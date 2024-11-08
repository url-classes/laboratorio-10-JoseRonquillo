import { RBTree } from "./rbt";

const myRBTree: RBTree = new RBTree();
myRBTree.insert(7);
myRBTree.insert(15);
myRBTree.insert(11);
myRBTree.insert(20);
myRBTree.insert(30);
myRBTree.insert(50);
myRBTree.insert(45);
myRBTree.printAll();
myRBTree.search(52);
myRBTree.inorder();

//Jose Antonio Ronquillo Meza 1547223
