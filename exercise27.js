/*
Por cada email que introduzcamos en una función, vamos a crear un objeto con un id único sobre ese email,
y le vamos a asignar un nombre de usuario, que será el contenido que hay a la izquierda de la @ del email.
Le asignaremos una empresa, que será lo que hay entre la @ y el .com del email (solo vamos a aceptar .com)

una vez tengamos creado ese objeto {id, email, empresa}, lo almacenaremos en nuestra lista de empleados.
Si vamos a dar de alta un empleado existente, se avisará, si el empleado no existe, se mostrará por pantalla
su creación con un mensaje de bienvenida.

2. Decorar la función de inserción para que muestre por pantalla todos los usuarios existentes.
*/ 
let empList =[];

function createUser(email){
    let user ={
        id : empList.length +1,
        email : email,
        username : (email.split('@'))[0],
        company : (email.split('@'))[1].split('.')[0],
    }
    
    if(empList.find(x => x.email == email)){
        console.log(`El usuario con email ${email} ya existe`);
    }else{
        empList.push(user);
        console.log(`El usuario ${user.username} de la empresa ${user.company} ha sido añadido`)
    }
}

function userDecorator(func){
    return function(param){
        console.log(empList);
        return func.call(this, param);
    }
}

createUser = userDecorator(createUser);

createUser('daniel@empresa.com');
createUser('marcos@movicoders.com');
createUser('marcos@movicoders.com');
console.log(empList);


