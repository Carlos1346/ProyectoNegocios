// Declarar variables
var boton = document.getElementById('agregar');
var lista = document.getElementById('lista');
var data = [];
var cant = 0;

// Botones
boton.addEventListener("click", agregar);

// Funciones
function agregar() {
    var ID = document.getElementById('ID').value;
    var Categoria = document.getElementById('Categoria').value;
    var Nombre = document.getElementById('Nombre').value;
    var Descripcion = document.getElementById('Descripcion').value;

    // Agregar elementos al arreglo
    data.push({
        "id": cant,
        "ID": ID,
        "Categoria": Categoria,
        "Nombre": Nombre,
        "Descripcion": Descripcion
    });

    var id_row = 'row' + cant;
    var fila = '<tr id=' + id_row + '><td>' + ID + '</td><td>' + Categoria + '</td><td>' + Nombre + '</td><td>' + Descripcion + '</td><td><a href="#" class="btn btn-danger" onclick="eliminar(' + cant + ')">Eliminar</a></td></tr>';

    // Agregar a la tabla
    $("#lista tbody").append(fila);

    // Vaciar campos del formulario
    $("#ID").val('');
    $("#Categoria").val('');
    $("#Nombre").val('');
    $("#Descripcion").val('');
    $("#ID").focus();
    cant++;
}

function eliminar(index) {
    // Eliminar la fila de la tabla
    $("#row" + index).remove();
    // Eliminar el elemento del arreglo
    data.splice(index, 1);
}

