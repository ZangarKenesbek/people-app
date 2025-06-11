import SearchBar from "./components/SearchBar";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import { useState, useEffect } from "react";

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
    <div style={styles.container}>
      <h1>Список людей</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <PersonForm name={name} setName={setName} onAdd={handleAddPerson} />
      <PersonList
        people={people}
        search={search}
        onDelete={handleDeletePerson}
      />
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
  },
};

export default App;
