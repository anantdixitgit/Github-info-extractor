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

let Name
let email;
let bio;
let publicRepos;
let Location;
let following;
let followers;
let lastUpdated;
let publicgist;



// ==================================
//api calls

  let xhr = new XMLHttpRequest();
  const requestURL=url;
  xhr.open('GET',requestURL)  // request going to send 
  //console.log(xhr);

xhr.onreadystatechange=function() {// when ever state change onreadyStatechange associated function called;

   if(xhr.readyState == 4){
       console.log(xhr.responseText)// now we get data from api;

      // to get data
      const data=JSON.parse(xhr.responseText);
      console.log(data);
      //userval=data.username;

      Name=data.name;
      
      
      email=data.email;
      if(email ===null) email='not mentioned by the user'
      
      Location=data.location;
      if(Location ===null) Location='not mentioned'

      bio=data.bio
      if(bio==null) bio ='not mentioned'

      publicRepos = data.public_repos
      if(publicRepos===0) publicRepos=='not crete any repository yet'

      following=data.following
      
      followers=data.followers
      
      publicgist=data.public_gist

      document.querySelector('#username').innerHTML= username;
      document.querySelector('#name').innerHtml=`Name:${Name}`
      document.querySelector('#email').innerHTML=`Email:${email}`
      document.querySelector('#location').innerHTML=`Location:${Location}`
      document.querySelector('#bio').innerHTML=`Bio:${bio}`
      document.querySelector('#publicrepos').innerHTML=`Public repositiries:${publicRepos}`
      document.querySelector('#follwers').innerHTML=`$Followers:${followers}`
      document.querySelector('#follwing').innerHTML=`Following:${following}`
      document.querySelector('#publicgist').innerHTML=`publicgist:${publicgist}`

   }
}
xhr.send()  // request send

},false)


// =================================

