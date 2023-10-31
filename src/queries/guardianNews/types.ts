import { AxiosResponse } from "axios";

interface Data {
  response: Response;
}

interface Response {
  status: string;
  userTier: string;
  total: number;
  startIndex: number;
  pageSize: number;
  currentPage: number;
  pages: number;
  orderBy: string;
  results: Result[];
}

interface Result {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
}

export type GuardianRootData = AxiosResponse<Data>;

type Field =
  | "body"
  | "lastModified"
  | "thumbnail"
  | "publication"
  | "all"
  | "headline";

type Reference = "author" | "isbn";

type Tag = "publication" | "blog" | "contributor";

export interface GuardianRequestParams {
  q?: string; //search
  "query-fields"?: "body" | "thumbnail";
  "order-by"?: "newest" | "oldest" | "relevance";
  page?: number;
  "page-size"?: number;
  from_date?: Date; //date
  to_date?: Date; //date
  section?: string; //category
  tag?: string;
  "show-fields"?: Field | Field[];
  "show-references"?: Reference | Reference[];
  "show-tags"?: Tag | Tag[];
}

// author is missed
