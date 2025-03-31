
// Element data structure
const elements = [
    { number: 1, symbol: "H", name: "Hydrogen", category: "nonmetal", mass: 1.008, period: 1, group: 1 },
    { number: 2, symbol: "He", name: "Helium", category: "noble-gas", mass: 4.0026, period: 1, group: 18 },
    { number: 3, symbol: "Li", name: "Lithium", category: "alkali-metal", mass: 6.94, period: 2, group: 1 },
    { number: 4, symbol: "Be", name: "Beryllium", category: "alkaline-earth", mass: 9.0122, period: 2, group: 2 },
    { number: 5, symbol: "B", name: "Boron", category: "metalloid", mass: 10.81, period: 2, group: 13 },
    { number: 6, symbol: "C", name: "Carbon", category: "nonmetal", mass: 12.011, period: 2, group: 14 },
    { number: 7, symbol: "N", name: "Nitrogen", category: "nonmetal", mass: 14.007, period: 2, group: 15 },
    { number: 8, symbol: "O", name: "Oxygen", category: "nonmetal", mass: 15.999, period: 2, group: 16 },
    { number: 9, symbol: "F", name: "Fluorine", category: "halogen", mass: 18.998, period: 2, group: 17 },
    { number: 10, symbol: "Ne", name: "Neon", category: "noble-gas", mass: 20.180, period: 2, group: 18 },
    { number: 11, symbol: "Na", name: "Sodium", category: "alkali-metal", mass: 22.990, period: 3, group: 1 },
    { number: 12, symbol: "Mg", name: "Magnesium", category: "alkaline-earth", mass: 24.305, period: 3, group: 2 },
    { number: 13, symbol: "Al", name: "Aluminum", category: "post-transition", mass: 26.982, period: 3, group: 13 },
    { number: 14, symbol: "Si", name: "Silicon", category: "metalloid", mass: 28.085, period: 3, group: 14 },
    { number: 15, symbol: "P", name: "Phosphorus", category: "nonmetal", mass: 30.974, period: 3, group: 15 },
    { number: 16, symbol: "S", name: "Sulfur", category: "nonmetal", mass: 32.06, period: 3, group: 16 },
    { number: 17, symbol: "Cl", name: "Chlorine", category: "halogen", mass: 35.45, period: 3, group: 17 },
    { number: 18, symbol: "Ar", name: "Argon", category: "noble-gas", mass: 39.948, period: 3, group: 18 },
    { number: 19, symbol: "K", name: "Potassium", category: "alkali-metal", mass: 39.098, period: 4, group: 1 },
    { number: 20, symbol: "Ca", name: "Calcium", category: "alkaline-earth", mass: 40.078, period: 4, group: 2 },
    { number: 21, symbol: "Sc", name: "Scandium", category: "transition-metal", mass: 44.956, period: 4, group: 3 },
    { number: 22, symbol: "Ti", name: "Titanium", category: "transition-metal", mass: 47.867, period: 4, group: 4 },
    { number: 23, symbol: "V", name: "Vanadium", category: "transition-metal", mass: 50.942, period: 4, group: 5 },
    { number: 24, symbol: "Cr", name: "Chromium", category: "transition-metal", mass: 51.996, period: 4, group: 6 },
    { number: 25, symbol: "Mn", name: "Manganese", category: "transition-metal", mass: 54.938, period: 4, group: 7 },
    { number: 26, symbol: "Fe", name: "Iron", category: "transition-metal", mass: 55.845, period: 4, group: 8 },
    { number: 27, symbol: "Co", name: "Cobalt", category: "transition-metal", mass: 58.933, period: 4, group: 9 },
    { number: 28, symbol: "Ni", name: "Nickel", category: "transition-metal", mass: 58.693, period: 4, group: 10 },
    { number: 29, symbol: "Cu", name: "Copper", category: "transition-metal", mass: 63.546, period: 4, group: 11 },
    { number: 30, symbol: "Zn", name: "Zinc", category: "transition-metal", mass: 65.38, period: 4, group: 12 },
    { number: 31, symbol: "Ga", name: "Gallium", category: "post-transition", mass: 69.723, period: 4, group: 13 },
    { number: 32, symbol: "Ge", name: "Germanium", category: "metalloid", mass: 72.630, period: 4, group: 14 },
    { number: 33, symbol: "As", name: "Arsenic", category: "metalloid", mass: 74.922, period: 4, group: 15 },
    { number: 34, symbol: "Se", name: "Selenium", category: "nonmetal", mass: 78.971, period: 4, group: 16 },
    { number: 35, symbol: "Br", name: "Bromine", category: "halogen", mass: 79.904, period: 4, group: 17 },
    { number: 36, symbol: "Kr", name: "Krypton", category: "noble-gas", mass: 83.798, period: 4, group: 18 },
    { number: 37, symbol: "Rb", name: "Rubidium", category: "alkali-metal", mass: 85.468, period: 5, group: 1 },
    { number: 38, symbol: "Sr", name: "Strontium", category: "alkaline-earth", mass: 87.62, period: 5, group: 2 },
    { number: 39, symbol: "Y", name: "Yttrium", category: "transition-metal", mass: 88.906, period: 5, group: 3 },
    { number: 40, symbol: "Zr", name: "Zirconium", category: "transition-metal", mass: 91.224, period: 5, group: 4 },
    { number: 41, symbol: "Nb", name: "Niobium", category: "transition-metal", mass: 92.906, period: 5, group: 5 },
    { number: 42, symbol: "Mo", name: "Molybdenum", category: "transition-metal", mass: 95.95, period: 5, group: 6 },
    { number: 43, symbol: "Tc", name: "Technetium", category: "transition-metal", mass: 98, period: 5, group: 7 },
    { number: 44, symbol: "Ru", name: "Ruthenium", category: "transition-metal", mass: 101.07, period: 5, group: 8 },
    { number: 45, symbol: "Rh", name: "Rhodium", category: "transition-metal", mass: 102.91, period: 5, group: 9 },
    { number: 46, symbol: "Pd", name: "Palladium", category: "transition-metal", mass: 106.42, period: 5, group: 10 },
    { number: 47, symbol: "Ag", name: "Silver", category: "transition-metal", mass: 107.87, period: 5, group: 11 },
    { number: 48, symbol: "Cd", name: "Cadmium", category: "transition-metal", mass: 112.41, period: 5, group: 12 },
    { number: 49, symbol: "In", name: "Indium", category: "post-transition", mass: 114.82, period: 5, group: 13 },
    { number: 50, symbol: "Sn", name: "Tin", category: "post-transition", mass: 118.71, period: 5, group: 14 },
    { number: 51, symbol: "Sb", name: "Antimony", category: "metalloid", mass: 121.76, period: 5, group: 15 },
    { number: 52, symbol: "Te", name: "Tellurium", category: "metalloid", mass: 127.60, period: 5, group: 16 },
    { number: 53, symbol: "I", name: "Iodine", category: "halogen", mass: 126.90, period: 5, group: 17 },
    { number: 54, symbol: "Xe", name: "Xenon", category: "noble-gas", mass: 131.29, period: 5, group: 18 },
    { number: 55, symbol: "Cs", name: "Cesium", category: "alkali-metal", mass: 132.91, period: 6, group: 1 },
    { number: 56, symbol: "Ba", name: "Barium", category: "alkaline-earth", mass: 137.33, period: 6, group: 2 },
    { number: 57, symbol: "La", name: "Lanthanum", category: "lanthanide", mass: 138.91, period: 6, group: 3 },
    { number: 58, symbol: "Ce", name: "Cerium", category: "lanthanide", mass: 140.12, period: 8, group: 4 },
    { number: 59, symbol: "Pr", name: "Praseodymium", category: "lanthanide", mass: 140.91, period: 8, group: 5 },
    { number: 60, symbol: "Nd", name: "Neodymium", category: "lanthanide", mass: 144.24, period: 8, group: 6 },
    { number: 61, symbol: "Pm", name: "Promethium", category: "lanthanide", mass: 145, period: 8, group: 7 },
    { number: 62, symbol: "Sm", name: "Samarium", category: "lanthanide", mass: 150.36, period: 8, group: 8 },
    { number: 63, symbol: "Eu", name: "Europium", category: "lanthanide", mass: 151.96, period: 8, group: 9 },
    { number: 64, symbol: "Gd", name: "Gadolinium", category: "lanthanide", mass: 157.25, period: 8, group: 10 },
    { number: 65, symbol: "Tb", name: "Terbium", category: "lanthanide", mass: 158.93, period: 8, group: 11 },
    { number: 66, symbol: "Dy", name: "Dysprosium", category: "lanthanide", mass: 162.50, period: 8, group: 12 },
    { number: 67, symbol: "Ho", name: "Holmium", category: "lanthanide", mass: 164.93, period: 8, group: 13 },
    { number: 68, symbol: "Er", name: "Erbium", category: "lanthanide", mass: 167.26, period: 8, group: 14 },
    { number: 69, symbol: "Tm", name: "Thulium", category: "lanthanide", mass: 168.93, period: 8, group: 15 },
    { number: 70, symbol: "Yb", name: "Ytterbium", category: "lanthanide", mass: 173.05, period: 8, group: 16 },
    { number: 71, symbol: "Lu", name: "Lutetium", category: "lanthanide", mass: 174.97, period: 8, group: 17 },
    { number: 72, symbol: "Hf", name: "Hafnium", category: "transition-metal", mass: 178.49, period: 6, group: 4 },
    { number: 73, symbol: "Ta", name: "Tantalum", category: "transition-metal", mass: 180.95, period: 6, group: 5 },
    { number: 74, symbol: "W", name: "Tungsten", category: "transition-metal", mass: 183.84, period: 6, group: 6 },
    { number: 75, symbol: "Re", name: "Rhenium", category: "transition-metal", mass: 186.21, period: 6, group: 7 },
    { number: 76, symbol: "Os", name: "Osmium", category: "transition-metal", mass: 190.23, period: 6, group: 8 },
    { number: 77, symbol: "Ir", name: "Iridium", category: "transition-metal", mass: 192.22, period: 6, group: 9 },
    { number: 78, symbol: "Pt", name: "Platinum", category: "transition-metal", mass: 195.08, period: 6, group: 10 },
    { number: 79, symbol: "Au", name: "Gold", category: "transition-metal", mass: 196.97, period: 6, group: 11 },
    { number: 80, symbol: "Hg", name: "Mercury", category: "transition-metal", mass: 200.59, period: 6, group: 12 },
    { number: 81, symbol: "Tl", name: "Thallium", category: "post-transition", mass: 204.38, period: 6, group: 13 },
    { number: 82, symbol: "Pb", name: "Lead", category: "post-transition", mass: 207.2, period: 6, group: 14 },
    { number: 83, symbol: "Bi", name: "Bismuth", category: "post-transition", mass: 208.98, period: 6, group: 15 },
    { number: 84, symbol: "Po", name: "Polonium", category: "post-transition", mass: 209, period: 6, group: 16 },
    { number: 85, symbol: "At", name: "Astatine", category: "halogen", mass: 210, period: 6, group: 17 },
    { number: 86, symbol: "Rn", name: "Radon", category: "noble-gas", mass: 222, period: 6, group: 18 },
    { number: 87, symbol: "Fr", name: "Francium", category: "alkali-metal", mass: 223, period: 7, group: 1 },
    { number: 88, symbol: "Ra", name: "Radium", category: "alkaline-earth", mass: 226, period: 7, group: 2 },
    { number: 89, symbol: "Ac", name: "Actinium", category: "actinide", mass: 227, period: 7, group: 3 },
    { number: 90, symbol: "Th", name: "Thorium", category: "actinide", mass: 232.04, period: 9, group: 4 },
    { number: 91, symbol: "Pa", name: "Protactinium", category: "actinide", mass: 231.04, period: 9, group: 5 },
    { number: 92, symbol: "U", name: "Uranium", category: "actinide", mass: 238.03, period: 9, group: 6 },
    { number: 93, symbol: "Np", name: "Neptunium", category: "actinide", mass: 237, period: 9, group: 7 },
    { number: 94, symbol: "Pu", name: "Plutonium", category: "actinide", mass: 244, period: 9, group: 8 },
    { number: 95, symbol: "Am", name: "Americium", category: "actinide", mass: 243, period: 9, group: 9 },
    { number: 96, symbol: "Cm", name: "Curium", category: "actinide", mass: 247, period: 9, group: 10 },
    { number: 97, symbol: "Bk", name: "Berkelium", category: "actinide", mass: 247, period: 9, group: 11 },
    { number: 98, symbol: "Cf", name: "Californium", category: "actinide", mass: 251, period: 9, group: 12 },
    { number: 99, symbol: "Es", name: "Einsteinium", category: "actinide", mass: 252, period: 9, group: 13 },
    { number: 100, symbol: "Fm", name: "Fermium", category: "actinide", mass: 257, period: 9, group: 14 },
    { number: 101, symbol: "Md", name: "Mendelevium", category: "actinide", mass: 258, period: 9, group: 15 },
    { number: 102, symbol: "No", name: "Nobelium", category: "actinide", mass: 259, period: 9, group: 16 },
    { number: 103, symbol: "Lr", name: "Lawrencium", category: "actinide", mass: 266, period: 9, group: 17 },
    { number: 104, symbol: "Rf", name: "Rutherfordium", category: "transition-metal", mass: 267, period: 7, group: 4 },
    { number: 105, symbol: "Db", name: "Dubnium", category: "transition-metal", mass: 268, period: 7, group: 5 },
    { number: 106, symbol: "Sg", name: "Seaborgium", category: "transition-metal", mass: 269, period: 7, group: 6 },
    { number: 107, symbol: "Bh", name: "Bohrium", category: "transition-metal", mass: 270, period: 7, group: 7 },
    { number: 108, symbol: "Hs", name: "Hassium", category: "transition-metal", mass: 277, period: 7, group: 8 },
    { number: 109, symbol: "Mt", name: "Meitnerium", category: "transition-metal", mass: 278, period: 7, group: 9 },
    { number: 110, symbol: "Ds", name: "Darmstadtium", category: "transition-metal", mass: 281, period: 7, group: 10 },
    { number: 111, symbol: "Rg", name: "Roentgenium", category: "transition-metal", mass: 282, period: 7, group: 11 },
    { number: 112, symbol: "Cn", name: "Copernicium", category: "transition-metal", mass: 285, period: 7, group: 12 },
    { number: 113, symbol: "Nh", name: "Nihonium", category: "post-transition", mass: 286, period: 7, group: 13 },
    { number: 114, symbol: "Fl", name: "Flerovium", category: "post-transition", mass: 289, period: 7, group: 14 },
    { number: 115, symbol: "Mc", name: "Moscovium", category: "post-transition", mass: 290, period: 7, group: 15 },
    { number: 116, symbol: "Lv", name: "Livermorium", category: "post-transition", mass: 293, period: 7, group: 16 },
    { number: 117, symbol: "Ts", name: "Tennessine", category: "halogen", mass: 294, period: 7, group: 17 },
    { number: 118, symbol: "Og", name: "Oganesson", category: "noble-gas", mass: 294, period: 7, group: 18 }
];

