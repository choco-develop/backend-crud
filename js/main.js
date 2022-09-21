/*const data =
await fetch('/',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(data)})
.catch(err=>{
    console.log(`error ${err}`)
})*/
document.querySelector('button').addEventListener('click',apiRequest)
async function apiRequest(){
    const singerName = {
        "name":document.querySelector('#name').value,
        "country":document.querySelector('#country').value,
        "songName":document.querySelector('#songName').value
    }
    try{
        const response = await fetch(`http://localhost:8000/api/${singerName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data
    }catch(error){
        console.log(error)
    }
}