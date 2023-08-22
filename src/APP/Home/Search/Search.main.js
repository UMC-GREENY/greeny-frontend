function Search() {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  if (!searchQuery.trim()) {
    setFilteredPosts([]);
    return;
  }

  const lowercaseSearchQuery = searchQuery.toLowerCase();

  const filtered = userPosts.filter((post) => {
    const lowercaseTitle = post.title ? post.title.toLowerCase() : '';

    return lowercaseTitle.includes(lowercaseSearchQuery);
  });

  setFilteredPosts(filtered);
}
