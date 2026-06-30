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
  let countSmallestFound = 0;
  let kthSmallest: number | undefined = undefined;

  function inOrderBSTWalker(root: TreeNode | null) {
    if (root == null || countSmallestFound == k) return;

    inOrderBSTWalker(root.left);

    countSmallestFound++;
    if (countSmallestFound == k) {
      kthSmallest = root.val;
      return;
    }

    inOrderBSTWalker(root.right);
  }

  inOrderBSTWalker(root);
  return kthSmallest;
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
