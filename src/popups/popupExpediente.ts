export function initPopup() {
    document.querySelectorAll('.showPopup-expediente').forEach(element => {
        element.addEventListener('click', () => {
            document.getElementById('popup-expediente')!.style.display = 'block';
            document.getElementById('overlay-expediente')!.style.display = 'block';
        });
    });

    document.getElementById('overlay-expediente')?.addEventListener('click', () => {
        document.getElementById('popup-expediente')!.style.display = 'none';
        document.getElementById('overlay-expediente')!.style.display = 'none';
    });
}