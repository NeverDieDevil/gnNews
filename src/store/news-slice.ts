import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";

type News = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: Date;
  content?: string;
};

type NewsSliceState = {
  status: string;
  isList: boolean;
  selectedCountry: string;
  news: News[];
  totalResults: number;
};

export type NewsAction = {
  status: string;
  totalResults: number;
  articles: News[];
};

type SelectedCountryAction = string;

const newsInitialState: NewsSliceState = {
  status: "",
  isList: true,
  selectedCountry: "pl",
  news: [],
  totalResults: 0,
};

const newsSlice = createSlice({
  name: "news",
  initialState: newsInitialState,
  reducers: {
    toggleView(state) {
      state.isList = !state.isList;
    },
    populateNews(state, action: PayloadAction<NewsAction>) {
      console.log(action.payload.status);

      state.news = action.payload.articles;
      state.totalResults = action.payload.totalResults;
    },
    setSelectedCountry(state, action: PayloadAction<SelectedCountryAction>) {
      state.selectedCountry = action.payload;
    },
  },
});

export const newsActions = newsSlice.actions;

export const isList = (state: RootState) => state.isList;

export default newsSlice;
