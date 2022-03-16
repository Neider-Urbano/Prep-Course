# Funciones Callback
    Es la capacidad que tiene JS para enviar una funcion como argumento a otra funcion. Estas funciones pueden llamarse en cualquier momento. Se suele usar la convencion cb para identificar que el arguemnto es un callback.
    
    -function Hola(nombre){
        return "Hola "+nombre;
    }

    -function Adios(nombre){
        return "Adios "+nombre;
    }

    -function Saludo(nombre,cb){
        return cb(nombre);
    }

    -Saludo("neider",Hola);

    Existen metodos para arrays que usan callbacks como argumentos para realizar ciertas operaciones de recorrido en el array. Como son los casos de los metodos: .forEach, .map, .reduce.   