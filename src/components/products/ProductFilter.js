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
  const [sortBy, setSortBy] = useState(["all", "a-z", "z-a", "high", "low"]);
  const [priceRange, setPriceRange] = useState();
  const [freeShipping, setFreeShipping] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [form, setForm] = useState({
    category: "",
    company: "",
    sortby: "",
    range: "",
    freeshipping: "",
    searchquery: "",
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e && e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type == "checkbox" || type == "radio" ? checked : value,
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
    setSortBy("");
    setPriceRange(1000);
    setFreeShipping(false);
    setSearchQuery("");
  };

  return (
    <>
      <div className="product-fill">
        <form onSubmit={handleSubmit}>
          <label>
            Search Product
            <input
              type="searchproduct"
              name="searchproduct"
              onChange={handleChange}
              value={form.searchproduct}
            />
          </label>
          <label>
            Select Category
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              {category.map((categories) => (
                <option>{categories}</option>
              ))}
            </select>
          </label>
          <label>
            Select company
            <select name="company" value={form.company} onChange={handleChange}>
              {company.map((categories) => (
                <option>{categories}</option>
              ))}
            </select>
          </label>
          <label>
            Sort By
            <select
              name="sortby"
              value={sortBy}
              onChange={handleChange}
            ></select>
            {sortBy.map((categories) => (
              <option>{categories}</option>
            ))}
          </label>
          <label>
            Select Price
            <input
              type="range"
              name="pricerange"
              value={form.priceRange}
              onChange={handleChange}
            />
          </label>
          <label>
            Free Shipping
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
