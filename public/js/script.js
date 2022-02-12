$(document).ready(() => {
    const socket = io.connect();
    const nickname = $('.login-form #nickname');
    const loginForm = $('.login-form');

    const messageForm = $('.message-form');
    const messagesList = $('.message-list')
    const usersList = $('.users-list')

    loginForm.submit((e) => {
        e.preventDefault();
        socket.emit('login', nickname.val())
        console.log(nickname.val());
    })

    //listeners
    socket.on('login', (data) => {
        if(data.status === 'OK') {
            loginForm.hide();
            messageForm.removeClass('d-none');
            messagesList.removeClass('d-none');
            usersList.removeClass('d-none');
        }
    })
});