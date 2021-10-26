const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '../dataBase/users.json');
const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));


const controller = {
    listarUsuarios : (req, res)=>{
        res.render('listarUsuarios', {users})
    }
}