document.getElementById("btn-gerar").addEventListener("click", () => {
  const userInput = document.getElementById("input-gerar").value;
  generateImage(userInput);
});

async function generateImage(userInput) {
  const response = await fetch(
    `https://api.qrserver.com/v1/create-qr-code/?data=${userInput}`
  );

  const imageData = await response.blob();

  const imageUrl = URL.createObjectURL(imageData);
  console.log(imageUrl);
  const imageElement = `<div class=info>  <img src="${imageUrl}"/>
    </div>`;
  console.log(imageElement);
  document.querySelector(".qr-code").innerHTML = imageElement;
}
