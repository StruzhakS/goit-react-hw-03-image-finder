import { Component } from 'react';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    userInput: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.userInput);
    this.setState({ userInput: '' });
  };

  handleInput = e => {
    this.setState({ userInput: e.currentTarget.value.toLowerCase().trim() });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={e => this.handleSubmit(e)}>
          <input
            onChange={this.handleInput}
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.userInput}
          />
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}
export default Searchbar;
