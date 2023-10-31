const GUARDIAN_BASE_URL = process.env.REACT_APP_GUARDIAN_BASE_URL;
const NYT_BASE_URL = process.env.REACT_APP_NYT_BASE_URL;
const NEW_BASE_URL = process.env.REACT_APP_NEWS_BASE_URL;

export const ROUTES = {
  getGuardianNewsList: `${GUARDIAN_BASE_URL}/search`,
  getNYTNewsList: `${NYT_BASE_URL}/articlesearch.json`,
  getNewsList: `${NEW_BASE_URL}/everything`,
};
