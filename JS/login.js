var objPeople = [

    {
        username: 'ali',
        password: '123456',
        email: 'info@gmail.com'
    },
]
function login() {

    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    for (var i = 1; i < objPeople.length; i++) {
        if (username == objPeople[i].username && password == objPeople[i].password) {
            alert(' giriş başarılı')
            window.location.href = "notlar.html"
        } else {
            alert('şifre ya da kullanıcı adı yanlış')
        }
    }
}

function registerUser() {
    var index = true
    var registerUsername = document.getElementById('newUsername').value
    var registerPassword = document.getElementById('newPassword').value
    var registerEmail = document.getElementById('newEmail').value

    var newUser = {
        username: registerUsername,
        password: registerPassword,
        email: registerEmail
    }
    for (var i = 0; i < objPeople.length; i++) {
        if(registerUsername == objPeople[i].username) {
            alert('Bu kullanıcı adıyla daha önce kayıt olunmuştur!!!')
            index = false
            break
        } else if (registerPassword.length < 6) {
            alert('Şifrenin uzunluğu 6 dan kısa olamaz!!')
            index = false
            break
        } else if (registerEmail == objPeople[i].email) {
            alert('Bu e-mail ile daha önce kayıt olunmuştur!!!')
            index = false
            break
        } 
    } 
    if(index == true){
        objPeople.push(newUser)
        alert('Kaydınız başarılı.')
    } 
    console.log(objPeople)

}