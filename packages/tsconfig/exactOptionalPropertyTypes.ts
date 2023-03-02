interface Foo {
  bar?: 'a' | 'b';
}

declare const a: Foo;

a.bar = 'a';
a.bar = 'b';
a.bar = undefined


export { }
