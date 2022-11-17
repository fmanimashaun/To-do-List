// eslint-disable-next-line import/prefer-default-export
export const getSiblings = (e) => {
  // for collecting siblings
  const siblings = [];

  // first child of the parent node
  let sibling = e.parentNode.firstChild;

  // collecting siblings
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};