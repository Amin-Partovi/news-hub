import { SOURCES, CATEGORIES } from "mockData";

export const commonQueryParamKeys = {
  Q: "q",
  CATEGORY: "category",
  FROM: "from",
  TO: "to",
  SOURCE: "source",
} as const;

type Keys = keyof typeof commonQueryParamKeys;
export type QueryKeyName = (typeof commonQueryParamKeys)[Keys];

type SourceKeys = keyof typeof SOURCES;
export type SourceValue = (typeof SOURCES)[SourceKeys];

type CategoryKeys = keyof typeof CATEGORIES;
export type CategoryValue = (typeof CATEGORIES)[CategoryKeys];

export type CommonQueryParams = Partial<{
  q: string;
  source: SourceValue;
  category: CategoryValue;
  from: string;
  to: string;
}>;
