const routes = [
  { type: "маршрутка", route: "16", from: "м. Буча", to: "с. Озера", hours: "05:30 - 21:00", interval: "20 хв" },
  { type: "маршрутка", route: "89", from: "м. Буча", to: "с. Мироцьке", hours: "06:10 - 20:00", interval: "30 хв" },
  { type: "маршрутка", route: "90", from: "м. Буча", to: "м. Гостомель", hours: "07:30 - 19:00", interval: "30 хв" },
  { type: "маршрутка", route: "91", from: "м. Буча", to: "Військове містечко", hours: "07:30 - 19:00", interval: "30 хв" },
  { type: "маршрутка", route: "99", from: "м. Буча (вул. Тарасівська)", to: "м. Ірпінь (зал. вокзал)", hours: "07:30 - 19:00", interval: "30 хв" },
  { type: "маршрутка", route: "100", from: "м. Буча (ЖК Нова Буча)", to: "м. Ірпінь (автостанція)", hours: "07:30 - 19:00", interval: "30 хв" },
  { type: "маршрутка", route: "212", from: "с. Микуличі", to: "м. Київ, ст. м. Академмістечко", hours: "07:30 - 19:00", interval: "30 хв" },
  { type: "маршрутка", route: "331", from: "м. Буча", to: "с. Гаврилівка", hours: "07:30 - 19:00", interval: "30 хв" },
  { type: "маршрутка", route: "381", from: "м. Буча", to: "м. Київ, ст. м. Академмістечко", hours: "07:30 - 19:00", interval: "30 хв" },
  { type: "маршрутка", route: "421", from: "м. Буча (Жк Нова Буча)", to: "м. Київ, ст. м.Героїв Дніпра", hours: "07:30 - 19:00", interval: "30 хв" },
  { type: "маршрутка", route: "422", from: "м. Буча", to: "м. Київ, ст. м. Академмістечко", hours: "07:30 - 19:00", interval: "30 хв" },
  { type: "маршрутка", route: "423", from: "м. Буча (вул. Тарасівська)", to: "м. Київ, ст. м. Святошин", hours: "07:30 - 19:00", interval: "30 хв" },
  { type: "маршрутка", route: "424", from: "с. Ворзель (Кічеєво)", to: "м. Київ, ст. м. Святошин", hours: "07:30 - 19:00", interval: "30 хв" },
  { type: "маршрутка", route: "817", from: "с. Бабинці", to: "м. Київ, ст. м. Академмічстечко", hours: "07:30 - 19:00", interval: "30 хв" },
  { type: "автобус", route: "101", from: "Залізнична станція Буча", to: "Залізнична станція Ворзель", hours: "05:45 - 20:00", interval: "30 хв" },
  { type: "автобус", route: "102", from: "НДІ Буча", to: "с. Ворзель (Санаторій Україна)", hours: "06:20 - 18:30", interval: "30 хв" },
  { type: "автобус", route: "103", from: "м. Буча", to: "с. Синяк", hours: "06:20 - 18:30", interval: "30 хв" },
  { type: "автобус", route: "104", from: "м. Буча", to: "с. Здвижівка", hours: "06:20 - 18:30", interval: "30 хв" },
  { type: "автобус", route: "105", from: "м. Буча (ЖК Нова Буча)", to: "м. Київ, ТРЦ Лавіна", hours: "06:20 - 18:30", interval: "30 хв" },
  { type: "електричка", route: "6670", from: "Немішаєве", to: "м. Київ, ст. м. Святошин", hours: "05:18 - 21:50", interval: "1 год" },
  { type: "електричка", route: "6602", from: "Тетерів", to: "м. Київ, ст. м. Святошин", hours: "05:45 - 21:20", interval: "1 год" },
  { type: "електричка", route: "6604", from: "Малин", to: "Київ-Пасажирський", hours: "06:00 - 20:20", interval: "1 год" },
  { type: "електричка", route: "6606", from: "Тетерів", to: "Борщагівка", hours: "05:30 - 21:00", interval: "1 год" },
  { type: "електричка", route: "6672", from: "Клавдієве", to: "м. Київ, ст. м. Святошин", hours: "05:10 - 21:10", interval: "1 год" },
  { type: "електричка", route: "6612", from: "Коростень", to: "Борщагівка", hours: "05:25 - 21:15", interval: "1 год" },
  { type: "електричка", route: "6614", from: "Тетерів", to: "Київ-Пасажирський", hours: "05:50 - 22:00", interval: "1 год" },
  { type: "електричка", route: "6620", from: "Коростень", to: "м. Київ, ст. м. Святошин", hours: "05:35 - 21:45", interval: "1 год" }
];

/* ------------------------- Елементи UI ------------------------- */
const routeGrid = document.getElementById('routeGrid');
const loginForm = document.getElementById('loginForm');
const loginCard = document.getElementById('loginCard');
const errorMsg = document.getElementById('errorMsg');
const logoutBtn = document.getElementById('logoutBtn');
const demoBtn = document.getElementById('demoBtn');

