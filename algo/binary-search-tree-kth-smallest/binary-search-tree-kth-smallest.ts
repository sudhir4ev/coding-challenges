/**
 * @param {TreeNode | null} root
 * @param {number} k
 * @return {number}
 */
export default function kthSmallestElementInABst(root: TreeNode | null, k: number) {
  throw 'Not implemented!';
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