import { useState } from "react";

function ProductForm() {
  const [categories] = useState([
    "all",
    "Tables",
    "Chairs",
    "Kids",
    "Sofas",
    "Beds",
  ]);
  const [companies] = useState([
    "all",
    "Modenza",
    "Luxora",
    "Artifex",
    "Comfora",
    "Homestead",
  ]);
  const [sort] = useState(["all", "a-z", "z-a", "high", "low", "medium"]);
  const [form, setForm] = useState({
    searchproduct: "",
    category: "",
    company: "",
    sortby: "",
    range: "",
    freeshipping: false,
  });

  const handleChange = (ev) => {
    const { name, type, value, checked } = ev && ev.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" || type === "radio" ? checked : value,
    }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
    setForm({
      searchproduct: "",
      categories: "",
      company: "",
      sortby: "",
      range: "",
      freeshipping: "",
    });
  }

  return (
    <div className="product-form">
      <form onSubmit={handleSubmit}>
        <section className="choice">
          <label>
            Search Product
            <br />
            <input
              className="searchproduct"
              type="text"
              name="searchproduct"
              onChange={handleChange}
              value={form.searchproduct}
            />
          </label>
          <label>
            Select Category
            <br />
            <select
              className="category"
              onChange={handleChange}
              name="category"
              value={form.category}
            >
              {categories.map((category) => (
                <option>{category}</option>
              ))}
            </select>
          </label>
          <label>
            Select Company
            <br />
            <select
              className="company"
              onChange={handleChange}
              name="company"
              value={form.company}
            >
              {companies.map((category) => (
                <option>{category}</option>
              ))}
            </select>
          </label>
          <label>
            Sort By
            <br />
            <select
              className="sort"
              onChange={handleChange}
              name="sortby"
              value={form.sortby}
            >
              {sort.map((category) => (
                <option>{category}</option>
              ))}
            </select>
          </label>
        </section>
        <section className="range">
          <label>
            Select Price
            <br />
            <input
              type="range"
              name="range"
              className="range-price"
              onChange={handleChange}
              value={form.range}
            />
          </label>
          <label>
            Free Shipping <br />
            <input
              className="check"
              type="checkbox"
              name="freeshipping"
              onChange={handleChange}
              value={form.freeshipping}
            />
          </label>
          <button className="search">search</button>
          <button type="reset" className="reset">
            reset
          </button>
        </section>
      </form>
    </div>
  );
}

export default ProductForm;
