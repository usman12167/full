const colorInput = document.getElementById('colorSearch');
const suggestions = document.getElementById('suggestions');
const colorDisplay = document.getElementById('colorDisplay');
const colorName = document.getElementById('colorName');

const colors = [
  'Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 
  'Pink', 'Brown', 'Black', 'White', 'Cyan', 'Magenta', 
  'Lime', 'Indigo', 'Violet', 'Gold', 'Silver', 'Gray',
  'Teal','Turquoise','Maroon','Crimson','Charcoal',
  'Gold','Silver','Copper','Bronze','Rose Gold',
  'Neon Green','Hot Pink','Bright Orange','Baby Blue',
  'Mint Green','Lavender','Peach','Soft Pink'

];

colorInput.addEventListener('input', () => {
  const input = colorInput.value.toLowerCase();
  suggestions.innerHTML = '';
  if (input) {
    const filteredColors = colors.filter(color => 
      color.toLowerCase().includes(input)
    );
    if (filteredColors.length > 0) {
      suggestions.style.display = 'block';
      filteredColors.forEach(color => {
        const div = document.createElement('div');
        div.textContent = color;
        div.addEventListener('click', () => selectColor(color));
        suggestions.appendChild(div);
      });
    } else {
      suggestions.style.display = 'none';
    }
  } else {
    suggestions.style.display = 'none';
  }
});

function selectColor(color) {
  colorInput.value = color;
  suggestions.style.display = 'none';
  colorDisplay.style.backgroundColor = color.toLowerCase();
  colorName.textContent = color;
}
