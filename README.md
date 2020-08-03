Array => .map()

const x = [1,2,3];
x.map((currentData, currentIndex) => console.log(currentData, currentIndex));

output:
1 0
2 1
3 2
(3) [undefined, undefined, undefined]

1) Map will always return u a array
2) when using map, if it is just a single line, you need no return;
3) in case of multiple line, we need return

const x = [1,2,3];
const y = x.map((currentData, currentIndex) => {
  const square = currentData*currentData;
  return square;
});

output,
y = [1,4,9]


4) A map function gives you two arguments,
first is currentData,
second is currentIndex (optional)

you cab change the arg name 
const x = [1,2,3,4];
const y = x.map((now) => {
  let data='';
  if(now%2 === 0)
    data='even';
  else
    data= 'odd';
  return data;
});

5) returns undefined if you dont return for a element
const a = [1,2,3,4];
const b = a.map((element) => {
  if(element%2 === 0)
    retrun element;
});
[undefined, 2, undefined, 4]
