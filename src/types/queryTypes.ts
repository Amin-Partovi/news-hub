import { SOURCES, CATEGORIES } from "mockData";

export const CommonQueryParamKeys = {
  Q: "q",
  CATEGORY: "category",
  FROM: "from",
  TO: "to",
  SOURCE: "source",
} as const;

type Keys = keyof typeof CommonQueryParamKeys;
export type QueryKeyName = (typeof CommonQueryParamKeys)[Keys];

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
