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

export interface GuardianRequestParams {
  q?: string;
  "query-fields"?: "body" | "thumbnail";
  "order-by"?: "newest" | "oldest" | "relevance";
  page?: number;
  "page-size"?: number;
  from_date?: Date;
  to_date?: Date;
  section?: string;
  tag?: string;
}
