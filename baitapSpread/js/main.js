const headingText = document.querySelector('.heading').innerText;
const arrayHeading = [...headingText];
const html = arrayHeading
  .map((character) => {
    return `<span>${character}</span>`;
  })
  .join('');
document.querySelector('.heading').innerHTML = html;
