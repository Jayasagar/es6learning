
const obj = {
    handler,
    toString() {
        return 'test'
    },
    ['prop'+42] : 56
};

console.info(obj.handler);
console.info(obj.toString());
console.info(obj.prop42);