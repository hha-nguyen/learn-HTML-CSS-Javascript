/*1. Binding mặc định
Quy tắc đầu tiên được áp dụng khi hàm được gọi một cách độc lập. Ngoài ra, có thể hiểu là khi các quy tắc còn lại không được áp dụng. Xét ví dụ sau:*/

function foo() {
	console.log( this.a );
}

var a = 2;

foo(); // 2
/*
Khi hàm foo được gọi, vì chưa có đối tượng nào được khởi tạo nên this.a sẽ tham chiếu tới thuộc tính a của đối tượng global. Tuy nhiên, nếu sử dụng strict mode, đối tượng global sẽ không được sử dụng cho việc binding.*/

function foo() {
	"use strict";

	console.log( this.a );
}

var a = 2;

foo(); // TypeError: `this` is `undefined`
// 2. Binding ngầm định
// Việc binding này sẽ được áp dụng trong trường hợp call-site có một đối tượng ngữ cảnh, hay còn gọi là đối tượng chứa (sở hữu) call-site. Xem xét đoạn code sau:

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

obj.foo(); // 2
// Khi hàm foo được gọi, this sẽ đại diện cho đối tượng obj vì obj chứa tham chiếu hàm tại thời điểm này. this.a tương tự như obj.a. Chỉ đối tượng cuối cùng của chuỗi tham chiếu đối tượng mới chứa call-site:

function foo() {
	console.log( this.a );
}

var obj2 = {
	a: 42,
	foo: foo
};

var obj1 = {
	a: 2,
	obj2: obj2
};

obj1.obj2.foo(); // 42
// * Mất binding ngầm
// Một trong những tình huống gây nhầm lẫn phổ biến nhất đó chính là việc bind ngầm bị mất và trở về binding mặc định. Ví dụ:

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

var bar = obj.foo; // function reference/alias!

var a = "oops, global"; // `a` also property on global object

bar(); // "oops, global"
// Dù bar được gán cho obj.foo nhưng thực tế đó chỉ là một tham chiếu tới chính foo mà thôi. Không có đối tượng nào được tham chiếu cả. Hơn nữa, bar() là một call-site độc lập. Do đó binding mặc định được áp dụng. Tình huống này còn xảy ra trong trường hợp truyền tham số cho một hàm:

function foo() {
	console.log( this.a );
}

function doFoo(fn) {
	// `fn` is just another reference to `foo`

	fn(); // <-- call-site!
}

var obj = {
	a: 2,
	foo: foo
};

var a = "oops, global"; // `a` also property on global object

doFoo( obj.foo ); // "oops, global"
// Ngay cả khi là hàm built-in của Javascript như setTimeout():

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

var a = "oops, global"; // `a` also property on global object

setTimeout( obj.foo, 100 ); // "oops, global"
// 3. Binding tường minh
// Thay vì gán tham chiếu hàm vào một thuộc tính của đối tượng như binding ngầm định, binding tường minh sử dụng hàm call() hoặc apply(). Hai hàm này đều sử dụng tham số đầu tiên là đối tượng mà this tham chiếu tới. Xem xét:

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

foo.call( obj ); // 2
// Gọi hàm foo với binding tường minh sử dụng foo.call ép buộc this trỏ tới obj. Nếu tham số là kiểu nguyên thủy thì các giá trị này sẽ được chuyển về dạng object tương ứng.

// * Hard binding
// Một dạng mạnh hơn của binding tường minh khi gọi call() hoặc apply() bên trong một hàm. Xét ví dụ sau:

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

var bar = function() {
	foo.call( obj );
};

bar(); // 2
setTimeout( bar, 100 ); // 2

// `bar` hard binds `foo`'s `this` to `obj`
// so that it cannot be overriden
bar.call( window ); // 2
// foo.call(obj) được gọi bên trong hàm bar(). Do đó, bắt buộc gọi foo với binding obj tới this. Xem xét một ví dụ điển hình khác, khi hard binding nhận tham số

function foo(something) {
	console.log( this.a, something );
	return this.a + something;
}

var obj = {
	a: 2
};

var bar = function() {
	return foo.apply( obj, arguments );
};

var b = bar( 3 ); // 2 3
console.log( b ); // 5
// Từ ES5, chúng ta có thể sử dụng hard binding với Function.prototype.bind như sau:

function foo(something) {
	console.log( this.a, something );
	return this.a + something;
}

var obj = {
	a: 2
};

var bar = foo.bind( obj );

