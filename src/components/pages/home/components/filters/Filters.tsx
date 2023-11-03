import {
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/elements";
import { DatePicker } from "components/fragments";
import { TEXTS } from "texts/texts";
import { CATEGORIES, SOURCES } from "mockData";
import { useSearchParams } from "react-router-dom";
import { QueryKeyName, CommonQueryParamKeys } from "types";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { debounce } from "utils";

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleDebouncedInput = useCallback(
    debounce((value: string) =>
      handleChange({ key: CommonQueryParamKeys.Q, value })
    ),
    []
  );

  useEffect(() => {
    setSearchTerm(searchParams.get(CommonQueryParamKeys.Q) ?? "");
  }, [searchParams]);

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setSearchTerm(value);
    handleDebouncedInput(value);
  }

  function handleChange({ key, value }: { key: QueryKeyName; value: string }) {
    const queries = Object.fromEntries([...searchParams]);
    setSearchParams({ ...queries, [key]: value });
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-x-6 gap-y-2 sm:sticky top-0 z-10  p-2 bg-gray-100 rounded-md">
      <div className="col-span-1">
        <Input
          placeholder={TEXTS.SEARCH_PLACEHOLDER}
          onChange={handleChangeInput}
          value={searchTerm}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 col-span-1">
        <DatePicker
          initialValue={searchParams.get(CommonQueryParamKeys.FROM)}
          onChange={(value) => {
            handleChange({
              key: CommonQueryParamKeys.FROM,
              value: value.toString(),
            });
          }}
          placeholder={TEXTS.FROM}
        />
        <DatePicker
          initialValue={searchParams.get(CommonQueryParamKeys.TO)}
          onChange={(value) => {
            handleChange({
              key: CommonQueryParamKeys.TO,
              value: value.toString(),
            });
          }}
          placeholder={TEXTS.TO}
        />
      </div>
      <div className="flex gap-2 col-span-1 flex-col sm:flex-row">
        <Select
          value={searchParams.get(CommonQueryParamKeys.CATEGORY) ?? undefined}
          onValueChange={(value) => {
            handleChange({ key: CommonQueryParamKeys.CATEGORY, value });
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder={TEXTS.CATEGORIES} />
          </SelectTrigger>
          <SelectContent>
            {Object.values(CATEGORIES).map((category) => (
              <SelectItem value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={searchParams.get(CommonQueryParamKeys.SOURCE) ?? undefined}
          onValueChange={(value) => {
            handleChange({ key: CommonQueryParamKeys.SOURCE, value });
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder={TEXTS.SOURCES} />
          </SelectTrigger>
          <SelectContent>
            {Object.values(SOURCES).map((source) => (
              <SelectItem value={source}>{source}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="col-span-1">
        <Input placeholder={TEXTS.AUTHOR_NAME} />
      </div>
    </div>
  );
};

export default Filters;
