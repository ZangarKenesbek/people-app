import SearchBar from "./components/SearchBar";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import { useState, useEffect } from "react";
import "./App.css"; // не забудь подключить стили

function App() {
  const [people, setPeople] = useState(() => {
    const saved = localStorage.getItem("people");
    return saved ? JSON.parse(saved) : [];
  });
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people));
  }, [people]);

  const handleAddPerson = () => {
    if (name.trim() === "") return;
    const newPerson = { id: Date.now(), name: name.trim() };
    setPeople([newPerson, ...people]);
    setName("");
  };

  const handleDeletePerson = (id) => {
    setPeople(people.filter((p) => p.id !== id));
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <h1>Список людей</h1>
        <input
          type="text"
          placeholder="Поиск по ID или имени..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      {/* Main */}
      <main className="app-main">
        <ul className="people-list">
          {people
            .filter(
              (person) =>
                person.name.toLowerCase().includes(search.toLowerCase()) ||
                person.id.toString().includes(search)
            )
            .map((person) => (
              <li key={person.id}>
                {person.name} (ID: {person.id})
                <button
                  className="rename-button"
                  onClick={() => handleDeletePerson(person.id)}
                >
                  Удалить
                </button>
              </li>
            ))}
        </ul>
      </main>

      {/* Add user form */}
      <footer className="app-footer">
        <input
          type="text"
          placeholder="Введите имя"
          className="add-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="add-button" onClick={handleAddPerson}>
          Добавить
        </button>
      </footer>
    </div>
  );
}

export default App;
