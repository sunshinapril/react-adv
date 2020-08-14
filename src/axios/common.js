// 数组降维
function flattenDeep(arr) {
    return arr.reduce((prev, cur) => 
    	Array.isArray(cur) ? [...prev, ...flattenDeep(cur)] : [...prev, cur]
    	, []);
}
// 深克隆
function deepClone(obj) {
	if (typeof obj !== "object") return obj;
	let o = Object.prototype.toString.call(obj) === '[object Array]' ? [] : {};
	for(i in obj) {
		if (obj.hasOwnProperty(i)) {
			o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
		}
	}
	return o;
}

// 防抖， 隔一定时间调用一次

function debounce(fn, delay = 300) {
	return function() {
		let _this = this;
		let _args = arguments;
		clearTimeout(fn.id);
		fn.id = setTimeout(function() {
			fn.apply(_this, _args);
		}, delay)
	}
}

// 节流， 规定在一个单位时间内，只能触发一次的函数，若多次触发，只有一次生效

// 	debounce

// search搜索联想，window.resize

// throttle

// 	鼠标不断点击触发，mousedown（单位时间内只触发一次）

// 监听滚动事件，比如是否滑到底部自动加载更多，用	throttle来判断


function throttle(fn, delay = 300) {
	let timer;
	return function() {
		let _this = this;
		let _args = arguments;
		if (timer) return;
		timer = setTimeout(function() {
			fn.apply(_this, _args);
			timer = null;
		}, delay)
	}
}

function throttle(fn, delay = 300) {
	let previous = 0;
	return function() {
		let _this = this;
		let _args = arguments;
		let now = new Date();
		if (now - previous > delay) {
			fn.apply(_this, _args);
			previous = now;
		}
	}
}

// 杨辉三角
var generate = function(nums) {
	if (nums < 0) return;
	let res = [];
	for(let i =0 ; i < nums; i ++) {
		let a = [];
		for(let j =0; j <= i; j ++) {
			if (j > 0 && j < i) {
				a.push(res[i -1][j -1] + res[i -1][j])
			} else {
				a.push(1)
			}
		}
		res.push(a)
	}
	return res;
}

// 完整克隆一个对象
const obj = {};

// 非浏览器环境不一定部署（clone）
const clone = {

	_proto_: Object.getPrototypeOf(obj),

	...obj
}

const clone2 = Object.assign(Object.create(Object.getPrototypeOf(obj), obj)); 

const clone3 = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

const shallowClone = (obj) => Object.create(

	Object.getPrototypeOf(obj),

	Object.getOwnPropertyDescriptors(obj)
)

Symbol()

// 数组降阶

function* iterTree(tree) {
	if (Array.isArray(tree)) {
		for (let i=0; i< tree.length; i++) {
			yield* iterTree(tree[i])
		}
	} else {
		yield tree;
	}
}

const tree = ['a', ['b', 'c', ['d']], 'e', 'f'];
[...iterTree(tree)]

// async 实现原理
function spawn(genF) {
	return new Promise(function(resolve, reject) {
		const gen = genF();
		function step(nextF) {
			let next;
			try {
				next = nextF();
			} catch (e) {
				return reject(e);
			}
			if (next.done) {
				return resolve(next.value);
			}
			Promise.resolve(next.value).then(function(v) {
				step(function() {
					return gen.next(v);
				})
			}, function(e) {
				step(function() {
					return gen.throw(e);
				})
			})
		}
		step(function() {
			return gen.next(undefined);
		});
	})
}

spawn(function* () {});

// generator



