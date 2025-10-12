let seasonCount = 0;
let cashCount = 0;
let discountCount = 0;
let youthDiscountCount = 0;
let freeChildCount = 0;
let vipCount = 0;

let csvData = "Ottelu,Kausikortilla,Käteisellä,Alennusliput,Alennus 11v–17v,Alle 10v,Arvovieraat,Yhteensä,Tuotto (€)\n";

function updateDisplay() {
  document.getElementById('seasonCount').textContent = seasonCount;
  document.getElementById('cashCount').textContent = cashCount;
  document.getElementById('discountCount').textContent = discountCount;
  document.getElementById('youthDiscountCount').textContent = youthDiscountCount;
  document.getElementById('freeChildCount').textContent = freeChildCount;
  document.getElementById('vipCount').textContent = vipCount;
  document.getElementById('totalCount').textContent =
    seasonCount + cashCount + discountCount + youthDiscountCount + freeChildCount + vipCount;
  document.getElementById('totalRevenue').textContent =
    (cashCount * 8) + (discountCount * 6) + (youthDiscountCount * 5);
}

// Kausikortti
function addSeasonTicket() {
  seasonCount++;
  updateDisplay();
}
function removeSeasonTicket() {
  if (seasonCount > 0) {
    seasonCount--;
    updateDisplay();
  }
}

// Käteinen
function addCash() {
  cashCount++;
  updateDisplay();
}
function removeCash() {
  if (cashCount > 0) {
    cashCount--;
    updateDisplay();
  }
}

// Alennusliput
function addDiscount() {
  discountCount++;
  updateDisplay();
}
function removeDiscount() {
  if (discountCount > 0) {
    discountCount--;
    updateDisplay();
  }
}

// Alennusliput 11v–17v
function addYouthDiscount() {
  youthDiscountCount++;
  updateDisplay();
}
function removeYouthDiscount() {
  if (youthDiscountCount > 0) {
    youthDiscountCount--;
    updateDisplay();
  }
}

// Alle 10v
function addFreeChild() {
  freeChildCount++;
  updateDisplay();
}
function removeFreeChild() {
  if (freeChildCount > 0) {
    freeChildCount--;
    updateDisplay();
  }
}

// Arvovieraat
function addVIP() {
  vipCount++;
  updateDisplay();
}
function removeVIP() {
  if (vipCount > 0) {
    vipCount--;
    updateDisplay();
  }
}

// Nollaus
function resetCounts() {
  seasonCount = 0;
  cashCount = 0;
  discountCount = 0;
  youthDiscountCount = 0;
  freeChildCount = 0;
  vipCount = 0;
  updateDisplay();
}

// Tallennus CSV:ksi
function saveToCSV() {
  const match = document.getElementById('matchSelect').value;
  const total = seasonCount + cashCount + discountCount + youthDiscountCount + freeChildCount + vipCount;
  const revenue = (cashCount * 8) + (discountCount * 5) + (youthDiscountCount * 5);
  const row = `${match},${seasonCount},${cashCount},${discountCount},${youthDiscountCount},${freeChildCount},${vipCount},${total},${revenue}\n`;
  csvData += row;

  const filename = prompt("Anna tiedoston nimi (esim. kotiottelut.csv):", "kotiottelut.csv");
  if (!filename) return;

  const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}
