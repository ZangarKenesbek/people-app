function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Поиск по имени..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

const styles = {
  input: {
    padding: '8px',
    width: '300px',
    marginBottom: '10px',
  },
};

export default SearchBar;
