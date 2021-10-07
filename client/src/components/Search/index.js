import { Input, AutoComplete } from 'antd';
import React, { useState, useEffect } from 'react';
import './Search.css';
import { useHistory } from 'react-router-dom';

const Complete = () => {
  const history = useHistory();
  const [query, setQuery] = useState(' ');
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (query !== ' ') {
      fetch(`/api/v1/search/${query}`, { mode: 'cors' })
        .then((result) => result.json())
        .then((data) => data.map(({ id, title }) => ({ value: id, label: title })))
        .then((data) => setProduct(data))
        .catch((err) => <p>{err}</p>);
    }
  }, [query]);

  const onSearch = (value) => {
    setQuery(value);
  };

  const onSelect = (value) => {
    history.push(`/product/${value}`);
  };

  return (
    <>
      <AutoComplete
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={250}
        style={{ width: 250 }}
        options={product}
        onSelect={onSelect}
      >
        <Input.Search
          placeholder="Search for a product"
          onSearch={onSearch}
          allowClear
        />
      </AutoComplete>
    </>
  );
};

export default Complete;
