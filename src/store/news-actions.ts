import { API_KEY } from "../data";
import { NewsAction, newsActions } from "./news-slice";
import { AnyAction } from "redux";
import { RootState } from "./index";
import { ThunkAction } from "redux-thunk";

async function api<T>(url: string): Promise<T> {
  return await fetch(url)
    .then((res) => res.json())
    .then((data) => data);
}

export const fetchNews =
  (country: string): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    const news = await api<NewsAction>(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`
    );
    dispatch(newsActions.populateNews(news));
  };
