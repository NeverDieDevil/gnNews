import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../store';

import { News } from '../../../store/news-slice';
import Header from '../../Header/Header';
import NewsItem from '../NewsItem';

const mockNewsItem: News = {
  source: {
    id: '1',
    name: 'News 01',
  },
  author: 'Mock author',
  title: 'Mock title 01',
  description: 'Mock description',
  url: 'https://testapi.pl/url',
  urlToImage: 'https://testapi.pl/url',
  publishedAt: new Date('30/01/1994'),
  content: 'Mock content',
};

const changeView = () => {
  const toggleButton = screen.getByRole('checkbox');
  fireEvent.click(toggleButton);
};

const MockNewsItem: React.FC<{
  newsItem: News;
}> = (props) => {
  const {
    source,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
  } = props.newsItem;
  return (
    <Provider store={store}>
      <Header />
      <NewsItem
        title={title}
        source={source.name}
        date={publishedAt}
        img={
          urlToImage
            ? urlToImage
            : 'https://heuft.com/upload/image/400x267/no_image_placeholder.png'
        }
        desc={description ? description : 'No description'}
        author={author}
        newsUrl={url}
      />
    </Provider>
  );
};

describe('NewsItem', () => {
  it('change view on news list', () => {
    render(<MockNewsItem newsItem={mockNewsItem} />);

    changeView();
    const newsContainer = screen.getAllByTestId('news-item');
    newsContainer.map((news) => {
      expect(news.className).toContain('tile');
    });
  });
});
