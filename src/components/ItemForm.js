import React from "react";

function ItemForm(props) {
  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category"  onChange={props.onhandleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button onSubmit={props.onItemFormSubmit} type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
