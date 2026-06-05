/**
 * @param {Element} element
 * @param {string} property
 * @param {string} value
 * @return {Array<Element>}
 */
export default function getElementsByStyle(element, key, value) {
  return Array.from(element.children).flatMap((child) => {
    
    const computedStyles = window.getComputedStyle(child)
    const isMatch = computedStyles[key] === value;
    
    const matchedEl = isMatch ? [child] : [];
    
    const decendentMatches = getElementsByStyle(child, key, value);
    
    return [...matchedEl, ...decendentMatches];
  });
}
