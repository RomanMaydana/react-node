const { Router } = require('express'); const router = new Router(); 
 
const usuarios = [     
    {         
        id: 1,         
        login: 'ana.gomez',        
         nombreCompleto: 'Ana Gomes',         
         email: 'ana.gomez@cognos.com.bo',         
         password: '123456'     } ] 
 
 
router.get('/', (req, res) => {     
    res.json(usuarios); }); 
 
router.get('/:id', (req, res) => {     
    const id = parseInt(req.params.id);     
    const usuario = usuarios.find(usuario => usuario.id === id);     
    const datos = [];     
    if (usuario) {         
        datos.push(usuario);         
        res.json({ estado: 'OK', messaje: '', datos });     
    }     else res.json({ estado: 'ERROR', messaje: 'no encontrado', datos }); }) 
 
router.post('/', (req, res) => {     const id = usuarios.length + 1;     const { login, nombreCompleto, email, password } = req.body;     const usuario = usuarios.find(usuario => usuario.login === login);     if (usuario) {         res.json({ message: 'ERROR, usuario existe' });     }     else { usuarios.push({ id, login,nombreCompleto,email,password });         res.json({ message: 'OK, se inserto' });     } }); 
 
router.put('/:id', (req, res) => {     const id = parseInt(req.params.id);     const { login, nombreCompleto, email, password } = req.body;     const index = usuarios.findIndex(usuario => usuario.id === id);     if (index !== -1) {         usuarios[index] = { id ,login, nombreCompleto, email, password };         res.json({ message: 'OK, usuario actualizado' });     } else res.json({ message: 'ERROR, usuario no existe' }); }); 
 
router.delete('/:id', (req, res) => {     const id = parseInt(req.params.id);     const index = usuarios.findIndex(usuario => usuario.id === id);     if (index !== -1) {         usuarios.splice(index, 1);         res.json({ message: 'OK, usuario borrado' });     } else res.json({ message: 'ERROR, usuario no existe' }); }); 
 
module.exports = router; 