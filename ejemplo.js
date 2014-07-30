$("#formSolicitud").validate({
            rules: {
                //Datos Personales
                textNombres: "required",
                textApellido1: "required",
                textFechaNacimiento: "required",
                selectTipoDocumento: "required",
                textDocumento: {
                    required: true,
                    maxlength: 11
                },
                selectAnosVivienda: "required",
                selectMesesVivienda: "required",
                textTelefonoCasa: "required",
                selectIdSexo: "required",
                textCelular: "required",
                selectEstadoCivil: "required",
                selectNacionalidad: "required",
                selectProvincia: "required",
                selectCiudad: "required",
                textDireccion: "required",
                selecrecepcion: "required",
                textCorreoElectronico: {
                    required: true,
                    email: true
                },
                textNumero: "required",

                //Datos Laborales
                textCompania: "required",
                selectProvinciaTrabajo: "required",
                selectCiudadTrabajo: "required",
                textDireccionTrabajo: "required",
                selectOcupacion: "required",
                textIngresos: "required",
                selectAnos: "required",
                selectMeses: "required",
                textTelefonoTrabajo: "required",
                checkboxTerminosCondiciones: "required",
                textNombrePlastico: "required"
            },
            messages: {
                //Datos Personales
                textNombres: "Por favor escriba su nombre.",
                textApellido1: "Por favor escriba su apellido.",
                textFechaNacimiento: "Fecha de nacimiento obligatoria.",
                selectTipoDocumento: "Cedula o Pasaporte obligatorio.",
                textDocumento: {
                    required: "Documento Invalido.",
                    maxlength: "Documento Invalido."
                },
                selectAnosVivienda: "Años en Vivienda.",
                selectMesesVivienda: "Meses en Vivienda.",
                textTelefonoCasa: "Por favor escriba su teléfono.",
                selectIdSexo: "Por favor seleccione su sexo.",
                textCelular: "Por favor escriba su celular.",
                selectNacionalidad: "Por favor escriba su Nacionalidad.",
                selectEstadoCivil: "Por favor seleccione su estado civil.",
                selectProvincia: "Por favor seleccione su provincia.",
                selectCiudad: "Por favor seleccione su ciudad.",
                textDireccion: "Por favor escriba su dirección.",
                selecrecepcion: "Por favor escriba un medio de recepción.",
                textCorreoElectronico: "Por favor escriba su correo electronico.",
                textNumero: "Por favor escriba el numero de su casa.",

                //Datos Laborales
                textCompania: "Donde trabaja?",
                selectProvinciaTrabajo: "Por favor seleccione provincia.",
                selectCiudadTrabajo: "Por favor seleccione ciudad.",
                textDireccionTrabajo: "Por favor escriba dirección.",
                selectOcupacion: "Por favor seleccione su ocupación.",
                textIngresos: "Por favor escriba sus ingresos.",
                selectAnos: "Años en el empleo?",
                selectMeses: "Meses en el empleo?",
                textTelefonoTrabajo: "Por favor escriba el teléfono.",
                checkboxTerminosCondiciones: "Acepta los términos y condiciones.",
                textNombrePlastico: "Por favor escriba el nombre que ira en la tarjeta."
            },
            submitHandler: function() {
                $('.loding_sel_enviar').fadeIn();

                $.ajax({
                    url: "sistema/acciones.php", 
                    dataType: "html",
                    type:"POST",
                    data: "sendSubscrip=value&"+$('#formSolicitud').serialize()+"&banco_suc="+$('#selecentidad option:selected').text(),
                    success: function (dato) {
                        $('.loding_sel_enviar').fadeOut();

                        if(dato == 0){
                            $(".alert_envio").fadeOut();
                            $(".alert_noenvio").html("Upss !! No pudimos procesar su envió, inténtelo nuevamente.");
                            $(".alert_noenvio").fadeIn();
                            console.log(dato);
                        }

                        if(dato == 1){
                            $('#formSolicitud input').removeClass('valid');
                            $('#formSolicitud select').removeClass('valid');
                            $(".alert_noenvio").fadeOut();
                            $(".alert_envio").fadeIn();
                            $(".limpiar").click();
                            console.log(dato);
                        };

                        if(dato == 2){
                            $(".alert_envio").fadeOut();
                            $("#textDocumento").removeClass("valid");
                            $("#textDocumento").addClass("error");
                            $(".alert_noenvio").html("Esta cedula ya existe.");
                            $(".alert_noenvio").fadeIn();
                            console.log(dato);
                        }

                        if(dato == 3){
                            $(".alert_envio").fadeOut();
                            $("#textDocumento").removeClass("valid");
                            $("#textDocumento").addClass("error");
                            $(".alert_noenvio").html("Este pasaporte ya existe.");
                            $(".alert_noenvio").fadeIn();
                            console.log(dato);
                        }

                        if(dato == 4){
                            $(".alert_envio").fadeOut();
                            $(".alert_noenvio").html("Upss !! No pudimos procesar su envió, inténtelo nuevamente.");
                            $(".alert_noenvio").fadeIn();
                            console.log(dato);
                        }

                        console.log("E d => "+dato);
                    }
                });
            }
        });
