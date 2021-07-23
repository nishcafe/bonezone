import "./App.css";
import "./MainPage.css";
import TableEntry from "./TableEntry";


function App() {
  return (
    <div classNameName="App">
      <div className="main-page">
        <div className="header">
          <div className="title">Some Header</div>
          <div className="username">Mr John</div>
          <button className="exit">Exit</button>
        </div>
        <hr />
        <div className="main-section">
          <div className="discussion">
            <div className="title">Discussion</div>
            <hr />
            <div className="table">
              <div className="table-header">
                <div className="number-header">S/n</div>
                <div className="question-header">Title</div>
                <div className="author-header">Author</div>
                <div className="time-header">Time</div>
                <div className="status-header">Status</div>
              </div>
              
              <TableEntry />
              <TableEntry />
              <TableEntry />
              <TableEntry />
            </div>
          </div>
          <div className="chat">
            <div className="chat-header">Chat</div>
            <hr />
            <div className="chat-view">
              <div className="messages">hello</div>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
