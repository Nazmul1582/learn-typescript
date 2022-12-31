"use strict";
// Enum - typescript - lesson13
var responseType;
(function (responseType) {
    responseType[responseType["SUCCESS"] = 0] = "SUCCESS";
    responseType[responseType["FAILURE"] = 1] = "FAILURE";
    responseType[responseType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    responseType[responseType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(responseType || (responseType = {}));
const response = {
    status: 200,
    type: responseType.UNAUTHENTICATED,
    data: {
        key: 101,
        value: "test",
    },
};
console.log(response);
