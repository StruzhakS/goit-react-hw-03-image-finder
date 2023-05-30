import { Component } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import Searchbar from '../Searchbar/Searchbar';
import s from './App.module.css';
import { Audio } from 'react-loader-spinner';
import { searchImages } from '../Services/GetImages';
import Button from 'components/Button/Button';
class App extends Component {
  state = {
    categories: [],
    categoryName: '',
  };
  componentDidUpdate = (_, prevState) => {
    if (prevState.categoryName !== this.state.categoryName)
      this.getSearchPictures();
  };

  getSearchPictures = async () => {
    const data = await searchImages(this.state.categoryName);
    // console.log(data.data.hits);
    this.setState({ categories: data.data.hits });
  };

  userSearch = search => {
    this.setState({ categoryName: search });
  };

  render() {
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.userSearch} />
        <ImageGallery data={this.state.categories} />
        {this.state.categories.length > 0 && <Button />}
        {/* <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      /> */}
      </div>
    );
  }
}
export default App;