// Additional element data for detail view
const elementDetails = {
    "H": { electronConfig: "1s¹", electronegativity: 2.20, density: 0.0000899, meltingPoint: -259.14, boilingPoint: -252.87, discovery: 1766, discoverer: "Henry Cavendish" },
    "He": { electronConfig: "1s²", electronegativity: null, density: 0.0001785, meltingPoint: -272.2, boilingPoint: -268.93, discovery: 1868, discoverer: "Pierre Janssen, Norman Lockyer" },
    "Li": { electronConfig: "[He] 2s¹", electronegativity: 0.98, density: 0.534, meltingPoint: 180.54, boilingPoint: 1342, discovery: 1817, discoverer: "Johan August Arfwedson" },
    "Be": { electronConfig: "[He] 2s²", electronegativity: 1.57, density: 1.85, meltingPoint: 1287, boilingPoint: 2469, discovery: 1798, discoverer: "Louis Nicolas Vauquelin" }
    // More element details would be added here
    // This is a subset for demonstration purposes
};

// Extended details for all elements could be added here
// For brevity, I've included only a few elements' details above

// Function to create the periodic table grid
function createPeriodicTable() {
    const tableContainer = document.getElementById('periodic-table');
    
    // Create empty grid with proper spacing
    for (let period = 1; period <= 7; period++) {
        for (let group = 1; group <= 18; group++) {
            // Find element at this position
            const element = elements.find(e => e.period === period && e.group === group);
            
            if (element) {
                const elementDiv = createElementTile(element);
                tableContainer.appendChild(elementDiv);
            } else {
                // Empty space in the table
                const emptyDiv = document.createElement('div');
                emptyDiv.className = 'empty';
                
                // Special case for lanthanides and actinides indicators
                if (period === 6 && group === 3) {
                    emptyDiv.className = 'element lanthanide';
                    emptyDiv.innerHTML = '57-71';
                    emptyDiv.style.fontSize = '10px';
                } else if (period === 7 && group === 3) {
                    emptyDiv.className = 'element actinide';
                    emptyDiv.innerHTML = '89-103';
                    emptyDiv.style.fontSize = '10px';
                }
                
                tableContainer.appendChild(emptyDiv);
            }
        }
    }
    
    // Add lanthanides row (Period 8)
    const lanthanideLabel = document.createElement('div');
    lanthanideLabel.className = 'element-label';
    lanthanideLabel.style.gridColumn = '1 / span 3';
    lanthanideLabel.textContent = 'Lanthanides';
    lanthanideLabel.style.textAlign = 'right';
    lanthanideLabel.style.paddingRight = '10px';
    lanthanideLabel.style.marginTop = '20px';
    tableContainer.appendChild(lanthanideLabel);
    
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].period === 8) {
            const elementDiv = createElementTile(elements[i]);
            tableContainer.appendChild(elementDiv);
        }
    }
    
    // Add actinides row (Period 9)
    const actinideLabel = document.createElement('div');
    actinideLabel.className = 'element-label';
    actinideLabel.style.gridColumn = '1 / span 3';
    actinideLabel.textContent = 'Actinides';
    actinideLabel.style.textAlign = 'right';
    actinideLabel.style.paddingRight = '10px';
    actinideLabel.style.marginTop = '10px';
    tableContainer.appendChild(actinideLabel);
    
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].period === 9) {
            const elementDiv = createElementTile(elements[i]);
            tableContainer.appendChild(elementDiv);
        }
    }
}

