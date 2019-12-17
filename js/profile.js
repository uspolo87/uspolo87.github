$(document).ready(function() {

    // $('.preloader').css('display', 'none');

    var currentUserId;
    var userProfileContainer = document.querySelector('.profile');
    console.log(userProfileContainer);
    var logoutContainer = document.querySelector('.user-logout-container');
    auth.onAuthStateChanged(user => {
        if (user) {
            userProfileContainer.style.display = "block";
            logoutContainer.style.display = "none";
            window.currentUserId = user.uid;
            userDetails(user);
        } else {
            userProfileContainer.style.display = "none";
            logoutContainer.style.display = "block";
        }
    });

});

//------------------profile page UI changes according to user presence----------------//
//------------------displaying the user data changes according to user presence----------------//
function userDetails(user) {
    db.collection('userDetails').doc(user.uid).get().then(doc => {
        $('.preloader').css('display', 'none');
        $('.user-name').text(doc.data().name);
        $('#u-name').val(doc.data().name);
        $('#user-id').text(user.uid);
        $('#user-contact').text(doc.data().contact);
        $('#u-contact').val(doc.data().contact);
        $('#user-email').text(doc.data().email);
        $('#u-email').val(doc.data().email);
        $('#user-address').text(doc.data().address);
        $('#u-address').val(doc.data().address);
        $('#user-box').text(doc.data().boxId);
        $('.user-img').attr('src', doc.data().url);

    });
    // //--------------user pack details-------------------------------------------------------//
    // db.collection('userDetails').doc('gp2HvuSGZQOt7PiDrJAmBpjye0k1').collection('selectedChannels').get().then(doc => {
    //         doc.forEach(e => {
    //             $('#pack-name').text(e.data().PackName)
    //             $('#pack-price').text(e.data().Price)
    //             $('#pack-date').text(e.data().Date)
    //             $('#pack-id').text(e.data().PaymentId)
    //         })
    //     })
    //-------------------------user information update modal--------------------------------//
    $('#profile-update').on('click', function(e) {
        e.preventDefault();

        var name = $('#u-name').val();
        var address = $('#u-address').val();
        var email = $('#u-email').val();
        var contact = $('#u-contact').val();
        db.collection('userDetails').doc('gp2HvuSGZQOt7PiDrJAmBpjye0k1').set({
            name: name,
            address: address,
            email: email,
            contact: contact
        }).then(e => {
            console.log('successfully updated');
            window.location.reload();
        })
    })
}


console.log(Notification.permission);