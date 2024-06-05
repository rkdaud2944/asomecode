const remote = require("electron").remote;
const fs = require("fs");

window.remote = remote;
window.fs = fs;

// Crtl + 휠로 확대/축소 시 우측 상단에 크기 표시
window.addEventListener('DOMContentLoaded', () => {
    const zoomDisplay = document.createElement('div');
    zoomDisplay.id = 'zoom-display';
    zoomDisplay.style.position = 'fixed';
    zoomDisplay.style.top = '10px';
    zoomDisplay.style.right = '10px';
    zoomDisplay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    zoomDisplay.style.color = 'white';
    zoomDisplay.style.padding = '5px 10px';
    zoomDisplay.style.borderRadius = '5px';
    zoomDisplay.style.zIndex = '9999';
    zoomDisplay.style.display = 'none';
    document.body.appendChild(zoomDisplay);
  
    window.updateZoomDisplay = (zoomFactor) => {
      zoomDisplay.textContent = `${Math.round(zoomFactor * 100)}%`;
      zoomDisplay.style.display = 'block';
  
      clearTimeout(window.zoomTimeout);
      window.zoomTimeout = setTimeout(() => {
        zoomDisplay.style.display = 'none';
      }, 1000);
    };
  
    window.updateZoomDisplay(window.initialZoomFactor || 1.0);

    const { webFrame } = require('electron');

    let zoomFactor = 1.0;

    const shouldDisableZoom = () => {
        // Assuming you are using Vue Router
        const currentPath = window.location.pathname;
        return currentPath === '/blockCoding';
    };


    window.addEventListener('wheel', (event) => {
        if (shouldDisableZoom()) return;
        if (event.ctrlKey) {
        event.preventDefault();
        if (event.deltaY < 0) {
          zoomFactor += 0.1;
        } else {
          zoomFactor -= 0.1;
        }
        webFrame.setZoomFactor(zoomFactor);
        window.updateZoomDisplay(zoomFactor);
      }
    }, { passive: false });

    window.addEventListener('keydown', (event) => {
        if (shouldDisableZoom()) return;
        if (event.ctrlKey && (event.key === '+' || event.key === '=')) {
            event.preventDefault();
            zoomFactor += 0.1;
            webFrame.setZoomFactor(zoomFactor);
            window.updateZoomDisplay(zoomFactor);
        } else if (event.ctrlKey && event.key === '-') {
            event.preventDefault();
            zoomFactor -= 0.1;
            webFrame.setZoomFactor(zoomFactor);
            window.updateZoomDisplay(zoomFactor);
        }
    });
  });