const ticketPanel = document.getElementById('ticketPanel');
const ticketRoute = document.getElementById('ticketRoute');
const ticketFrom = document.getElementById('ticketFrom');
const ticketTo = document.getElementById('ticketTo');
const ticketIssue = document.getElementById('ticketIssue');
const ticketExpiry = document.getElementById('ticketExpiry');
const ticketPrice = document.getElementById('ticketPrice');
const payBtn = document.getElementById('payBtn');

const modal = document.getElementById('modal');
const modalPrice = document.getElementById('modalPrice');
const modalRoute = document.getElementById('modalRoute');
const confirmPay = document.getElementById('confirmPay');
const cancelPay = document.getElementById('cancelPay');

const finalCard = document.getElementById('finalCard');
const finalRoute = document.getElementById('finalRoute');
const finalFrom = document.getElementById('finalFrom');
const finalTo = document.getElementById('finalTo');
const finalIssue = document.getElementById('finalIssue');
const finalExpiry = document.getElementById('finalExpiry');
const finalPrice = document.getElementById('finalPrice');
const barcodeCanvas = document.getElementById('barcodeCanvas');
const saveBarcode = document.getElementById('saveBarcode');
const printTicket = document.getElementById('printTicket');

let selectedRouteIndex = null;
const validCredentials = { username: 'user', password: 'password123' };

/* ------------------------- Helper ------------------------- */
function formatLocal(dt){
  return new Intl.DateTimeFormat('uk-UA', { dateStyle:'short', timeStyle:'short' }).format(dt);
}

function determinePrice(route){
  if(route.type === 'маршрутка'){
    const to = (route.to || '').toLowerCase();
    if(to.includes('київ') || to.includes('к.и')) return 60;
    if(to.includes('ірпін') || to.includes('гостомел')) return 20;
    return 15;
  }
  if(route.type === 'автобус' || route.type === 'електричка') return 15;
  return 15;
}

/* ------------------------- Рендер маршрутів ------------------------- */
function renderRoutes(){
  routeGrid.innerHTML = '';
  routes.forEach((r, i) => {
    const card = document.createElement('div');
    card.className = 'route-card';
    const inner = document.createElement('div');
    inner.className = 'route-card-inner';
    const front = document.createElement('div');
    front.className = 'route-front ' + (r.type==='маршрутка' ? 'route-marshrutka' : r.type==='автобус' ? 'route-avtobus' : 'route-elektrichka');
    const back = document.createElement('div');
    back.className = 'route-back';
    
    front.innerHTML = `<div class="route-title">${r.type==='електричка' ? r.route : '№ '+r.route}</div>
                       <div class="route-sub">${r.from} → ${r.to}</div>`;
 back.innerHTML = `<div style="text-align:left;">
                     <p style="margin:6px 0 0 0" class="small-muted"><strong>Час:</strong>  ${r.hours}<br>Інтервал: ${r.interval}</p>
                  </div>`;

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    routeGrid.appendChild(card);

    card.addEventListener('click', () => {
      document.querySelectorAll('.route-card').forEach(c=>c.classList.remove('active'));
      card.classList.toggle('active');
      selectedRouteIndex = i;
      populateTicket(r);
    });
  });
}

/* ------------------------- Populate ticket ------------------------- */
function populateTicket(r){
  ticketRoute.textContent = (r.type==='електричка'?r.route:'№ '+r.route)+' — '+r.type;
  ticketFrom.textContent = r.from;
  ticketTo.textContent = r.to;
  const now = new Date();
  ticketIssue.textContent = formatLocal(now);
  ticketExpiry.textContent = formatLocal(new Date(now.getTime()+3600000));
  ticketPrice.textContent = determinePrice(r) + ' грн';
  ticketPanel.classList.remove('hidden');
}

let isLoggedIn = false; // <-- нова змінна для авторизації

/* ------------------------- Login logic ------------------------- */
loginForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const u = document.getElementById('username').value.trim();
  const p = document.getElementById('password').value;
  if(u===validCredentials.username && p===validCredentials.password){
    errorMsg.style.display = 'none';
    loginCard.style.display = 'none';
    logoutBtn.classList.remove('hidden');
    isLoggedIn = true; // <-- користувач увійшов
    renderRoutes();
  } else { 
    errorMsg.style.display='block'; 
  }
});

demoBtn.addEventListener('click', ()=>{
  document.getElementById('username').value=validCredentials.username;
  document.getElementById('password').value=validCredentials.password;
  loginForm.dispatchEvent(new Event('submit',{cancelable:true}));
});

logoutBtn.addEventListener('click', ()=>{
  loginCard.style.display='';
  logoutBtn.classList.add('hidden');
  ticketPanel.classList.add('hidden');
  finalCard.classList.add('hidden');
  document.querySelectorAll('.route-card').forEach(c=>c.classList.remove('active'));
  isLoggedIn = false; // <-- користувач вийшов
});

