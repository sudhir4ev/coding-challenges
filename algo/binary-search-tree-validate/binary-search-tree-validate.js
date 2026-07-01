/**
 * @param {TreeNode | null} root
 * @return {boolean}
 */
export default function binarySearchTreeValidate(root) {
  let isValid = true;

  /**
 *    10
     /  \
    5    15
        /  \
       6    20
      /  \
     3    7
 */
  function bstChecker(root, lmin, lmax) {
    if (!root) return;

    if (root.left) {
      if (
        root.left.val >= root.val ||
        (lmin != null && root.left.val <= lmin) ||
        (lmax != null && root.left.val >= lmax)
      ) {
        isValid = false;
        return;
      }
      bstChecker(root.left, lmin, root.val);
    }

    if (root.right) {
      if (
        root.right.val <= root.val ||
        (lmin != null && root.right.val <= lmin) ||
        (lmax != null && root.right.val >= lmax)
      ) {
        isValid = false;
        return;
      }
      bstChecker(root.right, root.val, lmax);
    }
  }

  bstChecker(root, null, null);

  return isValid;
}
