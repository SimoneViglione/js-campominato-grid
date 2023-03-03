const grid = document.getElementById("field");
const bottoneGriglia = document.getElementById("btn");

bottoneGriglia.addEventListener('click', () => {
  grid.innerHTML = '';
  
  for (let i = 1; i <= 100; i++) {
    const quadratiGriglia = document.createElement('div');
    quadratiGriglia.classList.add('quadrato');
    quadratiGriglia.innerText = i;
    
    quadratiGriglia.addEventListener('click', (event) => {

      event.target.classList.toggle('selezionato');
      console.log(event.target.innerText);
    }
);
    
        grid.append(quadratiGriglia);
        }
    }
    );




