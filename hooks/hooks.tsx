export const useGetLocalStorage = (key: string) => {
    if (typeof window !== "undefined") {
        const { decycle, encycle } = require("json-cyclic");

        const test = localStorage.getItem(key);
        console.log(test);
        if (test !== null) {
            console.log(JSON.stringify(encycle(test)));
        }
        console.log("==================================");
        return test != null ? JSON.parse(encycle(test)) : undefined;
    }
};
