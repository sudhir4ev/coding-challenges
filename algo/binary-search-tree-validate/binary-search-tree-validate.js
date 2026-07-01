/**
 * @param {TreeNode | null} root
 * @return {boolean}
 */
export default function binarySearchTreeValidate(root) {
  let isValid = true;
  
  function bstChecker(root, lmin, lmax) {
    if (!root) return;

    if (
      (lmin != null && root.val <= lmin) ||
      (lmax != null && root.val >= lmax)
    ) {
      isValid = false;
      return;
    }

    bstChecker(root.left, lmin, root.val);

    bstChecker(root.right, root.val, lmax);
  }

  bstChecker(root, null, null);

  return isValid;
}
