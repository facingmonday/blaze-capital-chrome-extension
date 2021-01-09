import React, { useEffect } from 'react';

const ListSelect = ({ activeList, lists, fetchLists, updateActiveAlert }) => {
  useEffect(() => {
    if (lists?.length) {
      updateActiveAlert({ list: lists[0]._id });
    } else {
      fetchLists();
    }
  }, [lists.length]);

  const handleChange = (e) => updateActiveAlert({ list: e.target.value });
  return (
    <select className="form-control" onChange={handleChange}>
      {lists.map((list) => (
        <option key={list._id} value={list._id}>
          {list.name}
        </option>
      ))}
    </select>
  );
};

export default ListSelect;
