'use strict';

let canvasElem = document.getElementById('chart')

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */
let state = new AppState();
state.loadItems();

const data= state.allProducts

function renderChart() {
  const ctx = document.getElementById('chart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(product => product.name),
      datasets: [{
        label: '# of Votes',
        data: data.map(product => product.timesClicked),
        borderWidth: 1,
        backgroundColor: '#0E1D34'

      },{
        label: '# of Views',
        data: data.map(product => product.timesShown),
        borderWidth: 1,
        backgroundColor: '#5D81B6'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

renderChart();
