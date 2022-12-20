export const useGetLocalStorage = (key: string) => {
    if (typeof window !== "undefined") {
        const { decycle } = require("json-cyclic");

        const test = localStorage.getItem(key);
        console.log(test);
        return test != null ? JSON.stringify(decycle(test)) : undefined;
    }
};
