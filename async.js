/**
 * Synchronous code - runs line by line, blocking execution until each step finisheds
 * Asynchronous code - allows tasks to run in the background, so the program doesn't freeze while waiting
 */

// callbacks
function fetchData(callback){
    setTimeout(() => {
        callback("Data received!")
    }, 5000);
}

fetchData(result => {
    console.log(result)
})

// A cleaner way
// promises
const fetchDataNew = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data received");
    }, 2000)
})

fetchData
    .then(result => console.log(results))
    .catch(error => console.error(error));


// async/await
function fetchData4(){
    return new Promise(resolve => {
        setTimeout(() => resolve("Data received"), 2000);
    })
}

// async await
async function getData() {
    const result = await fetchData4()
    console.log(result)
}

getData()

// Real world example
async function getUsers(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json()
        console.log(data)
    } catch(error){
        console.error("Error fetching users:", error)
    }
}

getUsers()