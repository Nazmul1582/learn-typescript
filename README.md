<br />
 <p align="center">
    <h1 align="center"> Enum Types - TypeScript - Lesson14 </h1>
</p>

<!-- TABLE OF CONTENTS -->

### Table of Contents

- [enum](#enum)

## enum

```typescript
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
  type: responseType.SUCCESS,
  data: {
    key: 101,
    value: "test",
  },
};
console.log(response);
```

<br/>
