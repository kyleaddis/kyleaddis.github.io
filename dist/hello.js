console.log('Hello World!');
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function terminal_select() {
    const select = document.getElementById('term-select');
    const value = select.options[select.selectedIndex].value;
    const loading = document.getElementById('term-loading');
    const blinky = document.getElementById('blinking-cursor');
    if (loading) {
        loading.style.display = 'block';
    }
    if (blinky) {
        blinky.style.display = 'none';
    }
    sleep(1000).then(() => {
        if (loading) {
            loading.style.display = 'none';
        }
        if (blinky) {
            blinky.style.display = 'block';
        }
        window.location.href = 'http://127.0.0.1:5500/' + value + '.html';
    });
}
//# sourceMappingURL=hello.js.map