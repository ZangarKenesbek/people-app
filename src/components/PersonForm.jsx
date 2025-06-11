function PersonForm({ name, setName, onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введите имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

const styles = {
  form: {
    marginBottom: '20px',
  },
  input: {
    padding: '8px',
    width: '300px',
    marginRight: '10px',
  },
  button: {
    padding: '8px 16px',
  },
};

export default PersonForm;
