class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `${this.x},${this.y}`;
    }
    get prop() {
        return 'getter';
    }
    set prop(value) {
        console.log(`setter:${value}`)
    }
}

class Logger {
    static printName(name = 'there') {
      this.print(`Hello ${name}`);
    }
    print(text) {
      console.log(text);
    }
  }

function selfish (target) {
    const cache = new WeakMap();
    const handler = {
        get (target, key) {
            const value = Reflect.get(target, key);
            if (typeof value !== 'function') {
                return value;
            }
            if (!cache.has(value)) {
                cache.set(value, value.bind(target))
            }
            return cache.get(value)
        }
    }
    const proxy = new Proxy(target, handler);
    return proxy;
}
const logger = selfish(new Logger());


































