    document.formularioDato.correo.focus();
    document.formularioDato.addEventListener('submit', validarFormulario);
    document.formularioRegistro.addEventListener('submit', validarRegistro);
    document.getElementById('error1').style.display = 'none';
    document.getElementById('error2').style.display = 'none';

    document.getElementById('error3').style.display = 'none';

    document.getElementById('error4').style.display = 'none';
    document.getElementById('error5').style.display = 'none';
    document.getElementById('error6').style.display = 'none';
    document.getElementById('error51').style.display = 'none';





    function validarFormulario(evObject) {
        evObject.preventDefault();
        const Ecorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        var todoCorrecto = true;
        var formulario = document.formularioDato;
        do {
            if (Ecorreo.test(formulario.correo.value) == false) {
                document.getElementById("cor").style.boxShadow = '1px 1px 2px 2px red';

                document.getElementById('error5').style.display = 'block';
                todoCorrecto = false;
            } else {
                document.getElementById("cor").style.boxShadow = 'none';

                document.getElementById('error5').style.display = 'none';
            }
            if (todoCorrecto == true) { formulario.submit(); }
        } while (todoCorrecto = false)
    }

    function validarRegistro(evObject) {
        /*  evObject.preventDefault();
          const telefono = /^\d{7,14}$/; // 7 a 14 numeros.
          const nombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
          const password = /^.{4,12}$/; // 4 a 12 digitos.
          var todoCorrecto = true;
          var formulario = document.formularioRegistro;*/
        do {
            evObject.preventDefault();
            const telefono = /^\d{7,14}$/; // 7 a 14 numeros.
            const nombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
            const password = /^.{4,12}$/; // 4 a 12 digitos.
            var todoCorrecto = true;
            var formulario = document.formularioRegistro;
            if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(formulario.correo.value) == false) {
                document.getElementById('error51').style.display = 'block';
                document.getElementById("cor1").style.boxShadow = '1px 1px 2px 2px red';
                todoCorrecto = false;
            } else {
                document.getElementById('error51').style.display = 'none';
                document.getElementById("cor1").style.boxShadow = 'none';
            }
            if (telefono.test(formulario.Telefono.value) == false) {
                document.getElementById("tel").style.boxShadow = '1px 1px 2px 2px red';

                document.getElementById('error4').style.display = 'block';
                todoCorrecto = false;
            } else {
                document.getElementById("tel").style.boxShadow = 'none';

                document.getElementById('error4').style.display = 'none';
            }
            if (nombre.test(formulario.nombre.value) == false) {
                document.getElementById('error1').style.display = 'block';
                document.getElementById("nom").style.boxShadow = '1px 1px 2px 2px red';
                todoCorrecto = false;
            } else {
                document.getElementById('error1').style.display = 'none';
                document.getElementById("nom").style.boxShadow = 'none';
            }
            if (nombre.test(formulario.paterno.value) == false) {
                document.getElementById("pat").style.boxShadow = '1px 1px 2px 2px red';

                document.getElementById('error2').style.display = 'block';
                todoCorrecto = false;
            } else {
                document.getElementById("pat").style.boxShadow = 'none';

                document.getElementById('error2').style.display = 'none';
            }
            if (nombre.test(formulario.nick.value) == false) {
                document.getElementById("nic").style.boxShadow = '1px 1px 2px 2px red';

                document.getElementById('error3').style.display = 'block';
                todoCorrecto = false;
            } else {
                document.getElementById("nic").style.boxShadow = 'none';

                document.getElementById('error3').style.display = 'none';
            }
            if (password.test(formulario.Contraseña.value) == false) {
                document.getElementById("pas").style.boxShadow = '1px 1px 2px 2px red';

                document.getElementById('error6').style.display = 'block';

                todoCorrecto = false;
            } else {
                document.getElementById("pas").style.boxShadow = 'none';

                document.getElementById('error6').style.display = 'none';
            }
            if (todoCorrecto == true) { formulario.submit(); }
        } while (todoCorrecto = false)
    }