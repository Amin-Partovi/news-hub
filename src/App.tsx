import {
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/elements";
import { DatePicker } from "components/fragments";
import { PageLayout } from "components/layouts";

import { TEXTS } from "texts";
import { CATEGORIES, SOURCES } from "mockData";
import { useSearchParams } from "react-router-dom";
import { commonQueryParamKeys, QueryKeyName } from "types";
import { useFetchNews } from "hooks";

function App() {
  const [searchParams, setSearchParams] = useSearchParams({});
  const { guardianNews, news, nytNews } = useFetchNews();

  function handleChange({ key, value }: { key: QueryKeyName; value: string }) {
    const queries = Object.fromEntries([...searchParams]);
    setSearchParams({ ...queries, [key]: value });
  }

  return (
    <PageLayout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <Input
            placeholder={TEXTS.SEARCH_PLACEHOLDER}
            onChange={(event) => {
              handleChange({
                key: commonQueryParamKeys.Q,
                value: event.target.value,
              });
            }}
          />
        </div>
        <div className="flex gap-2 col-span-3">
          <DatePicker
            onChange={(value) => {
              handleChange({
                key: commonQueryParamKeys.FROM,
                value: value.toString(),
              });
            }}
            placeholder={TEXTS.FROM}
          />
          <DatePicker
            onChange={(value) => {
              handleChange({
                key: commonQueryParamKeys.TO,
                value: value.toString(),
              });
            }}
            placeholder={TEXTS.TO}
          />
        </div>
        <div className="flex gap-2 col-span-3">
          <Select
            onValueChange={(value) => {
              handleChange({ key: commonQueryParamKeys.CATEGORY, value });
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={TEXTS.CATEGORIES} />
            </SelectTrigger>
            <SelectContent>
              {Object.values(CATEGORIES).map((category) => (
                <SelectItem value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            onValueChange={(value) => {
              handleChange({ key: commonQueryParamKeys.SOURCE, value });
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={TEXTS.SOURCES} />
            </SelectTrigger>
            <SelectContent>
              {Object.values(SOURCES).map((source) => (
                <SelectItem value={source}>{source}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-3">
          <Input placeholder={TEXTS.AUTHOR_NAME} />
        </div>
      </div>
    </PageLayout>
  );
}

export default App;
