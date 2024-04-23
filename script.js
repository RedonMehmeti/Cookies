// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2025 12:00:00 UTC";
// console.log(document.cookie);

// function setCookie(name, value, days) {
//     const d = new Date();
//     d.setTime(d.getTime() + (days*24*60*60*1000));
//     let expires = "expires="+ d.toUTCString();
//     document.cookie = name + "=" + value + ";" + expires + ";path=/";
//   }

//   function getCookie(name) {
//     let nameEQ = name + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i <ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(nameEQ) == 0) {
//         return c.substring(nameEQ.length, c.length);
//       }
//     }
//     return "";
//   }

//   function checkCookie() {
//     let username = getCookie("username");
//     if (username != "") {
//      alert("Welcome again " + username);
//     } else {
//       username = prompt("Please enter your name:", "");
//       if (username != "" && username != null) {
//         setCookie("username", username, 365);
//       }
//     }
//   }














// function checkCookie() {
//   let user = getCookie("username");
//   if (user != "") {
//     alert("Welcome again " + user);
//   } else {
//      user = prompt("Please enter your name:","");
//      if (user != "" && user != null) {
//        setCookie("username", user, 30);
//      }
//   }
// }
