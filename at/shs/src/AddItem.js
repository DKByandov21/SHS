import { useState } from "react";

function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const addItemButtonPressed = () => {
    props.addItem({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <h2 className="blue">Add an item</h2>
      </div>

      <div className="row">
        <label htmlFor="name">Nmae: </label>
        <input
          id="name"
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="price">Price: </label>
        <input
          id="price"
          type="number"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label htmlFor="type">Type: </label>
        <input
          id="type"
          type="text"
          className="form-control"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />

        <label htmlFor="brand">Brand: </label>
        <input
          id="brand"
          type="text"
          className="form-control"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <div className="row mt-3">
          <div className="col-4" />
          <div className="col-4">
            <button
              type="button"
              className="btn btn-primary"
              onClick={addItemButtonPressed}
            >
              Add Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
