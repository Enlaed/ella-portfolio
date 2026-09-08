export function TagList({ tags }: { tags: readonly string[] }) { return <ul className="tag-list">{tags.map((tag) => <li className="tag-list__item" key={tag}>{tag}</li>)}</ul>; }
