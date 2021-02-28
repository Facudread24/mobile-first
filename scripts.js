let carga_add = new bootstrap.Modal(document.getElementById('carga_add'), {})
let ul_listado= document.getElementById('ul_listado')
let section_vacio=document.getElementById('section_vacio')
let listado=document.getElementById('listado')
let descripcion=document.getElementById('descripcion')

let guardar=document.getElementById('boton_add_js').addEventListener('click', function(){

let Nombre_producto = document.getElementById('carga_producto').value
let Menu_carga_icono = document.getElementById('Menu_carga_icono').value
let info_carga_producto = document.getElementById('info_carga_producto').value

document.getElementById('carga_producto').value=""
document.getElementById('Menu_carga_icono').value=""
document.getElementById('info_carga_producto').value=""

let modelo =`<li class="list-group-item" data-nombres="${Nombre_producto}" data-icono="${Menu_carga_icono}
" data-info="${info_carga_producto}" ><img src="${Menu_carga_icono}" 
alt="${Nombre_producto}" class="listado_icono"> ${Nombre_producto} </li>`

ul_listado.innerHTML += modelo

carga_add.hide()

section_vacio.style.display = 'none'
descripcion.style.display= 'none'
listado.style.display='block'

})

let touch_products=document.getElementById('ul_listado').addEventListener('click', function(e){
document.getElementById('nombre_detalle').innerHTML=e.target.getAttribute('data-nombres')
document.getElementById('icono_det').src=e.target.getAttribute('data-icono')
document.getElementById('descripcion_producto').innerHTML=e.target.getAttribute('data-info')

listado.style.display='none'
descripcion.style.display='block'

})

let boton_volver=document.getElementById('boton_volver').addEventListener('click',function(){

    listado.style.display='block'
    descripcion.style.display='none'

})