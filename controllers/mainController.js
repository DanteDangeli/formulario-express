const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '../dataBase/users.json');
const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));


const controller = {
    home: (req, res)=>{
        res.render('home')
    },
    listarUsuarios : (req, res)=>{
        res.render(path.join(__dirname, '../views/listaUsuarios.ejs'), {users})
    },
    eliminarUsuario: (req, res)=>{
        let userEmail = req.params.email;
		let userAelim = users.find(user => user.email == userEmail);
		console.log(userAelim);
		let userIndice = users.indexOf(userAelim);
		console.log('el USUARIO se encuentra en el indice:', userIndice);
		products.splice(userIndice);
		let usersDelJSON = JSON.stringify(users);
		fs.writeFileSync(usersPath, usersDelJSON);
		console.log('USUARIO eliminado :(')
		res.redirect('/')
    }
};


module.exports=controller;