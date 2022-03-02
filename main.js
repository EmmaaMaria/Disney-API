let tableBody = document.querySelector('#table tbody');
function fetchData(){
    

let button1 = document.getElementById("character1");

  
button1.addEventListener("click", function(e){
    e.preventDefault();
    fetch('https://api.disneyapi.dev/characters/17')
    .then(response => response.json())
    .then((data) => {
            tableBody.innerHTML += `
                <tr> 						
                    <td>${data.tvShows}</td>
                    <td>${data.name}</td>
                    <td>${data.films}</td>		
	
                </tr>
             `
             console.log(data);
        })
        
        .catch((error) => {
            console.log(error);
        }) 
    })

let button2 = document.getElementById("character2");

button2.addEventListener("click", function(e){
    e.preventDefault();
    fetch('https://api.disneyapi.dev/characters/25')
    .then(response => response.json())
    .then((data) => {
            tableBody.innerHTML += `
                <tr> 						
                <td>${data.tvShows}</td>
                <td>${data.name}</td>
                <td>${data.films}</td>	
                </tr>
             `
             console.log(data);
        })
        
        .catch((error) => {
            console.log(error);
        }) 
    })

let button3 = document.getElementById("character3");
let img = document.createElement("img");
button3.addEventListener("click", function(e){
    e.preventDefault();
    fetch('https://api.disneyapi.dev/characters/47')
    .then(response => response.json())
    .then((data) => {

        tableBody.innerHTML += `
        <tr> 						
        <td>${data.tvShows}</td>
        <td>${data.name}</td>
        <td>${data.films}</td>
        
        </tr>
     `
             console.log(data);
        })
        
        .catch((error) => {
            console.log(error);
        })  
    })
}
fetchData()
function searchData(){

    let searchButton = document.getElementById("random");
    let errorMessage = document.getElementById("error")
    let tableBody2 = document.getElementById("list");
    

    searchButton.addEventListener('click', function() {
    fetch('https://api.disneyapi.dev/characters/')
    .then(response => response.json())
    .then((data) => {
        
    
        let itemList= "";
                for(let i = 0; i < 50; i++)  {
         itemList += 
            `
            <ul><h1> Titel:${data.data[i].name}</h1></ul>
            <ul><h6> Tv Shows: ${data.data[i].tvShows}</h6></ul>
            <ul><h6> Video Games: ${data.data[i].videoGames}</h6></ul>
            <ul><h6> ID: ${data.data[i]._id}</h6></ul>
            <img id="image" src="${data.data[i].imageUrl}"/>`;
        
        }
        console.log(data.data);
        
        tableBody2.innerHTML = itemList;
    })
    .catch((error) => {
        console.log(error);
        errorMessage.innerHTML = "Something whent wrong! Please try again later!"
   })
   let page2 = document.getElementById("page-2");
   let page3 = document.getElementById("page-3");

   page2.addEventListener('click', function() {
    fetch('https://api.disneyapi.dev/characters?page=2')
    .then(response => response.json())
    .then((data) => {
        
    
        let itemList2= "";
                for(let i = 0; i < 50; i++)  {
         itemList2 += 
            `
            <ul><h1> Titel:${data.data[i].name}</h1></ul>
            <ul><h6> Tv Shows: ${data.data[i].tvShows}</h6></ul>
            <ul><h6> Video Games: ${data.data[i].videoGames}</h6></ul>
            <ul><h6> ID: ${data.data[i]._id}</h6></ul>
            <img id="image" src="${data.data[i].imageUrl}"/>`;
        
        }
        console.log(data.data);
        
        tableBody2.innerHTML = itemList2;
    })
    .catch((error) => {
        console.log(error);
        errorMessage.innerHTML = "Something whent wrong! Please try again later!"
   })

   page3.addEventListener('click', function() {
    fetch('https://api.disneyapi.dev/characters?page=3')
    .then(response => response.json())
    .then((data) => {
        
    
        let itemList3= "";
                for(let i = 0; i < 50; i++)  {
         itemList3 += 
            `
            <ul><h1> Titel:${data.data[i].name}</h1></ul>
            <ul><h6> Tv Shows: ${data.data[i].tvShows}</h6></ul>
            <ul><h6> Video Games: ${data.data[i].videoGames}</h6></ul>
            <ul><h6> ID: ${data.data[i]._id}</h6></ul>
            <img id="image" src="${data.data[i].imageUrl}"/>`;
        
        }
        console.log(data.data);
        
        tableBody2.innerHTML = itemList3;
    })
    .catch((error) => {
        console.log(error);
        errorMessage.innerHTML = "Something whent wrong! Please try again later!"
   })
})
})
})
}
searchData();


  

                

