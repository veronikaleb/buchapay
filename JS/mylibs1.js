// ======= LIVE CLOCK =======
function updateDateTime() {
  const now = new Date();
  document.getElementById("datetime").textContent =
    now.toLocaleString('uk-UA', { 
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
}
setInterval(updateDateTime, 1000);
updateDateTime();

// ======= INITIAL DATA =======
const initialData = {
  marsh: [
    { id: "m16", type: "маршрутка", route: "16", from: "м. Буча", to: "с. Озера", days: "щоденно", departures: ["05:30","06:00","06:20","06:40","07:00","07:20","07:40","08:00","08:30","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","16:30","17:00","17:30","18:00","19:00","20:00","21:00"] },
    { id: "m89", type: "маршрутка", route: "89", from: "м. Буча", to: "с. Мироцьке", days: "будні", departures: ["06:10","06:40","07:05","07:30","07:55","08:20","08:45","09:15","10:00","11:00","12:00","16:00","17:00","18:00","19:00","20:00"] },
    { id: "m90", type: "маршрутка", route: "90", from: "м. Буча", to: "м. Гостомель", days: "будні", departures: ["07:30","08:00","08:30","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"] },
    { id: "m91", type: "маршрутка", route: "91", from: "м. Буча", to: "Військове містечко", days: "вихідні", departures: ["07:30","08:00","08:30","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00", "21:30"] },
    { id: "m99", type: "маршрутка", route: "99", from: "м. Буча (вул. Тарасівська)", to: "м. Ірпінь (зал. вокзал)", days: "вихідні", departures: ["07:30","08:00","08:30","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"] },
    { id: "m100", type: "маршрутка", route: "100", from: "м. Буча (ЖК Нова Буча)", to: "м. Ірпінь (автостанція)", days: "вихідні", departures: ["07:30","08:00","08:30","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"] },
    { id: "m212", type: "маршрутка", route: "212", from: "с. Микуличі", to: "м. Київ, ст. м. Академмістечко", days: "вихідні", departures: ["07:30","08:00","08:30","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"] },
    { id: "m212", type: "маршрутка", route: "212", from: "с. Микуличі", to: "м. Київ, ст. м. Академмістечко", days: "будні", departures: ["06:00", "07:00", "07:30","08:00","08:30","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"] },
    { id: "m331", type: "маршрутка", route: "331", from: "м. Буча", to: "с. Гаврилівка", days: "вихідні", departures: ["07:30","08:00","08:30","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"] },
    { id: "m381", type: "маршрутка", route: "381", from: "м. Буча", to: "м. Київ, ст. м. Академмістечко", days: "будні", departures: ["07:30","08:00","08:30","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"] },
    { id: "m381", type: "маршрутка", route: "381", from: "м. Буча", to: "м. Київ, ст. м. Академмістечко", days: "вихідні", departures: ["07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00", "20:00", "21:00", "22:00"] },
    { id: "m421", type: "маршрутка", route: "421", from: "м. Буча (Жк Нова Буча)", to: "м. Київ, ст. м.Героїв Дніпра", days: "щоденно", departures: ["07:30","08:00","08:30","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"] },
    { id: "m422", type: "маршрутка", route: "422", from: "м. Буча", to: "м. Київ, ст. м. Академмістечко", days: "щоденно", departures: ["07:30","08:00","08:30","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"] },
    { id: "m423", type: "маршрутка", route: "423", from: "м. Буча (вул. Тарасівська)", to: "м. Київ, ст. м. Святошин", days: "щоденно", departures: ["07:30","08:00","08:30","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"] },
    { id: "m424", type: "маршрутка", route: "424", from: "с. Ворзель (Кічеєво)", to: "м. Київ, ст. м. Святошин", days: "щоденно", departures: ["07:30","08:00","08:30","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"] },
    { id: "m817", type: "маршрутка", route: "817", from: "с. Бабинці", to: "м. Київ, ст. м. Академмічстечко", days: "щоденно", departures: ["07:30","08:00","08:30","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"] }
  ],
  bus: [
    { id: "b101", type: "автобус", route: "101", from: "Залізнична станція Буча", to: "Залізнична станція Ворзель", days: "щоденно", departures: ["05:45","06:30","07:15","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"] },
    { id: "b102", type: "автобус", route: "102", from: "НДІ Буча", to: "с. Ворзель (Санаторій Україна)", days: "будні", departures: ["06:20","06:50","07:20","07:50","08:20","08:50","09:30","10:30","11:30","12:30","13:30","14:30","15:30","16:30","17:30","18:30"] },
    { id: "b103", type: "автобус", route: "103", from: "м. Буча", to: "с. Синяк", days: "будні", departures: ["06:20","06:50","07:20","07:50","08:20","08:50","09:30","10:30","11:30","12:30","13:30","14:30","15:30","16:30","17:30","18:30"] },
    { id: "b104", type: "автобус", route: "104", from: "м. Буча", to: "с. Здвижівка", days: "будні", departures: ["06:20","06:50","07:20","07:50","08:20","08:50","09:30","10:30","11:30","12:30","13:30","14:30","15:30","16:30","17:30","18:30"] },
    { id: "b105", type: "автобус", route: "105", from: "м. Буча (ЖК Нова Буча)", to: "м. Київ, ТРЦ Лавіна", days: "будні", departures: ["06:20","06:50","07:20","07:50","08:20","08:50","09:30","10:30","11:30","12:30","13:30","14:30","15:30","16:30","17:30","18:30"] },
  ],
train: [
  { id: "t6670", type: "електричка", route: "Немішаєве → Святошин", from: "м. Буча", to: "м. Київ, ст. м. Святошин", days: "щоденно", departures: ["05:18","06:10","07:05","08:20","09:15","10:40","12:05","13:30","15:00","16:25","17:50","19:10","20:35","21:50"] },
  { id: "t6602", type: "електричка", route: "Тетерів → Святошин", from: "м. Буча", to: "м. Київ, ст. м. Святошин", days: "щоденно", departures: ["05:45","06:30","07:15","08:00","09:40","11:20","13:00","14:40","16:20","18:00","19:40","21:20"] },
  { id: "t6604", type: "електричка", route: "Малин → Київ", from: "м. Буча", to: "Київ-Пасажирський", days: "щоденно", departures: ["06:00","07:10","08:20","09:30","10:40","12:00","13:10","14:20","15:30","16:40","18:00","19:10","20:20"] },
  { id: "t6606", type: "електричка", route: "Тетерів → Борщагівка", from: "м. Буча", to: "Борщагівка", days: "щоденно", departures: ["05:30","06:20","07:40","09:00","10:20","11:40","13:00","14:20","15:40","17:00","18:20","19:40","21:00"] },
  { id: "t6672", type: "електричка", route: "Клавдієво → Святошин", from: "м. Буча", to: "м. Київ, ст. м. Святошин", days: "щоденно", departures: ["05:10","06:00","07:00","08:10","09:20","10:30","11:40","13:00","14:10","15:20","16:30","17:40","18:50","20:00","21:10"] },
  { id: "t6612", type: "електричка", route: "Коростень → Борщагівка", from: "м. Буча", to: "Борщагівка", days: "щоденно", departures: ["05:25","06:15","07:05","07:55","09:15","10:35","11:55","13:15","14:35","15:55","17:15","18:35","19:55","21:15"] },
  { id: "t6614", type: "електричка", route: "Тетерів → Київ", from: "м. Буча", to: "Київ-Пасажирський", days: "щоденно", departures: ["05:50","06:40","07:30","08:20","09:10","10:00","11:20","12:40","14:00","15:20","16:40","18:00","19:20","20:40","22:00"] },
  { id: "t6620", type: "електричка", route: "Коростень → Святошин", from: "м. Буча", to: "м. Київ, ст. м. Святошин", days: "щоденно", departures: ["05:35","06:25","07:15","08:05","08:55","09:45","11:05","12:25","13:45","15:05","16:25","17:45","19:05","20:25","21:45"] }
]
};

const reverseData = {
     marsh: [
    { id: "m16r", type: "маршрутка", route: "16", from: "с. Озера", to: "м. Буча", days: "щоденно", departures: ["05:45","06:15","06:35","06:55","07:15","07:35","07:55","08:15","08:45","09:15","10:15","11:15","12:15","13:15","14:15","15:15","16:15","16:45","17:15","17:45","18:15","19:15","20:15","21:15"] },
    { id: "m89r", type: "маршрутка", route: "89", from: "с. Мироцьке", to: "м. Буча", days: "будні", departures: ["06:25","06:55","07:20","07:45","08:10","08:35","09:00","09:30","10:15","11:15","12:15","13:15","14:15","15:15","16:15","17:15","18:15","19:15","20:15"] },
    { id: "m90r", type: "маршрутка", route: "90", from: "м. Гостомель", to: "м. Буча", days: "будні", departures: ["07:45","08:15","08:45","09:15","10:15","11:15","12:15","13:15","14:15","15:15","16:15","17:15","18:15","19:15","20:15"] },
    { id: "m91r", type: "маршрутка", route: "91", from: "Військове містечко", to: "м. Буча", days: "вихідні", departures: ["07:45","08:15","08:45","09:15","10:15","11:15","12:15","13:15","14:15","15:15","16:15","17:15","18:15","19:15"] },
    { id: "m99r", type: "маршрутка", route: "99", from: "м. Ірпінь (зал. вокзал)", to: "м. Буча (вул. Тарасівська)", days: "вихідні", departures: ["07:45","08:15","08:45","09:15","10:15","11:15","12:15","13:15","14:15","15:15","16:15","17:15","18:15","19:15"] },
    { id: "m100r", type: "маршрутка", route: "100", from: "м. Ірпінь (автостанція)", to: "м. Буча (ЖК Нова Буча)", days: "вихідні", departures: ["07:45","08:15","08:45","09:15","10:15","11:15","12:15","13:15","14:15","15:15","16:15","17:15","18:15","19:15"] },
    { id: "m212r", type: "маршрутка", route: "212", from: "м. Київ, ст. м. Академмістечко", to: "с. Микуличі", days: "вихідні", departures: ["07:45","08:15","08:45","09:15","10:15","11:15","12:15","13:15","14:15","15:15","16:15","17:15","18:15","19:15"] },
    { id: "m331r", type: "маршрутка", route: "331", from: "с. Гаврилівка", to: "м. Буча", days: "вихідні", departures: ["07:45","08:15","08:45","09:15","10:15","11:15","12:15","13:15","14:15","15:15","16:15","17:15","18:15","19:15"] },
    { id: "m381r", type: "маршрутка", route: "381", from: "м. Київ, ст. м. Академмістечко", to: "м. Буча", days: "вихідні", departures: ["07:45","08:15","08:45","09:15","10:15","11:15","12:15","13:15","14:15","15:15","16:15","17:15","18:15","19:15"] },
    { id: "m421r", type: "маршрутка", route: "421", from: "м. Київ, ст. м.Героїв Дніпра", to: "м. Буча (Жк Нова Буча)", days: "щоденно", departures: ["07:45","08:15","08:45","09:15","10:15","11:15","12:15","13:15","14:15","15:15","16:15","17:15","18:15","19:15"] },
    { id: "m422r", type: "маршрутка", route: "422", from: "м. Київ, ст. м. Академмістечко", to: "м. Буча", days: "щоденно", departures: ["07:45","08:15","08:45","09:15","10:15","11:15","12:15","13:15","14:15","15:15","16:15","17:15","18:15","19:15"] },
    { id: "m423r", type: "маршрутка", route: "423", from: "м. Київ, ст. м. Святошин", to: "м. Буча (вул. Тарасівська)", days: "щоденно", departures: ["07:45","08:15","08:45","09:15","10:15","11:15","12:15","13:15","14:15","15:15","16:15","17:15","18:15","19:15"] },
    { id: "m424r", type: "маршрутка", route: "424", from: "м. Київ, ст. м. Святошин", to: "с. Ворзель (Кічеєво)", days: "щоденно", departures: ["07:45","08:15","08:45","09:15","10:15","11:15","12:15","13:15","14:15","15:15","16:15","17:15","18:15","19:15"] },
    { id: "m817r", type: "маршрутка", route: "817", from: "м. Київ, ст. м. Академмічстечко", to: "с. Бабинці", days: "щоденно", departures: ["07:45","08:15","08:45","09:15","10:15","11:15","12:15","13:15","14:15","15:15","16:15","17:15","18:15","19:15"] }
  ],
  bus: [
    { id: "b101r", type: "автобус", route: "101", from: "Залізнична станція Ворзель", to: "Залізнична станція Буча", days: "щоденно", departures: ["06:00","06:45","07:30","08:15","09:15","10:15","11:15","12:15","13:15","14:15","15:15","16:15","17:15","18:15","19:15","20:15"] },
    { id: "b102r", type: "автобус", route: "102", from: "с. Ворзель (Санаторій Україна)", to: "НДІ Буча", days: "будні", departures: ["06:35","07:05","07:35","08:05","08:35","09:05","09:45","10:45","11:45","12:45","13:45","14:45","15:45","16:45","17:45","18:45"] },
    { id: "b103r", type: "автобус", route: "103", from: "с. Синяк", to: "м. Буча", days: "будні", departures: ["06:35","07:05","07:35","08:05","08:35","09:05","09:45","10:45","11:45","12:45","13:45","14:45","15:45","16:45","17:45","18:45"] },
    { id: "b104r", type: "автобус", route: "104", from: "с. Здвижівка", to: "м. Буча", days: "будні", departures: ["06:35","07:05","07:35","08:05","08:35","09:05","09:45","10:45","11:45","12:45","13:45","14:45","15:45","16:45","17:45","18:45"] },
    { id: "b105r", type: "автобус", route: "105", from: "м. Київ, ТРЦ Лавіна", to: "м. Буча (ЖК Нова Буча)", days: "будні", departures: ["06:35","07:05","07:35","08:05","08:35","09:05","09:45","10:45","11:45","12:45","13:45","14:45","15:45","16:45","17:45","18:45"] },
  ],

  train: [
    { id: "t6670r", type: "електричка", route: "Святошин → Немішаєве", from: "м. Київ, ст. м. Святошин", to: "м. Буча", days: "щоденно", departures: ["05:33","06:25","07:20","08:35","09:30","10:55","12:20","13:45","15:15","16:40","18:05","19:25","20:50","22:05"] },
    { id: "t6602r", type: "електричка", route: "Святошин → Тетерів", from: "м. Київ, ст. м. Святошин", to: "м. Буча", days: "щоденно", departures: ["06:00","06:45","07:30","08:15","09:55","11:35","13:15","14:55","16:35","18:15","19:55","21:35"] },
    { id: "t6604r", type: "електричка", route: "Київ → Малин", from: "Київ-Пасажирський", to: "м. Буча", days: "щоденно", departures: ["06:15","07:25","08:35","09:45","10:55","12:15","13:25","14:35","15:45","16:55","18:15","19:25","20:35"] },
    { id: "t6606r", type: "електричка", route: "Борщагівка → Тетерів", from: "Борщагівка", to: "м. Буча", days: "щоденно", departures: ["05:45","06:35","07:55","09:15","10:35","11:55","13:15","14:35","15:55","17:15","18:35","19:55","21:15"] },
    { id: "t6672r", type: "електричка", route: "Святошин → Клавдієво", from: "м. Київ, ст. м. Святошин", to: "м. Буча", days: "щоденно", departures: ["05:25","06:15","07:15","08:25","09:35","10:45","11:55","13:15","14:25","15:35","16:45","17:55","19:05","20:15","21:25"] },
    { id: "t6612r", type: "електричка", route: "Борщагівка → Коростень", from: "Борщагівка", to: "м. Буча", days: "щоденно", departures: ["05:40","06:30","07:20","08:10","09:30","10:50","12:10","13:30","14:50","16:10","17:30","18:50","20:10","21:30"] },
    { id: "t6614r", type: "електричка", route: "Київ → Тетерів", from: "Київ-Пасажирський", to: "м. Буча", days: "щоденно", departures: ["06:05","06:55","07:45","08:35","09:25","10:15","11:35","12:55","14:15","15:35","16:55","18:15","19:35","20:55","22:15"] },
    { id: "t6620r", type: "електричка", route: "Святошин → Коростень", from: "м. Київ, ст. м. Святошин", to: "м. Буча", days: "щоденно", departures: ["05:50","06:40","07:30","08:20","09:10","10:00","11:20","12:40","14:00","15:20","16:40","18:00","19:20","20:40","22:00"] }
  ]
};

let data = initialData;
let showFavOnly = false;
let reverseMode = false;

// ======= ELEMENTS =======
const el = {
  tabs: document.querySelectorAll('.tab'),
  panels: document.querySelectorAll('.panel'),
  containers: {
    marsh: document.getElementById('marshContainer'),
    bus: document.getElementById('busContainer'),
    train: document.getElementById('trainContainer')
  },
  search: document.getElementById('searchInput'),
  dayFilter: document.getElementById('dayFilter'),
  favToggle: document.getElementById('favToggle'),
  nowBtn: document.getElementById('nowBtn'),
  reverseBtn: document.getElementById('reverseBtn')
};

// ======= TABS =======
el.tabs.forEach(tab => tab.addEventListener('click', () => switchTab(tab.id.replace('tab-',''))));

function switchTab(key) {
  el.tabs.forEach(t => t.classList.toggle('active', t.id === 'tab-' + key));
  el.panels.forEach(p => {
    const active = p.id === 'panel-' + key;
    p.hidden = !active;
    p.classList.toggle('active', active);
  });
  render();
}

// ======= SEARCH & FILTER =======
['input','change'].forEach(ev => {
  el.search.addEventListener(ev, render);
  el.dayFilter.addEventListener(ev, render);
});

const searchSpan = document.querySelector('.search span');
searchSpan.addEventListener('click', () => {
  el.search.focus();
  render();
});

// ======= FAVORITES BUTTON =======
el.favToggle.addEventListener('click', () => {
  showFavOnly = !showFavOnly;
  el.favToggle.classList.toggle('active', showFavOnly);
  el.favToggle.textContent = showFavOnly ? 'Показати всі' : 'Улюблені';

  // Вимикаємо reverseMode, якщо він активний
  if (showFavOnly && reverseMode) {
    reverseMode = false;
    el.reverseBtn.classList.remove('active');
    el.reverseBtn.textContent = 'Зворотні';
  }

  render();
});

// ======= REVERSE BUTTON =======
el.reverseBtn.addEventListener('click', () => {
  reverseMode = !reverseMode;
  el.reverseBtn.classList.toggle('active', reverseMode);
  el.reverseBtn.textContent = reverseMode ? 'Показати всі' : 'Зворотні';

  // Вимикаємо showFavOnly, якщо він активний
  if (reverseMode && showFavOnly) {
    showFavOnly = false;
    el.favToggle.classList.remove('active');
    el.favToggle.textContent = 'Улюблені';
  }

  render();
});

// ======= FAVORITES HELPERS =======
function getFavs() { return JSON.parse(localStorage.getItem('buchapay-favs') || '[]'); }
function isFav(id) { return getFavs().includes(id); }
function toggleFav(id) {
  const favs = new Set(getFavs());
  favs.has(id) ? favs.delete(id) : favs.add(id);
  localStorage.setItem('buchapay-favs', JSON.stringify([...favs]));
}

// ======= RENDER =======
function render(resetScroll=false) {
  updateHeader(); // Оновлюємо заголовок перед рендером

  const q = el.search.value.trim().toLowerCase();
  const day = el.dayFilter.value;

  ['marsh','bus','train'].forEach(kind => {
    const cont = el.containers[kind];
    cont.innerHTML = '';

    const list = (reverseMode ? reverseData[kind] : data[kind]).filter(item => {
      if (day !== 'усі' && item.days !== day) return false;
      if (showFavOnly && !isFav(item.id)) return false;
      const text = [item.route, item.from, item.to, item.type].join(' ').toLowerCase();
      return !q || text.includes(q);
    });

    if (!list.length) {
      cont.innerHTML = `<p class="hint">Немає результатів за обраними фільтрами.</p>`;
      return;
    }

    list.forEach(item => cont.appendChild(renderCard(item)));
  });

  if (resetScroll) window.scrollTo({ top:0, behavior:'smooth' });
}
// ======= ДОДАЄМО ЗАГОЛОВОК ДО ВКЛАДОК =======
function updateHeader() {
  ['marsh','bus','train'].forEach(kind => {
    const panel = document.getElementById('panel-' + kind);
    let header = panel.querySelector('.panel-header');

    // Якщо заголовок ще не створений — створюємо
    if (!header) {
      header = document.createElement('h2');
      header.className = 'panel-header';
      header.style.textAlign = 'center';
      header.style.margin = '10px 0';
      panel.prepend(header);
    }

    // Встановлюємо текст залежно від стану
    if (showFavOnly) {
      header.textContent = 'Улюблені';
    } else if (reverseMode) {
      header.textContent = 'Зворотні маршрути';
    } else {
      header.textContent = 'Найближчі маршрути';
    }
  });
}
// ======= RENDER CARD =======
function renderCard(item) {
  const tpl = document.getElementById('routeCardTemplate');
  const node = tpl.content.firstElementChild.cloneNode(true);

  const favBtn = node.querySelector('.fav');
  favBtn.classList.toggle('active', isFav(item.id));
  favBtn.addEventListener('click', () => {
    toggleFav(item.id);
    favBtn.classList.toggle('active', isFav(item.id));
  });

  node.querySelector('.route-title').textContent = item.type === 'електричка' ? item.route : '№ ' + item.route;
  node.querySelector('.day-badge').textContent = item.days;
  node.querySelector('.from').textContent = item.from;
  node.querySelector('.to').textContent = item.to;

  const timesWrap = node.querySelector('.times');
  const nowMin = new Date().getHours()*60 + new Date().getMinutes();
  let next = null;
  let nextChip = null;

  item.departures.forEach(t => {
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.textContent = t;
    const [hh, mm] = t.split(':').map(Number);
    const diff = hh*60 + mm - nowMin;
    if (diff >= 0 && diff <= 120 && next === null) {
      chip.classList.add('soon');
      next = diff;
      nextChip = chip;
    }
    timesWrap.appendChild(chip);
  });

  const nextInfo = node.querySelector('.next-info');
  const nextBtn = node.querySelector('.next-btn');
  nextBtn.addEventListener('click', () => {
    if (nextChip) nextChip.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  });

  nextInfo.textContent = next !== null ? `через ${next} хв` : 'сьогодні рейсів не залишилось';

  return node;
}
// ======= INITIAL RENDER =======
render();
setInterval(render, 60000); // оновлення кожну хвилину

//модальне вікно про нас
document.addEventListener('DOMContentLoaded', () => {
  const aboutBtn = document.getElementById('aboutBtn');
  const aboutModal = document.querySelector('.about-modal');
  const closeModal = document.querySelector('.about-close-btn');

  if (aboutBtn && aboutModal && closeModal) {
    aboutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      aboutModal.classList.add('show');
    });

    closeModal.addEventListener('click', () => {
      aboutModal.classList.remove('show');
    });

    aboutModal.addEventListener('click', (e) => {
      if (e.target === aboutModal) {
        aboutModal.classList.remove('show');
      }
    });
  }
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const btn = item.querySelector('.faq-question');
  btn.addEventListener('click', () => {
    const answer = item.querySelector('.faq-answer');

    // Закриваємо інші відповіді
    faqItems.forEach(i => {
      if(i !== item) {
        i.querySelector('.faq-answer').style.display = 'none';
        i.querySelector('.faq-question').classList.remove('active');
      }
    });

    // Перемикаємо поточну
    if(answer.style.display === 'block') {
      answer.style.display = 'none';
      btn.classList.remove('active');
    } else {
      answer.style.display = 'block';
      btn.classList.add('active');
    }
  });
});
