/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
*/

console.log(likes([]));
console.log(likes(['Peter']));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Max', 'John', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max','Mark2', 'Max2']));

function likes(names) {
    console.log(names.slice(2,names.length).length)
    if (names.length === 0) return 'no one likes this';
    if (names.length === 1) return `${names.join(' ')} likes this`;
    if (names.length === 3) return `${names.splice(0,2).join(', ')} and ${names[names.length-1]} like this`;
    if (names.length >= 4) return `${names.splice(0,2).join(', ')} and ${names.length} others like this`;
    return `${names.splice(0,names.length-1).join(', ')} and ${names.slice(names.length-1)} like this`;
     console.log(names.slice(2,names.length-1))
  }