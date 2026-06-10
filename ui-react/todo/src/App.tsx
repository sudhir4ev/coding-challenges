// The TODOs

// 1. Using the mock APIs (in `api.ts`) to implement the requirements:
//    a. I can add a new TODO item by clicking the "Add" button.
//    b. I can complete a TODO item by clicking the checkbox on its left. It should then be transfered to the "Done" list.
//    c. I can uncomplete an item in the "Done" list by clicking the checkbox on its left. It should then be transfered to the "TODO" list.
//    d. I can remove the item by clicking the X button on its right.
// Make sure the async operations are properly handled.
// Don't waste time on making buttons or texts look nice, as long as the layout is clear

// 2. Write tests to cover the use cases

function App() {
  return (
    <>
      <div>
        <input placeholder="TODO" />
        <button>Add</button>
      </div>

      <div>
        <h1>TODO</h1>

        <div style={{ marginTop: 12 }}>
          <input type="checkbox" />
          Watch a movie
          <button>X</button>
        </div>
        <div style={{ marginTop: 12 }}>
          <input type="checkbox" />
          Buy a book
          <button>X</button>
        </div>
      </div>

      <div>
        <h1>Done</h1>
        <div>
          <input checked type="checkbox" />
          Cycling
          <button>X</button>
        </div>
      </div>
    </>
  );
}

export default App;
