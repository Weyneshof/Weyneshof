// typesafe fetch typings

type TypedResponse<T> = {
  json(): Promise<T>;
} & Response;

declare function fetch<T>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<TypedResponse<T>>;
