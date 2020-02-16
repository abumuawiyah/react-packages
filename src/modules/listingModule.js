import React, { createContext, useReducer, useContext } from "react";

const ListingContext = createContext({});
const initialState = {
  selectedTag: ""
};
const FILTER_LIST = "FILTER_LIST";

const reducer = (state, action) => {
  const { type, selectedTag = "", tasks = [] } = action;
  switch (type) {
    case FILTER_LIST:
      return {
        ...state,
        selectedTag,
        tasks
      };
    default:
      return initialState;
  }
};

const ListingModule = props => {
  const [listingState, dispatch] = useReducer(reducer, initialState);
  const listingContextValue = { ...props, ...listingState, dispatch };
  return (
    <ListingContext.Provider value={listingContextValue}>
      <ListingHeader />
      <ListingTable />
      <ListingFooter />
    </ListingContext.Provider>
  );
};

const ListingHeader = React.memo(() => {
  const listingContext = useContext(ListingContext);
  const { dispatch, tasks = [] } = listingContext;
  const tags = [...new Set([...tasks.map(l => l.type)])];

  function handleTagClick(label) {
    dispatch({
      type: FILTER_LIST,
      selectedTag: label,
      tasks: tasks.filter(l => l.type === label)
    });
  }

  return (
    <section style={{ display: "flex" }}>
      {tags.map((t, idx) => (
        <input
          onClick={() => handleTagClick(t)}
          key={idx}
          type="button"
          value={t}
        />
      ))}
    </section>
  );
});

const ListingTable = React.memo(() => {
  console.log("tes");
  const listingContext = useContext(ListingContext);
  const { tasks } = listingContext;

  return (
    <ul>
      {tasks.map(t => (
        <li key={t.label}>{t.label}</li>
      ))}
    </ul>
  );
});

const ListingFooter = React.memo(() => {
  console.log("footer");
  return <div>Footer</div>;
});

export default ListingModule;
