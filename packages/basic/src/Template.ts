/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-06 20:09:24
 * @LastEditTime: 2023-02-06 20:52:41
 * @LastEditors: wsy
 */
type Word = 'word'
type Word1 = `${Word}_id`

type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

// 2*2
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;


type PropEventSource<Type> = {
  on<Key extends keyof Type>
    (eventName: `${Key & string}Changed`, callback: (newValue: Type[Key]) => void): void;
};
// type PropEventSource2 = 'firstNameChanged' extends string & 'first' | 'age';

declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26
});

person.on("firstNameChanged", newName => {
  // (parameter) newName: string
  console.log(`new name is ${newName.toUpperCase()}`);
});

person.on("ageChanged", newAge => {
  // (parameter) newAge: number
  if (newAge < 0) {
    console.warn("warning! negative age");
  }
})

export { }
