const randomColor = () => {
  let collAtt = [];
  for (let i = 0; i < 3; i++) {
    collAtt[i] = Math.floor(Math.random() * 255) + 1;
  }
  const rCol = `rgb(${collAtt[0]}, ${collAtt[1]}, ${collAtt[2]})`;
  document.querySelector("#showUp").innerText = rCol;
  return (document.body.style.backgroundColor = rCol);
};

document.querySelector("#changer").addEventListener("click", randomColor);
