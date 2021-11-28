// Prototype là gì?
// Prototype là cơ chế mà các object trong javascript kế thừa các tính năng từ một object khác. Tất cả các object trong javascript đều có một prototype, và các object này kế thừa các thuộc tính (properties) cũng như phương thức (methods) từ prototype của mình.
// Bạn cần chú ý rằng bản thân prototype là một object trong JS, được gọi là prototype object (đối tượng prototype). Chúng ta cần biết điều này để tránh nhầm lẫn với thuộc tính prototype của function.
//Vài điều cần lưu ý:

// Trong Javascript, một hàm (function) cũng được coi là 1 object. Và hàm có một thuộc tính gọi là thuộc tính prototype, bản thân thuộc tính prototype này mang giá trị là 1 object.
// Nếu ta dùng hàm để tạo ra 1 mẫu khởi tạo đối tượng, thì bạn có thể thêm được các thuộc tính hoặc phương thức vào thuộc tính prototype của hàm khởi tạo để thực hiện kế thừa. Tất cả các đối tượng con tạo ra bởi hàm khởi tạo đều mang các giá trị trong thuộc tính prototype của hàm này.
// Các object trong Javascript có một khái niệm gọi là prototype attribute, đặc tính này có giá trị trỏ tới prototype object mà nó kế thừa thuộc tính. Ta dùng thuộc tính __proto__ để truy cập tới prototype object.

// Tạo ra Prototype như thế nào?
// Ta khai báo một hàm khởi tạo:
//Tạo ra 1 mẫu khởi tạo, cũng là tạo ra 1 prototype object
function Person(_age, _name){
    this.age = _age;
    this.name = _name;
 }
  
 //Có thể thêm thuộc tính vào thuộc tính prototype của hàm khởi tạo
 Person.prototype.height = 0;
  
 //Tạo ra 1 instance của Person
 //Có cả 3 thuộc tính của mẫu khởi tạo Person
 var jack_person = new Person(10, "Jack");
 for (var att in jack_person){
    console.log(att);
 }
  
 //Xem đối tượng prototype của instance vừa tạo
 console.log(jack_person.__proto__);
 
//  Tại sao prototype lại quan trọng trong Javascript?
//  Sự kế thừa trong Javascript
//  Để thực hiện kế thừa trong Js, bạn chỉ cần tạo 1 hàm khởi tạo. Sau đó thêm các thuộc tính và phương thức vào thuộc tính prototype của hàm khởi tạo này.
 
//  Các instance tạo ra bởi hàm khởi tạo này sẽ chứa các thuộc tính và phương thức được định nghĩa ở trên. Do Javascript không có khái niệm class nên để thực hiện việc kế thừa để mở rộng ứng dụng như các ngôn ngữ OOP khác, chúng ta cần Prototype.
//Tạo ra 1 hàm khởi tạo cơ sở
function Animal(_age){
    this.age = _age;
 }
  
 //Có thể thêm thuộc tính vào thuộc tính prototype của hàm khởi tạo
 Animal.prototype.showAge = function(){
    console.log( this.age );
 };
  
 //Tạo ra 1 hàm khởi tạo con (sẽ dùng để kế thừa hàm cơ sở)
 function Dog(_color){
    this.color = _color;
 }
 //Thực hiện kế thừa, gán hàm khởi tạo của Animal cho prototype của Dog
 Dog.prototype = new Animal();
 Dog.prototype.showColor = function(){
    console.log( this.color );
 };
  
 //Kiểm tra sự kế thừa
 var chophuquoc = new Dog('yellow');
 chophuquoc.age = 3;
 chophuquoc.showAge();       //3
 chophuquoc.showColor();     //yellow
// Đoạn code trên thì object chophuquoc sử dụng hàm showAge() thuộc Animal prototype vì ta đã gán hàm khởi tạo của Animal vào prototype của Dog. Như vậy bạn có thể thấy rõ sự kế thừa trong js. Object chophuquoc đã kế thừa những gì đã có trong Dog.prototype và kế thừa luôn những thuộc tính mà Animal.prototype có.

// Truy cập vào các thuộc tính của đối tượng: Prototype chain
// Prototype rất quan trọng trong việc giúp ta truy cập tới các thuộc tính và phương thức của đối tượng. Khi chúng ta truy cập vào một Property của một Object, JavaScript sẽ tìm Property đó bên trong chính Object. Nếu không có nó sẽ tiếp tục tìm lên trên Prototype của Object và cứ tiếp tục như thế cho đến khi gặp Object.prototype thì dừng và cho ra kết quả (undefined nếu không tìm thấy).
// Quá trình lặp lại này được gọi là chuỗi prototype (prototype chain) trong Javascript. Chính điều này cộng thuộc tính prototype của function tạo nên cơ chế kế thừa prototype-based cho Javascript. 