/* ------------------------- Payment modal ------------------------- */
payBtn.addEventListener('click', () => {
  if (!isLoggedIn) {
    alert('Будь ласка, спочатку увійдіть у систему');
    return;
  }
  if (selectedRouteIndex === null) return alert('Оберіть маршрут');
  const r = routes[selectedRouteIndex];
  modalRoute.textContent = `${r.from} → ${r.to} (${r.type} №${r.route})`;
  modalPrice.textContent = determinePrice(r) + ' грн';
  modal.classList.add('show');
});

/* ------------------------- Final ticket & barcode ------------------------- */
function showFinalTicket() {
  if (!isLoggedIn) {
    alert('Будь ласка, спочатку увійдіть у систему');
    return;
  }
  if (selectedRouteIndex === null) return;
  const r = routes[selectedRouteIndex];
  finalRoute.textContent = (r.type === 'електричка' ? r.route : '№ ' + r.route) + ' — ' + r.type;
  finalFrom.textContent = r.from;
  finalTo.textContent = r.to;
  const now = new Date();
  finalIssue.textContent = formatLocal(now);
  finalExpiry.textContent = formatLocal(new Date(now.getTime() + 3600000));
  finalPrice.textContent = determinePrice(r) + ' грн';
  finalCard.classList.remove('hidden');

  const payload = `ticket|${r.type}|${r.route}|${r.from}|${r.to}|${now.toISOString()}|price:${determinePrice(r)}`;
  drawBarcode(payload);
}

/* ------------------------- Barcode ------------------------- */
function simpleHash(str){
  let h=2166136261>>>0;
  for(let i=0;i<str.length;i++){ h^=str.charCodeAt(i); h=Math.imul(h,16777619); }
  return h>>>0;
}

function drawBarcode(data){
  const ctx=barcodeCanvas.getContext('2d');
  const w=barcodeCanvas.width;
  const h=barcodeCanvas.height;
  ctx.fillStyle='#fff'; ctx.fillRect(0,0,w,h);
  let seed = simpleHash(data).toString(2).padStart(32,'0') + simpleHash(data+'salt').toString(2).padStart(32,'0');
  const cols=120; const colW=Math.floor(w/cols);
  for(let i=0;i<cols;i++){
    const bit=seed.charCodeAt(i%seed.length)&1;
    const rnd=(simpleHash(data+'_'+i)%100)/100;
    const thickness=Math.max(1,Math.round(colW*(0.6+rnd*1.2)));
    ctx.fillStyle=bit?'#0b3a1f':'#000';
    const x=i*colW+Math.round((colW-thickness)/2);
    ctx.fillRect(x,8,thickness,h-16);
  }
  ctx.font='14px Inter, Arial';
  ctx.fillStyle='#063012';
  const short='ID:'+simpleHash(data).toString(16).toUpperCase();
  ctx.fillText(short,10,h-6);
}

/* ------------------------- Save & Print ------------------------- */
saveBarcode.addEventListener('click', ()=>{
  const url=barcodeCanvas.toDataURL('image/png');
  const a=document.createElement('a'); a.href=url; a.download='barcode_ticket.png'; document.body.appendChild(a); a.click(); a.remove();
});
printTicket.addEventListener('click', ()=>window.print());

/* ------------------------- Init ------------------------- */
renderRoutes();
document.addEventListener('keydown',(e)=>{ if(e.key==='Escape') modal.classList.remove('show'); });

/* ------------------------- Modal buttons ------------------------- */
confirmPay.addEventListener('click', () => {
  const cardNumber = document.getElementById('cardNumber').value.trim();
  const cardExpiry = document.getElementById('cardExpiry').value.trim();
  const cardCvc = document.getElementById('cardCvc').value.trim();

  // Валідація
  const cardNumberValid = /^\d{16}$/.test(cardNumber);
  const expiryValid = /^(0[1-9]|1[0-2])\/\d{2}$/.test(cardExpiry);
  const cvcValid = /^\d{3}$/.test(cardCvc);

  if (!cardNumberValid) return alert('Введіть 16 цифр номера картки');
  if (!expiryValid) return alert('Введіть термін дії у форматі MM/YY');
  if (!cvcValid) return alert('Введіть 3 цифри CVC');

  // Якщо все ок — закриваємо модалку та показуємо квиток
  modal.classList.remove('show');

  setTimeout(() => {
    showFinalTicket(); // показуємо фінальний квиток із barcode
    // Очистка полів
    document.getElementById('cardNumber').value = '';
    document.getElementById('cardExpiry').value = '';
    document.getElementById('cardCvc').value = '';
  }, 100);
});

cancelPay.addEventListener('click', () => {
  modal.classList.remove('show');
  selectedRouteIndex = null;
  ticketPanel.classList.add('hidden');
  document.querySelectorAll('.route-card').forEach(c => c.classList.remove('active'));
  // Очистка полів
  document.getElementById('cardNumber').value = '';
  document.getElementById('cardExpiry').value = '';
  document.getElementById('cardCvc').value = '';
});

