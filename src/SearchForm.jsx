import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "./context";
const url =
  "https://api.unsplash.com/search/photos/?client_id=HJPjPjVOVXaynmvI3CLSuWqGp43fXRFu4v8apEWkP4U";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    console.log(searchValue);
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["unsplash"],
  //   queryFn: () => fetch(`${url}&query=${input}`).then((res) => res.json()),
  // });
  // console.log(data);
  return (
    <section>
      <h1 className="title">unsplash images</h1>

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
