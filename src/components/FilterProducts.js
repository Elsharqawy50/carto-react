import React, { useState } from "react";
import UpIcon from "./icons/UpIcon";
import DownIcon from "./icons/DownIcon";
import UpDownIcon from "./icons/UpDownIcon";
import { useDispatch } from "react-redux";
import { ProductsActions } from "../store/ProductsSlice";
import { Form, InputGroup } from "react-bootstrap";

const FilterProducts = ({ onSearch }) => {
  const dispatch = useDispatch();
  const [activeSort, setActiveSort] = useState(1);
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="d-flex align-items-center justify-content-between px-3 mb-4">
      <Form.Group>
        <InputGroup>
          <InputGroup.Text id="inputGroupPrepend">🔎</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="search title or category ..."
            aria-describedby="inputGroupPrepend"
            onChange={(e) => {
              setSearchInput(e.target.value);
              dispatch(ProductsActions.search(e.target.value));
              setActiveSort(1);
              onSearch();
            }}
            value={searchInput}
          />
        </InputGroup>
      </Form.Group>

      <div className="d-flex align-items-center gap-3">
        <UpDownIcon
          className={`${activeSort === 1 && "active"}`}
          onClick={() => {
            dispatch(ProductsActions.reset());
            setActiveSort(1);
          }}
        />
        <UpIcon
          className={`${activeSort === 2 && "active"}`}
          onClick={() => {
            dispatch(ProductsActions.sort("increase"));
            setActiveSort(2);
          }}
        />
        <DownIcon
          className={`${activeSort === 3 && "active"}`}
          onClick={() => {
            dispatch(ProductsActions.sort("decrease"));
            setActiveSort(3);
          }}
        />
      </div>
    </div>
  );
};

export default FilterProducts;
