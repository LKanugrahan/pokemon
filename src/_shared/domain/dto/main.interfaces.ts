import { FetchArgs, QueryDefinition } from "@reduxjs/toolkit/query";
import { QueryActionCreatorResult } from "@reduxjs/toolkit/query";
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { off } from "process";
import { Control, FieldValues, Path } from "react-hook-form";

export interface Meta {
  page: number;
  per_page: number;
  total: number;
  total_page: number;
}

export interface MetaI {
  count: number;
  next: string | null;
  previous: string | null;
}

export interface Query {
  limit?: number;
  page?: number;
  search?: string;
  filter?: string;
  offset?: number;
}

export interface PaginationProps<T extends FieldValues> {
  control: Control<T, any>;
  currentPage: number;
  totalPages: number;
  registerName: Path<T>;
}

export type refetch<R, U> = () => QueryActionCreatorResult<
  QueryDefinition<
    U,
    BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
    never,
    R,
    "api"
  >
>;
