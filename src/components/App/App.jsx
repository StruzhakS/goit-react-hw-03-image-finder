import { Component } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import Searchbar from '../Searchbar/Searchbar';
import s from './App.module.css';
import { Oval } from 'react-loader-spinner';
import { searchImages } from '../Services/GetImages';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

class App extends Component {
  state = {
    categories: [],
    categoryName: '',
    page: 1,
    isShowModal: false,
    largeImg: '',
  };

  componentDidUpdate = (_, prevState) => {
    if (
      prevState.categoryName !== this.state.categoryName ||
      prevState.page !== this.state.page
    )
      this.getSearchPictures();
    if (prevState.categoryName === this.state.categoryName) {
    }
  };

  getSearchPictures = async () => {
    const data = await searchImages(this.state.categoryName, this.state.page);
    this.setState({
      categories: [...this.state.categories, ...data.data.hits],
    });
  };

  changePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  userSearch = (search, page) => {
    this.setState({ categoryName: search });
    this.setState(prev =>
      prev.categoryName === this.state.categoryName
        ? this.changePage
        : { categories: [], page: 1 }
    );
  };

  modalOpen = evt => {
    if (evt.target.nodeName === 'IMG') {
      this.setState({ isShowModal: true, largeImg: evt.target.alt });
      return;
    }
    return;
  };

  modalCloseByEsc = e => {
    if (e.key === 'Escape') console.log(123);
    this.modalClose();
  };

  handleModalClose = e => {
    if (e.currentTarget === e.target) {
      this.modalClose();
    }
  };

  modalClose = e => {
    this.setState({ isShowModal: false, largeImg: '' });
  };

  render() {
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.userSearch} />
        <ImageGallery data={this.state.categories} modalOpen={this.modalOpen} />
        {this.state.categories.length >= 12 && (
          <Button changePage={this.changePage} />
        )}

        <div className={s.loader}>
          {!this.state.categories.length && this.state.categoryName && (
            <Oval
              style={{
                textAlign: 'center',
                marginLeft: '250px',
              }}
              ariaLabel="loading-indicator"
              height={300}
              width={300}
              strokeWidth={20}
              strokeWidthSecondary={2}
              color="blue"
              secondaryColor="white"
            />
          )}
        </div>
        {this.state.isShowModal && (
          <Modal
            img={this.state.largeImg}
            handleModalClose={this.handleModalClose}
            modalCloseByEsc={this.modalCloseByEsc}
          />
        )}
      </div>
    );
  }
}
export default App;
