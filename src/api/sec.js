export const from64 = function (text) {
    return atob(text.replace(/\-/g, "+").replace(/\_/g, "/"));
};
