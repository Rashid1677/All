var names = ["noreen","asad","mubeen","rashid","muneeb"]
// define the name of array value name[0]
console.log("name of array",names[0],names[1]);
// change valhe of array variable array name[4]=new value
names[0]="Munir"
console.log("name of array",names[0],names[1]);
// cheek the length of array
console.log("Length of array",names.length);
console.log("Length of array",names[names.length-1]);
// for (let index = 0; index < names.length; index++) {
//     console.log("index",index) 
//     console.log("using looop",names[index]);
    
// }
for (let index = 0; index < names.length; index++) {
    console.log("index",index)
    console.log("use loop",names[index])
}