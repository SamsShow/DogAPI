function api(apiUrl, index) {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(`${index}`, data);

        const image = document.createElement('img');
        image.src = data.message;
        image.classList.add('m-4', 'border', 'border-gray-300', 'rounded', 'max-w-xs');

        const section = document.querySelector('.flex');
        section.appendChild(image);

        const nextIndex = index + 1;
        setTimeout(() => {
          api(apiUrl, nextIndex);
        }, fibonacci(nextIndex) * 1000); 
    })
    .catch((error) => {
        console.error(`${index}:`, error);
    });
}
  
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}


api('https://dog.ceo/api/breeds/image/random', 0);
