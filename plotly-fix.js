function forceResizeAllPlots() {
  const plots = document.querySelectorAll('.js-plotly-plot');
  plots.forEach(plot => {
    Plotly.Plots.resize(plot);
  });
}

function resizeAfterDelay() {
  // Run multiple times with delays to catch animations/layout shifts
  setTimeout(forceResizeAllPlots, 100);
  setTimeout(forceResizeAllPlots, 300);
  setTimeout(forceResizeAllPlots, 600);
  setTimeout(forceResizeAllPlots, 1000);
}

Reveal.on('ready',        resizeAfterDelay);
Reveal.on('slidechanged', resizeAfterDelay);
Reveal.on('fragmentshown',resizeAfterDelay);

window.addEventListener('resize', () => {
  clearTimeout(window._resizeTimer);
  window._resizeTimer = setTimeout(resizeAfterDelay, 250);
});

Reveal.on('slidechanged', function(event) {
  const plots = document.querySelectorAll('.js-plotly-plot');
  plots.forEach(p => {
    Plotly.Plots.resize(p);
  });
});

// Also resize once after document load (for the first plot)
window.addEventListener('load', function() {
  const plots = document.querySelectorAll('.js-plotly-plot');
  plots.forEach(p => {
    Plotly.Plots.resize(p);
  });
});