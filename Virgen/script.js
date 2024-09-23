const paneles = document.querySelectorAll('.panel');




paneles.forEach((item)=> {
    item.addEventListener('click', () => {
        eliminarClassesActivo()
        console.log('has eleminado la clase activo')
        item.classList.add('activo')
        
    })
})
 

function eliminarClassesActivo(){
    paneles.forEach((item) => {
        item.classList.remove('activo')
    })

}