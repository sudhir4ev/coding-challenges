import binaryTreeRebuildingFromTraversals from './binary-tree-rebuilding-from-traversals';
import submitTestCases from './submit.tests.json';

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function serializeTree(root: TreeNode | null): (number | null)[] {
  const result: (number | null)[] = [];
  if (root === null) {
    return result;
  }

  const nodeQueue: (TreeNode | null)[] = [];
  nodeQueue.push(root);

  while (nodeQueue.length > 0) {
    const currentNode = nodeQueue.shift();

    // Check if currentNode is not undefined
    if (currentNode !== undefined) {
      if (currentNode !== null) {
        result.push(currentNode.val);
        nodeQueue.push(currentNode.left);
        nodeQueue.push(currentNode.right);
      } else {
        result.push(null);
      }
    }
  }

  // Remove trailing `null`s from the result
  while (result.length > 0 && result[result.length - 1] == null) {
    result.pop();
  }

  return result;
}

describe('binaryTreeRebuildingFromTraversals', () => {
  (submitTestCases as any[]).forEach((example: any) => {
    test(`preorder = ${example.input[0][1]}, inorder = ${example.input[1][1]}`, () => {
      expect(
        serializeTree(
          binaryTreeRebuildingFromTraversals(
            example.input[0][1],
            example.input[1][1],
          ),
        ),
      ).toStrictEqual(example.output);
    });
  });
});
