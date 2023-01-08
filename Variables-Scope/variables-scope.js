// JavaScript variables - Scope of Variables


let bb = 4;
document.write(`<p>Global Scope 1 ---  ${bb}</p>`);

var cc = 'Hello People';

document.write(`<p>Global Window Scope 1 ---  ${window.cc}</p>`);

let dd = 'Hello Australia';

document.write(`<p>Global Window Scope 2 ---  ${window.dd}</p>`);  // undefined


function outer() {
  let bb = 2;
  auto = 'auto';
  document.write(`<p>Function / Local Scope for function outer() ---  ${bb}</p>`);

  console.log(bb);
  function inner() {
    let bb = 9;
    document.write(`<p>Function / Local Scope for function inner() ---  ${bb}</p>`);
  }
  {var aa = 17};
  document.write(`<p>Block Scope 1 ---  ${aa}</p>`);
  {let xx = 33};
  // document.write(`<p>Block Scope 2 ---  ${xx}</p>`);   //This will not work - undefined
  inner();
}

outer();
document.write(`<p>Automatically Global Scope 1 ---  ${auto}</p>`);
document.write(`<p>Global Scope 2 ---  ${bb}</p>`);
