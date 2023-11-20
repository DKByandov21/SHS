import SearchBar from "./SearcBar";
import AddItem from "./AddItem";
import ItemsDisplay from "./ItemsDisplay";
import { useState } from "react";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({
    items: [],
  });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemToData = (item) => {
    let items = data["items"];
    items.push(item);
    item.id = items.length;

    fetch("http://localhost:3000/items"); 

    setData({ items: items });
    console.log(data);
  };

  const filterData = (data) => {
    const filteredData = [];

    if (!filters.name) {
      return data;
    }
    for (const item of data) {
      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      }
      if (filters.prce !== 0 && item.price > filters.price) {
        continue;
      }
      if (filters.type !== "" && item.type !== filters.type) {
        continue;
      }
      if (filters.brand !== 0 && item.brand > filters.brand) {
        continue;
      }
      filteredData.push(item);
    }
    return filteredData;
  };
  return (
    <div className="container">
      <div className="row mt-3">
        <ItemsDisplay items={filterData(data["items"])} />
      </div>
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters} />
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItemToData} />
      </div>
    </div>
  );
}

export default App;
