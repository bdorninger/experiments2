import { of } from "rxjs";

document.getElementById("app")!.innerHTML = `
<h1>Hello Typescript!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel, an alternative to webpack.
</div>
`;

interface MyStruct {
  a: number;
  b?: string;
}

class Foo {
  var1!: MyStruct;
  var2: MyStruct;

  constructor() {
    this.var2 = {
      a: 223,
      b: "ddddfoo"
    };
  }

  init() {
    this.var1 = {
      a: 23,
      b: "foo"
    };
  }
}

let f = new Foo();
console.log(f);

of(1, 2, 3).subscribe({
  next: item => console.log(item),
  complete: () => console.log("Completed!")
});