// Function to create an element tile
function createElementTile(element) {
const elementDiv = document.createElement('div');
elementDiv.className = `element ${element.category}`;
elementDiv.setAttribute('data-element', element.symbol);

// Add element info
const atomicNumberDiv = document.createElement('div');
atomicNumberDiv.className = 'atomic-number';
atomicNumberDiv.textContent = element.number;

const symbolDiv = document.createElement('div');
symbolDiv.className = 'symbol';
symbolDiv.textContent = element.symbol;

const nameDiv = document.createElement('div');
nameDiv.className = 'name';
nameDiv.textContent = element.name;

const massDiv = document.createElement('div');
massDiv.className = 'mass';
massDiv.textContent = element.mass;

elementDiv.appendChild(atomicNumberDiv);
elementDiv.appendChild(symbolDiv);
elementDiv.appendChild(nameDiv);
elementDiv.appendChild(massDiv);

// Add click event to show element details
elementDiv.addEventListener('click', function() {
showElementDetails(element);
});

return elementDiv;
}

// Function to show element details in modal
function showElementDetails(element) {
const modal = document.getElementById('elementModal');
const detailsContainer = document.getElementById('elementDetails');

// Clear previous content
detailsContainer.innerHTML = '';

// Create header with symbol and name
const headerDiv = document.createElement('div');
headerDiv.className = 'detail-header';

const symbolDiv = document.createElement('div');
symbolDiv.className = `detail-symbol ${element.category}`;
symbolDiv.textContent = element.symbol;

const nameInfoDiv = document.createElement('div');
nameInfoDiv.className = 'detail-name';

const nameHeader = document.createElement('h2');
nameHeader.textContent = element.name;

const atomicNumber = document.createElement('p');
atomicNumber.textContent = `Atomic Number: ${element.number}`;

nameInfoDiv.appendChild(nameHeader);
nameInfoDiv.appendChild(atomicNumber);

headerDiv.appendChild(symbolDiv);
headerDiv.appendChild(nameInfoDiv);

// Add basic properties
const propertiesDiv = document.createElement('div');
propertiesDiv.className = 'detail-properties';

// Add basic properties we already have for all elements
addProperty(propertiesDiv, 'Atomic Mass', `${element.mass} u`);
addProperty(propertiesDiv, 'Category', formatCategory(element.category));
addProperty(propertiesDiv, 'Period', element.period);
addProperty(propertiesDiv, 'Group', element.group);

// Get additional details if available
const details = elementDetails[element.symbol] || {};

// Add additional properties if available
if (details.electronConfig) {
addProperty(propertiesDiv, 'Electron Configuration', details.electronConfig);
}

if (details.electronegativity !== undefined && details.electronegativity !== null) {
addProperty(propertiesDiv, 'Electronegativity', details.electronegativity);
}

if (details.density) {
addProperty(propertiesDiv, 'Density', `${details.density} g/cm³`);
}

if (details.meltingPoint) {
addProperty(propertiesDiv, 'Melting Point', `${details.meltingPoint} °C`);
}

if (details.boilingPoint) {
addProperty(propertiesDiv, 'Boiling Point', `${details.boilingPoint} °C`);
}

if (details.discovery) {
addProperty(propertiesDiv, 'Year Discovered', details.discovery);
}

if (details.discoverer) {
addProperty(propertiesDiv, 'Discoverer', details.discoverer);
}

// For elements without additional details, add placeholder info
if (!details.electronConfig) {
addProperty(propertiesDiv, 'Electron Configuration', 'Data not available');
}

if (details.electronegativity === undefined) {
addProperty(propertiesDiv, 'Electronegativity', 'Data not available');
}

// Add all sections to the details container
detailsContainer.appendChild(headerDiv);
detailsContainer.appendChild(propertiesDiv);

// Show modal
modal.style.display = 'flex';
}

// Helper function to add a property to the details view
function addProperty(container, name, value) {
const propertyDiv = document.createElement('div');
propertyDiv.className = 'property';

const propertyName = document.createElement('div');
propertyName.className = 'property-name';
propertyName.textContent = name;

const propertyValue = document.createElement('div');
propertyValue.className = 'property-value';
propertyValue.textContent = value;

propertyDiv.appendChild(propertyName);
propertyDiv.appendChild(propertyValue);

container.appendChild(propertyDiv);
}

// Format category name for display
function formatCategory(category) {
// Convert hyphenated names to proper display format
const words = category.split('-');
return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Initialize the application
function init() {
createPeriodicTable();

// Set up modal close button
const closeBtn = document.getElementById('closeModal');
const modal = document.getElementById('elementModal');

closeBtn.addEventListener('click', function() {
modal.style.display = 'none';
});

// Close modal when clicking outside content
window.addEventListener('click', function(event) {
if (event.target === modal) {
    modal.style.display = 'none';
}
});
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
