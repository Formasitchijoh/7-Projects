
let tbody = document.getElementById("tbody")
//fetch funtion  is program uses the Json server to create a fake API for handling the data and sending it to the
let apiUrl = "http://localhost:3000/user/"

fetch(apiUrl)
.then(response => response.json())
.then(json => {
    json.map(data => {
        console.log(data.name);
        tbody.append(td_fun(data))
    })
})
//create table data

function td_fun({name , email, profile, status ,role}){
    let td = document.createElement('tr');
    td.innerHTML = `
    <td class="px-6 py-4 whitespace-nowrap">
    <div class="flex items-center">
       <div class="flex-shrink-0 h-10 w-10">
           <img src=${profile} class="h-10 w-10 rounded-full">
       </div>
       <div class="ml-4">
           <div class="text-sm font-medium text-gray-900">
              ${name}
           </div>
           <div class="text-sm text-gray-500">
               ${email}
           </div>
       </div>
    </div>
   </td>
   <td class="px-6 py-4 whitespace-nowrap">
   <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
       ${status}
   </span>
</td>
<td class="px-6 py-4 whitespace-nowrap">
   <span class="text-sm text-gray-500 ">${role}</span>
</td>
    
    `;
    return td;
}

// usefull commands
// npm init -y 
// json-server --watch db.json 
// npm i json-server 
// npm start 
// npm install react-icons 
// npm install axios@0.24.0
// npm run test