function PersonList({ people, search, onDelete }) {
  const filteredPeople = people.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ul>
      {filteredPeople.map((person) => (
        <li key={person.id}>
          {person.name}
          <button onClick={() => onDelete(person.id)} className="delete-btn">
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}



const styles = {
  item: {
    marginBottom: '8px',
  },
  deleteButton: {
    marginLeft: '10px',
    color: 'red',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
};

export default PersonList;
