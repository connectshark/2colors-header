const left = document.querySelector('#left-side')

const handleOnMove = e => {
  const p = e.clientX / window.innerWidth * 100

  left.style.width = `${ p }%`
}

document.addEventListener('mousemove', e => handleOnMove(e))
document.addEventListener('touchmove', e => handleOnMove(e.touches[0]))