var b = bar( 3 ); // 2 3
console.log( b ); // 5
// 4. Binding sử dụng new
// Ở một số ngôn ngữ hướng đối tượng, từ khóa new được sử dụng để gọi hàm constructor của một class nào đó khi khởi tạo một đối tượng. Tuy nhiên, điều này không đúng đối với Javascript. Khi một hàm được gọi bởi từ khóa new ở phía trước, đơn thuần chỉ là một lời gọi hàm thông thường. Hàm này không phải là constructor của bất kỳ class nào. Khi gọi hàm với new:

// Một đối tượng mới được khởi tạo
// Đối tượng này được liên kết với [[Prototype]]
// Đối tượng này được binding tới this
// Nếu hàm được gọi không trả về một đối tượng nào, từ khóa new sẽ khởi tạo một đối tượng mới. Xem xét đoạn code sau:
function foo(a) {
	this.a = a;
}

var bar = new foo( 2 );
console.log( bar.a ); // 2
// Bằng cách sử dụng new trong lời gọi hàm foo(…), chúng ta đã khởi tạo một đối tượng mới. Và đối tượng này được binding tới this.

// Thứ tự áp dụng 4 quy tắc trên:
// Theo đó, các quy tắc có độ ưu tiên cao hơn sẽ áp dụng đè lên các quy tắc phía dưới. Để xem xét quy tắc binding nào được áp dụng, ta lần lượt trả lời 4 câu hỏi sau:

// Lời gọi hàm có sử dụng new hay không? Nếu có, this được binding tới đối tượng vừa khởi tạo
// Lời gọi hàm có sử dụng call() , apply(), hay bind() hay không? Nếu có, một đối tượng cụ thể sẽ được binding tới `this’.
// Lời gọi hàm được gọi bởi một đối tượng sở hữu hàm đó? Nếu có, đối tượng này sẽ được binding.
// Cuối cùng, trường hợp mặc định, đối tượng global sẽ được binding. Và là undefined nếu sử dụng strict mode.
// Trường hợp ngoại lệ
// Nếu null hoặc undefined được truyền vào như một tham số binding this của các hàm call(), apply() hay bind(), thì những giá trị này sẽ được bỏ qua và binding mặc định sẽ được áp dụng.
function foo() {
	console.log( this.a );
}

var a = 2;

foo.call( null ); // 2
// Binding this tới một đối tượng rỗng hoàn toàn. Để việc binding không dẫn đến những kết quả khó lường trước được, như binding tới đối tượng global,… thì chúng ta có thể khởi tạo một đối tượng rỗng hoàn toàn cho việc binding this như sau:
function foo(a,b) {
   console.log( "a:" + a + ", b:" + b );
}

// our DMZ empty object
var ø = Object.create( null );

// spreading out array as parameters
foo.apply( ø, [2, 3] ); // a:2, b:3

// currying with `bind(..)`
var bar = foo.bind( ø, 2 );
bar( 3 ); // a:2, b:3
// Binding this tĩnh Trong ES6, có một hàm không áp dụng các quy tắc binding như trên: arrow-function. Binding this được thực hiện theo scope (function/global): Xem xét đoạn code sau:
function foo() {
	// return an arrow function
	return (a) => {
		// `this` here is lexically adopted from `foo()`
		console.log( this.a );
	};
}

var obj1 = {
	a: 2
};

var obj2 = {
	a: 3
};

var bar = foo.call( obj1 );
bar.call( obj2 ); // 2, not 3!
// Cả foo và bar đều binding this tới obj1. Việc binding của arrow-function không bị áp dụng đè, ngay cả khi sử dụng new. Một ví dụ phổ biến khác sử dụng arrow-function trong các tác vụ xử lý liên quan đến thời gian:

function foo() {
	setTimeout(() => {
		// `this` here is lexically adopted from `foo()`
		console.log( this.a );
	},100);
}

var obj = {
	a: 2
};

foo.call( obj ); // 2
// Ngoài arrow-function, chúng ta có thể áp dụng binding this tĩnh như sau:

function foo() {
	var self = this; // lexical capture of `this`
	setTimeout( function(){
		console.log( self.a );
	}, 100 );
}

var obj = {
	a: 2
};

foo.call( obj ); // 2
// Trên đây là những quy tắc binding this cần biết khi lập trình với Javasript. Việc hiểu rõ các quy tắc này sẽ giúp chúng ta tránh được những kết quả khó lường trước cũng như binding một cách linh hoạt và chính xác.