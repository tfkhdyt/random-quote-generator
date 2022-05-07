window.onload = () => {

  const quoteText = document.querySelector('.quote');
  const pengarangText = document.querySelector('.pengarang');

  function quoteGenerator() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(this.responseText).all;
        const value = Math.floor(Math.random() * data.length);
        const quote = data[value].quote;
        const pengarang = data[value].pengarang;
        
        quoteText.textContent = quote;
        pengarangText.textContent = `~ ${(pengarang == '') ? 'tidak ada keterangan' : pengarang}`;
      }
    }
    xhr.open('GET', 'data/data.json');
    xhr.send();
  }
  
  quoteGenerator();
  
  const buttonGenerate = document.querySelector('.button-generate');
  buttonGenerate.addEventListener('click', () => quoteGenerator());

}