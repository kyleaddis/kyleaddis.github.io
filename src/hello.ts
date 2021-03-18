console.log('Hello World!');

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function terminal_select() {
  const select = <HTMLSelectElement>document.getElementById('term-select');
  const value = select.options[select.selectedIndex].value;
  const loading = document.getElementById('term-loading');
  if (loading) {
    loading.style.display = 'block';
  }
  sleep(1000).then(
    () => (window.location.href = 'http://127.0.0.1:5500/' + value + '.html')
  );
}
