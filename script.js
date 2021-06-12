console.log('Hello from other side', 'Adele')
console.log(process.argv)

const args = process.argv.slice(2);
for (let arg of args) {
    console.log(`Hello from, ${arg} as well`)
}