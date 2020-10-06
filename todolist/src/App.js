import React from "react";
import "./App.css";
import ListTodo from "./ListTodo/ListTodo";

class App extends React.Component {
  state = {
    inputText: "",
    key: 0,
    list: [],
  };

  deleteItem = key => {
    const newlist = this.state.list.filter(li => li.key !== key);
    this.setState({ list: newlist });
  };

  submitItem = e => {
    e.preventDefault();
    this.setState({ key: ++this.state.key });
    this.setState({
      list: [
        {
          ["inputText"]: this.state.inputText,
          ["key"]: this.state.key,
        },
        ...this.state.list,
      ],
    });

    this.myFormRef.reset();
  };

  handleChange = e => {
    this.setState({ inputText: e.target.value });
  };

  render() {
    const { list } = this.state;
    return (
      <div className='App'>
        <form
          onSubmit={e => this.submitItem(e)}
          ref={el => (this.myFormRef = el)}
        >
          <input type='text' name='text' onChange={e => this.handleChange(e)} />
          <button type='submit'>Submit</button>
        </form>
        <ul className='ul'>
          {list
            ? list.map(li => (
                <ListTodo
                  inputText={li.inputText}
                  key={li.key}
                  deleteItem={() => this.deleteItem(li.key)}
                />
              ))
            : null}
        </ul>
      </div>
    );
  }
}

export default App;
