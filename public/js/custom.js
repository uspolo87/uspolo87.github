//-------------------------------firebase login function--------------------------------------
var loginButton = document.querySelector('.login-btn');
loginButton.addEventListener('click', formSubmitEvent => {
    console.log('clicked')
    formSubmitEvent.preventDefault();
    var userName = document.getElementById('login-email').value;
    var userPassword = document.getElementById('login-password').value;
    if (userName != "" && userPassword != "") {
        $('.login-btn').text('please wait');
        //firebase inbuilt method for validation

        auth.signInWithEmailAndPassword(userName, userPassword).then(userCred => {
            console.log(userCred);
            $("#login-modal").modal("hide");
        }).catch(errorMessage => {
            $('.login-error-message').append('<span>' + errorMessage.code + '</span>');
            $('.login-error-message').css('display', 'inline');
            $('.login-btn').text('Log In');
        })

    } else {
        alert('please enter email or password');
    }
})

//user presence on authentication state changed

auth.onAuthStateChanged(presentUser => {
    if (presentUser) {
        navUI(presentUser);
        console.log('user is present');
    } else {
        navUI();
        console.log('user is absent today');
    }

})

// Nav UI Changes base on user presence

const loggedOutNav = document.querySelectorAll(".log-out");
const loggedInNav = document.querySelectorAll(".log-in");

function navUI(user) {
    if (user) {
        console.log('user ie executing')
        loggedOutNav.forEach(item => (item.style.display = "none"));
        loggedInNav.forEach(item => (item.style.display = "inline"));
    } else {
        console.log('this has to execute')
        loggedOutNav.forEach(item => (item.style.display = "inline"));
        loggedInNav.forEach(item => (item.style.display = "none"));
    }
}

//----------------------logout function---------------------

const logout = document.querySelector("#logout");

logout.addEventListener("click", logOutFunc => {
    firebase.auth().signOut().then(function() {
        console.log("logged out");
    }).catch(function(error) {});
});










// var utc = new Date()
//   .toJSON()
//   .slice(0, 10)
//   .replace(/-/g, "/");

// var uid;

// var Cname;
// var Price;

// auth.onAuthStateChanged(user => {
//   if (user) {
//     navUI(user);
//     // userDetails(user);
//     console.log(user);
//     uid = user.uid;

//   } else {
//     navUI();
//   }
// });


// // -----------------------Nav UI Changes-----------------------------

// const loggedOut = document.querySelectorAll(".log-out");
// const loggedIN = document.querySelectorAll(".log-in");

// function navUI(user) {
//   if (user) {
//     loggedIN.forEach(item => (item.style.display = "inline"));
//     loggedOut.forEach(item => (item.style.display = "none"));
//   } else {
//     loggedIN.forEach(item => (item.style.display = "none"));
//     loggedOut.forEach(item => (item.style.display = "inline"));
//   }
// }

// $(window).scroll(function () {
//   $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);

//   $("#logo").toggleClass("scrolled-logo", $(this).scrollTop() > 50);
// });

// //nav FUnction
// /* show and hide navigation*/

// $(document).ready(function () {
//   var fixHeight = function () {
//     $(".navbar-nav").css(
//       "max-height",
//       document.documentElement.clientHeight - 100
//     );
//   };
//   fixHeight();
//   $(window).resize(function () {
//     fixHeight();
//   });
//   $(".navbar .navbar-toggler").on("click", function () {
//     fixHeight();
//   });
//   $(".navbar-toggler, .overlay").on("click", function () {
//     $(".mobileMenu, .overlay").toggleClass("open");
//   });
// });

// //packages function

// var TotalValue = 0;

// var button = $(".popup-btn");

// $(".pack").click(function () {
//   if ($(this).is(":checked")) {
//     button.css("display", "block");
//     var result = $('input[type="checkbox"]:checked');
//     var selectedValue = $(this).val();
//     $(".popup-btn").text("Pay  " + selectedValue);
//     resultString = $("#" + selectedValue).text();
//     TotalValue += parseInt(selectedValue);
//     localStorage.setItem("packName", resultString);
//     localStorage.setItem("packPrice", TotalValue);
//   } else {
//     button.css("display", "none");
//   }
//   $(".popup-btn").click(function () {
//     $(this).text('Please wait :)')
//     window.location.href = 'payment_page.html';
//   });
// });

// //contact

// $(document).ready(function () {
//   $("#contact-form").on("submit", function (e) {
//     e.preventDefault();
//     const name = $("#cName").val();
//     const contact = $("#cContact").val();
//     const area = $("#cArea").val();
//     const message = $("#cMessage").val();
//     console.log(name, contact, area, message);

//     db.collection("newConnections")
//       .add({
//         name: name,
//         contact: contact,
//         area: area,
//         message: message
//       })
//       .then(e => {
//         console.log(e);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   });
// });

// //--------------------login----------------------------------------------

// const loginform = document.querySelector(".login-form");
// const login_btn = document.querySelector(".login-btn");



// loginform.addEventListener("submit", e => {

//   login_btn.innerHTML = "please wait :)";


//   e.preventDefault();

//   //get user info
//   const email = document.getElementById("login-email").value;
//   const password = document.getElementById("login-password").value;

//   //signin
//   auth
//     .signInWithEmailAndPassword(email, password)
//     .then(user => {
//       $("#login-modal").modal("hide");
//       console.log(user);
//       login_btn.innerHTML = "Log in";

//     })
//     .catch(e => {
//       console.log(e.message);
//       $(".user-message").text(e.code);
//       $(".user-message").css("display", "inline");
//     });
// });

// //----------------------logout---------------------

// const logout = document.querySelector("#logout");

// logout.addEventListener("click", e => {
//   e.preventDefault();

//   firebase
//     .auth()
//     .signOut()
//     .then(function () {
//       console.log("logged out");
//     })
//     .catch(function (error) {});
// });