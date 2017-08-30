function component(k) {
  var element = document.createElement('button')
  element.setAttribute('type', 'button')
  element.innerText = 'Click Me'
  element.addEventListener('click', function () {
    import(/* webpackChunkName: 'gaga' */ './lib.js').then(function (module) {
      console.log(module.cube(k))
    })
  })
  return element
}
document.body.appendChild(component(3))
document.body.appendChild(component(6))