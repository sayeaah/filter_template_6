const curveHeading = () => {
  const curvedHeadings = document.querySelectorAll('.js-curved-heading');

  if (curvedHeadings) {
    curvedHeadings.forEach(text => {
      console.log(text)
      const circleType = new CircleType(text);
      circleType.radius(2000);
    })
  }
}

window.onload = () => {
  curveHeading();
}