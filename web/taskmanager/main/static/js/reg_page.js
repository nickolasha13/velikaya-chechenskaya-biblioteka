$(document).ready(function(){
  // Show hide password consts
  const password__show = $(".password__show");
  const password__input_box = $(".password__input_box");

  // Form swap consts
  const signUp = $(".signup-link")
  const logIn = $(".login-link")
  const container = $(".container")

  // SignUp form validation consts
  const name__field = $("#validation__name__field");
  const email__field = $("#validation__email__field");
  const password__field = $("#validation__password__field");
  const password__confirmation__field = $("#validation__password__confirmation__field");

  // Validators
  const name__validator__id = $("#name_validator");
  const email__validator__id = $("#email_validator")
  const password__validator__id = $("#password_validator")
  const password_c__validator__id = $("#password_c_validator")

  // Fields
  const input__field__email = $("#input__field__email")
  const input__field__password = $("#input__field__password")
  const input__field__password__confirmation = $("#input__field__password__confirmation")
  const checkbox = $(".checkbox-text")

  // Show hide password
  password__show.click(function(event){
    password__show.toggleClass("bi-eye");
    password__show.toggleClass("bi-eye-slash");
    if(password__input_box.prop('type') == 'password'){
      password__input_box.attr('type', 'text')
    }
    else {
        password__input_box.attr('type', 'password')

    };
  });

  // Form swap
  signUp.click(function(event){
    event.preventDefault();

    container.addClass("active");
  });

  // Form reverse swap
  logIn.click(function(event){
    event.preventDefault();

    container.removeClass("active");
  });

  // SignUp form validation

  // Вынести эти функции в отдельные поля и сделать чтобы они возвращали true/false при использовании

  function name_val(){
    name__validator__id.addClass("visible")
    name__validator__id.removeAttr('id')
    // Длинна должна быть не более 16 и не менее 4 символов
    // Не должен содержать спец. символы, цифры и иероглифы

    var value = name__field.val();
    var lenght = value.length;

    const regex = /^[A-z_-]{0,16}$/
    const name__validator = $(".name__validator")

    if(lenght === 0) {
      name__validator__id.attr('id', "name_validator")
      input__field__email.removeClass("active__validator")
      return false;
    }

    if(regex.test(value) === false || lenght < 3 && lenght != 0) {
      // Делает что-то что сообщает, что длинна не верна.
      name__validator__id.removeAttr('id')
      input__field__email.addClass("active__validator")
      // Добавить класс бэд и убрать гуд
      return false
    } else {

      name__validator__id.attr('id', "name_validator")
      input__field__email.removeClass("active__validator")

      return true

    }


  }

  function email_val(){
    email__validator__id.addClass("visible")
    email__validator__id.removeAttr('id')
    // Регулярное выражения для имейла.
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i

    // Значение мейла
    const value = email__field.val();

    let reg_result = regex.test(value);
    let lenght = value.length;

    if(lenght === 0) {
      email__validator__id.attr("id", "email_validator")
      input__field__password.removeClass("active__validator")
      return false;
    }

    if(reg_result === false && lenght != 0 ) {
      email__validator__id.removeAttr("id")
      input__field__password.addClass("active__validator")
      return false;
    } else if (reg_result === true || lenght === 0){
      email__validator__id.attr('id', "email_validator")
      input__field__password.removeClass("active__validator")
      return true;
    }

  }

  function password_val(){
    password__validator__id.addClass("visible")
    password__validator__id.removeAttr('id')

    let value = password__field.val();
    let lenght = value.length;

    const regex = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$%^&*_-])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/

    if(lenght === 0) {
      password__validator__id.attr("id", "password_validator")
      input__field__password__confirmation.removeClass("active__validator")
      return false;

    } else if(lenght >= 32) {
      password__validator__id.removeAttr("id")
      input__field__password__confirmation.addClass("active__validator")
      return false ;
    }

    if(regex.test(value) === false && lenght != 0) {
      password__validator__id.removeAttr("id")
      input__field__password__confirmation.addClass("active__validator")
      return false;
    } else {
      password__validator__id.attr("id", "password_validator")
      input__field__password__confirmation.removeClass("active__validator")
      return true;
    }

  }

  function password_c_val(){
    password_c__validator__id.addClass("visible")
    password_c__validator__id.removeAttr('id')

    let value = password__confirmation__field.val();
    let password__value = password__field.val();

    let lenght = value.length;

    if(lenght === 0) {
      password_c__validator__id.attr("id", "password_validator")
      checkbox.removeClass("active__validator")
      return false;

    } else if(lenght >= 32) {
      password_c__validator__id.removeAttr("id")
      checkbox.addClass("active__validator")
      return false;
    }

    if(value != password__value && lenght != 0) {
      password_c__validator__id.removeAttr("id")
      checkbox.addClass("active__validator")
      return false;
    } else {
      password_c__validator__id.attr("id", "password_validator")
      checkbox.removeClass("active__validator")
      return true;
    }
  }

  name__field.keyup(name_val);

  email__field.keyup(email_val);

  password__field.keyup(password_val);

  password__confirmation__field.keyup(password_c_val);



  $("#registration__submit__button").click(function(submit__event){
    let name = name_val();

    let email = email_val();

    let password = password_val();

    let password_c = password_c_val();

    let res = [name, email, password, password_c]
    console.log(res);
    if(name === false || email === false || password === false || password_c === false) {
      submit__event.preventDefault();
    }

    if(res === [true, true, true, true]) {
      console.log("submit");
      $("form.form__signup").submit();
    }

  });

});
