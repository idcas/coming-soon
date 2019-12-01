
const form = document.querySelector('#contact-form');
const btnForm = document.querySelector('#btn-form');
const modal = document.querySelector('#modal2');
const close = document.querySelector('#close2');

const isEmailValid = function(email) {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

btnForm.addEventListener('click', () => {
      // remove the error class
      const formGroup = document.querySelectorAll('.form-group');
      const errors = document.querySelectorAll('.help-block');
      document.querySelector('#emailInvalid').style.display = 'none';

      errors.forEach(e => {
        e.style.display = 'none';
      });
      formGroup.forEach(e => {
        e.classList.remove('has-error');
      });

      // get the form data
      var formData = {
          'name' : document.querySelector('input[name="form-name"]').value,
          'email' : document.querySelector('input[name="form-email"]').value,
          'phone' : document.querySelector('input[name="form-phone"]').value,
          'message' : document.querySelector('textarea[name="form-message"]').value
      };


      if(formData.name.trim() === '') {
          document.querySelector('#name-field').classList.add('has-error');
          document.querySelector('#name-field').querySelector('.help-block').style.display = 'block';
          return;
      }
      if(formData.email.trim()  === '') {
          document.querySelector('#email-field').classList.add('has-error');
          document.querySelector('#email-field').querySelector('.help-block').style.display = 'block';
          return;
      }
      if(! isEmailValid(formData.email)) {
          document.querySelector('#email-field').classList.add('has-error');
          document.querySelector('#email-field').querySelector('#emailInvalid').style.display = 'block';
          return;
      }
      if(formData.message.trim()  === '') {
          document.querySelector('#message-field').classList.add('has-error');
          document.querySelector('#message-field').querySelector('.help-block').style.display = 'block';
          return;
      }
      Email.send({
          SecureToken: '7059cc5a-eddf-4a3d-96f8-aca0bc03ab13',
          To : "cpineda@idcas.edu.do",
          From : "cpineda@idcas.edu.do",
          Subject : "Consulta de Estudiantes",
          Body : `
          <b>Nombre</b>:  ${formData.name} <br>
          <b>Correo Electrónico</b>:  ${formData.email} <br>
          <b>Teléfono</b>: ${formData.phone} <br>
          <b>Mensaje</b>: ${formData.message} <br>
          `
      }).then(
        message => {
          modal.style.display = 'block';
        }
      );

      window.addEventListener('click', () => {
        modal.style.display = 'none';
      });

      close.addEventListener('click', () => {
        modal.style.display = 'none';
      });
});
