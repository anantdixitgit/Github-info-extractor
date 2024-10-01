const input=document.querySelector('#button');

let url;
input.addEventListener('click',function(e){
    e.preventDefault()
    let username=document.querySelector('#user').value;
   //  console.log(username);
    if(username===""){
       alert('enter the valid username');
    }
    else{
        url=`https://api.github.com/users/${username}`
        console.log(url);
      
    }
})

let email;
let bio;
let publicRepos;
let Location;
let following;
let followers;
let lastUpdated;
let publicgist;



// ==================================
// const xhr = new XMLHttpRequest();
const requestURL=url;
// xhr.open('GET',requestURL)  // request going to send 
// console.log(xhr);

// xhr.onreadystatechange=function() {// when ever state change onreadyStatechange associated function called;
//    if(xhr.readyState===4){
//       // console.log(this.responseText)// now we get data from api;

//       const data=JSON.parse(this.responseText);
//       //console.log(data);
      
//       email=data.email;
//       if(email ===null) email='not mentioned by the user'
      
//       Location=data.location;
//       if(Location ==null) Location='not mentioned'

//       bio=data.bio
//       if(bio==null) bio ='not mentioned'

//       publicRepos = data.public_repos
//       if(publicRepos===0) publicRepos=='not crete any repository'

//       following=data.following
      
//       followers=data.followers
      
//       publicgist=data.public_gist

//    }
// }


// xhr.send()  // request send
// =================================

