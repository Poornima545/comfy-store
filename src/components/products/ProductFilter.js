import { useState } from "react";

function ProductFilter() {
  const [category, setCategory] = useState([
    "all",
    "Tables",
    "Chairs",
    "Kids",
    "Sofas",
    "Beds",
  ]);
  const [company, setCompany] = useState([
    "all",
    "Modenza",
    "Luxora",
    "Artifex",
    "Comfora",
    "Homestead",
  ]);
  const [sort, setSort] = useState(["all", "a-z", "z-a", "high", "low"]);
  const [priceRange, setPriceRange] = useState([`$1000.00`]);
  const [freeShipping, setFreeShipping] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [form, setForm] = useState({
    category: "",
    company: "",
    sortby: "",
    range: "",
    freeshipping: false,
    searchquery: "",
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e && e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" || type === "radio" ? checked : value,
    }));
  };

  // const handleChange = () => {
  //   setFreeShipping(!freeShipping);
  // };

  // const handleChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    setForm({
      category: "",
      company: "",
      sortby: "",
      range: "",
      freeshipping: "",
      searchquery: "",
    });
  }

  const handleSearch = () => {
    setSearchQuery(searchQuery);
  };

  const handleReset = () => {
    setCategory("");
    setCompany("");
    setSort("");
    setPriceRange("");
    setFreeShipping(false);
    setSearchQuery("");
  };

  return (
    <>
      <div className="product-fill">
        <form onSubmit={handleSubmit}>
          <label className="label">
            Search Product
            <br />
            <input type="searchproduct" onChange={handleChange} />
          </label>
          <label className="label">
            Select Category
            <br />
            <select
              name="category"
              className="product"
              value={form.category}
              onChange={handleChange}
            >
              {category.map((categories) => (
                <option>{categories}</option>
              ))}
            </select>
          </label>
          <label className="label">
            Select company
            <br />
            <select
              name="company"
              className="product"
              value={form.company}
              onChange={handleChange}
            >
              {company.map((categories) => (
                <option>{categories}</option>
              ))}
            </select>
          </label>
          <label className="label">
            Sort By
            <br />
            <select
              name="sortby"
              className="product"
              value={form.sortby}
              onChange={handleChange}
            ></select>
            {sort.map((categories) => (
              <option>{categories}</option>
            ))}
          </label>
          <label className="label">
            Select Price
            <input
              type="range"
              name="range"
              className="product"
              value={form.priceRange}
              onChange={handleChange}
            />
          </label>
          <label>
            Free Shipping <br />
            <input
              type="checkbox"
              name="freeshipping"
              checked={freeShipping}
              value={form.freeshipping}
              onChange={handleChange}
            />
          </label>
          <button onClick={handleSearch} className="search">
            Search
          </button>
          <button onClick={handleReset} className="reset">
            Reset
          </button>
        </form>
      </div>
    </>
  );
}

export default ProductFilter;
