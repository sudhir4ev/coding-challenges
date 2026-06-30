/**
 * @param {TreeNode | null} root
 * @param {number} k
 * @return {number}
 */
export default function kthSmallestElementInABst(
  root: TreeNode | null,
  k: number,
) {
  /**
   * traverse left side of the tree until no more leafs,
   */
  const results = inOrderBSTWalker(root, [], k);
  return results.pop();
}

function inOrderBSTWalker(root: TreeNode | null, result: number[], k: number) {
  if (root == null) return result;
  inOrderBSTWalker(root.left, result, k);
  if (result.length == k) return result;
  else result.push(root.val);
  inOrderBSTWalker(root.right, result, k);
  return result;
}

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(
    val: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null,
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
