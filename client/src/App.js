import "./App.css";

function App() {
  return (
    <div className="App">
      <form method="post" action="/api/v1/login">
        <input type="email" placeholder="Enter your email" name="email" />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
