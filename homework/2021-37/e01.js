let Tina = { name:"Tina", age: 32 }

for (const property in Tina) {
    console.log(`${property}: ${Tina[property]}`);
}