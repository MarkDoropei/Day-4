const board = document.querySelector('#board')
const squares_number = 480

const colors = [
    "#000000", "#001900", "#003300", "#004c00", "#006600", 
    "#007f00", "#009900", "#00b200", "#00cc00", "#00e600",
    "#00f000",
    "#001f3f", "#003366", "#004080", "#00509e", "#0066cc",
    "#000033", "#00004c", "#000066", "#00007f", "#000099",
    "#0000b2", "#0000cc", "#0000e6", "#0000f0",
    "#190000", "#330000", "#4c0000", "#660000", "#7f0000",
    "#990000", "#b20000", "#cc0000", "#e60000", "#f00000",
    "#33FF57","#33FFA8","#33FFF5","#66ff33","#66fff5",
    "#80FF33","#83FF33","#86FF66","#99CCFF","#A83380",
    "#A86680","#A833FF","#B20000","#CC3366","#CCFF66",
    "#D4FF33","#F5FF66","#F366FF","#F333FF","#FF3380",
    "#FF66A8","#FFA033","#FFA833",
    '#F5FF33', '#F366FF', '#F333FF', '#FF3380', '#FF66A8', 
    '#FFA033', '#FFA833',
    '#3399ff', '#66ccff', '#99ccff', '#cceeff',
    '#800080', '#9932CC', '#BA55D3', '#D8BFD8', '#E6E6FA',
    '#FFC0CB', '#FF69B4', '#DB7093', '#C71585', '#800040',
    '#FFA07A', '#FA8072', '#E9967A', '#F08080', '#CD5C5C',
    '#FFD700', '#FFC107', '#FFA500', '#FF8C00', '#FF7F50',
    '#DC143C', '#B22222', '#8B0000'
  ];

for(let i = 0; i < squares_number; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
        setColor(square))

    square.addEventListener('mouseleave', () => 
        removeColor(square))

    board.append(square)
}

function setColor (element){
   const color = getRandomColor();
   element.style.backgroundColor = color;
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor (element){
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`
 }
 
 function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
 }