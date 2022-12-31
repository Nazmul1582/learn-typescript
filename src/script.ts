// Enum - typescript - lesson13

enum responseType {
  SUCCESS,
  FAILURE,
  UNAUTHENTICATED,
  FORBIDDEN,
}

interface APIResponse<T> {
  status: number;
  type: responseType;
  data: T;
}
const response: APIResponse<object> = {
  status: 200,
  type: responseType.UNAUTHENTICATED,
  data: {
    key: 101,
    value: "test",
  },
};
console.log(response);
