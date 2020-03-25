const toggle = document.querySelector('.toggle');
const navItem = document.querySelectorAll('.nav-item');

toggle.addEventListener('click', toggleBar);

function toggleBar() {
  navItem.forEach(item => {
    // if (item.classList.contains('active')) {
    //   item.classList.remove('active');
    // } else {
    //   item.classList.add('active');
    // }
    if (item.classList) {
      item.classList.toggle('active');
    } else {
      // For IE9
      var classes = item.className.split(' ');
      var i = classes.indexOf('active');

      if (i >= 0) {
        classes.splice(i, i);
      } else {
        classes.push('active');
        item.className = classes.join(' ');
      }
    }
  });
}
