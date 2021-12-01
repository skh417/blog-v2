export function sortPosts(a, b) {
  const aTimeStamp = Date.parse(a.frontmatter.date),
    bTimeStamp = Date.parse(b.frontmatter.date);

  const compare = aTimeStamp - bTimeStamp;

  if (compare > 0) {
    return 1;
  }

  if (compare < 0) {
    return -1;
  }

  return 0;
}
