/* ------------------------- Дані маршрутів (залишено без змін) ------------------------- */
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

/* ------------------------- UI елементи ------------------------- */
const routeGrid = document.getElementById('routeGrid');
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

/* ------------------------- Auth / Users (localStorage) ------------------------- */
/* Структура localStorage:
   users = [{ email, username (same as email or custom), firstName, lastName, dob, phone, avatar (base64), passHash, history: [] }]
   currentUserEmail = email string
*/

function loadUsers(){ return JSON.parse(localStorage.getItem('users')||'[]'); }
function saveUsers(u){ localStorage.setItem('users', JSON.stringify(u)); }
function setCurrentUser(email){ localStorage.setItem('currentUserEmail', email); updateAuthUI(); }
function getCurrentUserEmail(){ return localStorage.getItem('currentUserEmail'); }
function clearCurrentUser(){ localStorage.removeItem('currentUserEmail'); updateAuthUI(); }

function findUserByEmail(email){
  if(!email) return null;
  const users = loadUsers();
  return users.find(x => x.email.toLowerCase()===email.toLowerCase()) || null;
}

/* простий хеш — не для безпеки, але щоб не зберігати пароль plain */
function simpleHash(str){
  let h=2166136261>>>0;
  for(let i=0;i<str.length;i++){ h^=str.charCodeAt(i); h=Math.imul(h,16777619); }
  return (h>>>0).toString(16);
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

/* ------------------------- Login / Register UI & Logic ------------------------- */
const openLoginBtn = document.getElementById('openLoginBtn');
const openRegisterBtn = document.getElementById('openRegisterBtn');
const notLoggedUI = document.getElementById('notLoggedUI');
const loggedUI = document.getElementById('loggedUI');
const headerName = document.getElementById('headerName');
const headerEmail = document.getElementById('headerEmail');
const headerAvatar = document.getElementById('headerAvatar');
const openProfileBtn = document.getElementById('openProfileBtn');
const profileCard = document.getElementById('profileCard');

const loginForm = document.getElementById('loginForm');
const login_email = document.getElementById('login_email');
const login_password = document.getElementById('login_password');
const loginError = document.getElementById('loginError');
const toggleLoginPassword = document.getElementById('toggleLoginPassword');
const logoutBtnHeader = document.getElementById('logoutBtn');

const registerModal = document.getElementById('registerModal');
const openRegisterModalBtn = document.getElementById('openRegisterBtn');
const cancelRegister = document.getElementById('cancelRegister');
const registerBtn = document.getElementById('registerBtn');
const registerError = document.getElementById('registerError');

const regFirstName = document.getElementById('regFirstName');
const regLastName = document.getElementById('regLastName');
const regDob = document.getElementById('regDob');
const regEmail = document.getElementById('regEmail');
const regPhone = document.getElementById('regPhone');
const regPassword = document.getElementById('regPassword');
const regPassword2 = document.getElementById('regPassword2');
const avatarUpload = document.getElementById('avatarUpload');
const toggleRegPassword = document.getElementById('toggleRegPassword');

const profileAvatar = document.getElementById('profileAvatar');
const profileFullName = document.getElementById('profileFullName');
const profileEmail = document.getElementById('profileEmail');
const profilePhone = document.getElementById('profilePhone');
const editProfileBtn = document.getElementById('editProfileBtn');
const profileEditSection = document.getElementById('profileEditSection');
const editFirstName = document.getElementById('editFirstName');
const editLastName = document.getElementById('editLastName');
const editDob = document.getElementById('editDob');
const editPhone = document.getElementById('editPhone');
const avatarFile = document.getElementById('avatarFile');
const saveProfileBtn = document.getElementById('saveProfileBtn');
const cancelEditProfileBtn = document.getElementById('cancelEditProfileBtn');

const viewHistoryBtn = document.getElementById('viewHistoryBtn');
const historySection = document.getElementById('historySection');
const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');

const openLoginModalBtn = document.getElementById('openLoginBtn');
const notLoginInline = document.getElementById('loginCardInline');

const forgotPassBtn = document.getElementById('forgotPassBtn');
const recoverModal = document.getElementById('recoverModal');
const cancelRecover = document.getElementById('cancelRecover');
const sendRecoveryCode = document.getElementById('sendRecoveryCode');
const recoverEmail = document.getElementById('recoverEmail');
const recoveryNotice = document.getElementById('recoveryNotice');
const recoverStep2 = document.getElementById('recoverStep2');
const recoveryCode = document.getElementById('recoveryCode');
const newPassword = document.getElementById('newPassword');
const resetPasswordBtn = document.getElementById('resetPasswordBtn');

/* ------------------------- Helper: render auth UI ------------------------- */
function updateAuthUI(){
  const email = getCurrentUserEmail();
  if(!email){
    notLoggedUI.style.display = '';
    loggedUI.classList.add('hidden');
    profileCard.classList.add('hidden');
  } else {
    const user = findUserByEmail(email);
    if(!user) { clearCurrentUser(); return; }
    notLoggedUI.style.display = 'none';
    loggedUI.classList.remove('hidden');
    headerName.textContent = user.firstName ? `${user.firstName} ${user.lastName||''}` : user.email;
    headerEmail.textContent = user.email;
    if(user.avatar) { headerAvatar.src = user.avatar; headerAvatar.style.display='block'; } else { headerAvatar.style.display='none'; }
    // fill profile card
    profileFullName.textContent = (user.firstName||'') + (user.lastName?(' '+user.lastName):'');
    profileEmail.textContent = user.email;
    profilePhone.textContent = user.phone || '';
    if(user.avatar) { profileAvatar.src = user.avatar; profileAvatar.style.display='block'; } else { profileAvatar.style.display='none'; }
    profileCard.classList.remove('hidden');
    profileEditSection.classList.add('hidden');
    historySection.classList.add('hidden');
  }
}

/* ------------------------- Login submit ------------------------- */
loginForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const email = login_email.value.trim();
  const pass = login_password.value;
  const user = findUserByEmail(email);
  if(user && user.passHash === simpleHash(pass)){
    loginError.style.display='none';
    setCurrentUser(user.email);
    login_email.value=''; login_password.value='';
    // close recover if opened
    registerModal.classList.remove('show');
    recoverModal.classList.remove('show');
  } else {
    loginError.style.display='block';
  }
});

/* toggle password visibility in login */
toggleLoginPassword.addEventListener('click', ()=> {
  const t = login_password;
  t.type = (t.type==='password') ? 'text' : 'password';
});

/* ------------------------- Register modal & logic ------------------------- */
openRegisterBtn.addEventListener('click', ()=> {
  registerModal.classList.add('show');
});
cancelRegister.addEventListener('click', ()=> registerModal.classList.remove('show'));
toggleRegPassword.addEventListener('click', ()=> {
  regPassword.type = regPassword.type==='password' ? 'text' : 'password';
});

/* read avatar file to base64 */
function fileToDataUrl(file, cb){
  const fr = new FileReader();
  fr.onload = ()=> cb(fr.result);
  fr.readAsDataURL(file);
}

/* register */
registerBtn.addEventListener('click', ()=>{
  registerError.style.display='none';
  const fn = regFirstName.value.trim();
  const ln = regLastName.value.trim();
  const dob = regDob.value;
  const email = regEmail.value.trim().toLowerCase();
  const phone = regPhone.value.trim();
  const p1 = regPassword.value;
  const p2 = regPassword2.value;

  if(!email || !p1 || p1.length<6) { registerError.textContent='Введіть коректну пошту і пароль (мінімум 6 символів)'; registerError.style.display='block'; return; }
  if(p1 !== p2) { registerError.textContent='Паролі не співпадають'; registerError.style.display='block'; return; }
  if(findUserByEmail(email)){ registerError.textContent='Користувач з такою поштою вже існує'; registerError.style.display='block'; return; }

  const users = loadUsers();
  const newUser = { email, firstName:fn, lastName:ln, dob:dob, phone:phone, avatar:null, passHash:simpleHash(p1), history:[] };
  const avatarFileObj = (avatarUpload.files && avatarUpload.files[0]) ? avatarUpload.files[0] : null;
  if(avatarFileObj){
    fileToDataUrl(avatarFileObj, (dataUrl)=>{
      newUser.avatar = dataUrl;
      users.push(newUser);
      saveUsers(users);
      setCurrentUser(email);
      registerModal.classList.remove('show');
      // clear form
      regFirstName.value=''; regLastName.value=''; regDob.value=''; regEmail.value=''; regPhone.value=''; regPassword.value=''; regPassword2.value=''; avatarUpload.value='';
    });
  } else {
    users.push(newUser);
    saveUsers(users);
    setCurrentUser(email);
    registerModal.classList.remove('show');
    // clear form
    regFirstName.value=''; regLastName.value=''; regDob.value=''; regEmail.value=''; regPhone.value=''; regPassword.value=''; regPassword2.value=''; avatarUpload.value='';
  }
});

/* ------------------------- Logout ------------------------- */
logoutBtnHeader.addEventListener('click', ()=>{
  clearCurrentUser();
  ticketPanel.classList.add('hidden');
  finalCard.classList.add('hidden');
  document.querySelectorAll('.route-card').forEach(c=>c.classList.remove('active'));
});

/* ------------------------- Profile editing ------------------------- */
openProfileBtn.addEventListener('click', ()=> {
  profileCard.classList.toggle('hidden');
  updateAuthUI();
});

editProfileBtn.addEventListener('click', ()=>{
  const email = getCurrentUserEmail();
  if(!email) return alert('Увійдіть, щоб редагувати профіль');
  const user = findUserByEmail(email);
  if(!user) return;
  editFirstName.value = user.firstName || '';
  editLastName.value = user.lastName || '';
  editDob.value = user.dob || '';
  editPhone.value = user.phone || '';
  profileEditSection.classList.remove('hidden');
});

cancelEditProfileBtn.addEventListener('click', ()=> profileEditSection.classList.add('hidden'));

saveProfileBtn.addEventListener('click', ()=>{
  const email = getCurrentUserEmail(); if(!email) return;
  const users = loadUsers(); const idx = users.findIndex(u=>u.email===email); if(idx===-1) return;
  users[idx].firstName = editFirstName.value.trim();
  users[idx].lastName = editLastName.value.trim();
  users[idx].dob = editDob.value;
  users[idx].phone = editPhone.value.trim();

  const f = avatarFile.files && avatarFile.files[0];
  if(f){
    fileToDataUrl(f, data => {
      users[idx].avatar = data;
      saveUsers(users);
      updateAuthUI();
      profileEditSection.classList.add('hidden');
    });
  } else {
    saveUsers(users);
    updateAuthUI();
    profileEditSection.classList.add('hidden');
  }
});

/* ------------------------- History ------------------------- */
viewHistoryBtn.addEventListener('click', ()=>{
  historySection.classList.toggle('hidden');
  profileEditSection.classList.add('hidden');
  renderHistory();
});

function renderHistory(){
  historyList.innerHTML = '';
  const email = getCurrentUserEmail();
  if(!email){ historyList.innerHTML = '<div class="muted">Не знайдено користувача</div>'; return; }
  const user = findUserByEmail(email);
  if(!user || !user.history || user.history.length===0){ historyList.innerHTML = '<div class="muted">Історія порожня</div>'; return; }
  user.history.slice().reverse().forEach(item=>{
    const d = document.createElement('div'); d.className='history-item';
    d.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center"><div><strong>${item.route}</strong> — ${item.type}</div><div style="color:var(--muted);font-size:12px">${new Date(item.timestamp).toLocaleString('uk-UA')}</div></div>
                   <div style="margin-top:6px;color:var(--muted)">Від: ${item.from} • До: ${item.to} • Сума: ${item.price} грн</div>`;
    historyList.appendChild(d);
  });
}

clearHistoryBtn.addEventListener('click', ()=>{
  if(!confirm('Очистити історію покупок?')) return;
  const email = getCurrentUserEmail(); if(!email) return;
  const users = loadUsers(); const u = users.find(x=>x.email===email); if(!u) return;
  u.history = [];
  saveUsers(users);
  renderHistory();
});

/* ------------------------- Recovery (демо, код показується локально) ------------------------- */
forgotPassBtn.addEventListener('click', ()=> {
  recoverEmail.value = login_email.value.trim();
  recoverModal.classList.add('show');
});
cancelRecover.addEventListener('click', ()=> recoverModal.classList.remove('show'));

sendRecoveryCode.addEventListener('click', ()=>{
  const email = recoverEmail.value.trim().toLowerCase();
  const user = findUserByEmail(email);
  if(!user){ recoveryNotice.textContent = 'Користувач з такою поштою не знайдений'; return; }
  // згенерувати код і зберегти в localStorage demo
  const code = String(Math.floor(100000 + Math.random()*900000));
  // зберігаємо код тимчасово
  const recovery = JSON.parse(localStorage.getItem('recovery')||'{}');
  recovery[email] = { code, expires: Date.now() + 10*60*1000 }; // 10 хв
  localStorage.setItem('recovery', JSON.stringify(recovery));
  // У реальному додатку код повинен бути відправлений на пошту — тут показуємо демо-повідомлення
  recoveryNotice.innerHTML = `Код підтвердження (DEMO): <strong>${code}</strong>. У продакшені код надсилається на email.`;
  recoverStep2.classList.remove('hidden');
});

resetPasswordBtn.addEventListener('click', ()=>{
  const email = recoverEmail.value.trim().toLowerCase();
  const code = recoveryCode.value.trim();
  const pass = newPassword.value;
  if(!email || !code || !pass) return alert('Заповніть всі поля');
  const recovery = JSON.parse(localStorage.getItem('recovery')||'{}');
  if(!recovery[email] || recovery[email].code !== code || recovery[email].expires < Date.now()){
    return alert('Некоректний код або час життя коду минув');
  }
  // оновити пароль
  const users = loadUsers(); const idx = users.findIndex(u=>u.email===email);
  if(idx===-1) return alert('Користувача не знайдено');
  users[idx].passHash = simpleHash(pass);
  saveUsers(users);
  delete recovery[email]; localStorage.setItem('recovery', JSON.stringify(recovery));
  alert('Пароль успішно змінено. Увійдіть із новим паролем.');
  recoverModal.classList.remove('show');
});

/* ------------------------- Payment modal behaviour (зміни) ------------------------- */
payBtn.addEventListener('click', () => {
  const email = getCurrentUserEmail();
  if (!email) {
    alert('Будь ласка, спочатку увійдіть у систему');
    return;
  }
  if (selectedRouteIndex === null) return alert('Оберіть маршрут');
  const r = routes[selectedRouteIndex];
  modalRoute.textContent = `${r.from} → ${r.to} (${r.type} №${r.route})`;
  modalPrice.textContent = determinePrice(r) + ' грн';
  // clear card inputs
  document.getElementById('cardNumber').value = '';
  document.getElementById('cardExpiry').value = '';
  document.getElementById('cardCvc').value = '';
  modal.classList.add('show');
});

/* auto format card number into groups of 4 while typing */
const cardNumberInput = document.getElementById('cardNumber');
cardNumberInput.addEventListener('input', (e)=>{
  const pos = cardNumberInput.selectionStart;
  let v = cardNumberInput.value;
  // strip non-digits
  const digits = v.replace(/\D/g,'').slice(0,16);
  let grouped = digits.replace(/(.{4})/g,'$1 ').trim();
  cardNumberInput.value = grouped;
  // try to keep cursor near end:
  cardNumberInput.selectionStart = cardNumberInput.selectionEnd = cardNumberInput.value.length;
});

/* ------------------------- Final ticket & barcode, and saving history ------------------------- */
function showFinalTicket() {
  const email = getCurrentUserEmail();
  if (!email) {
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

  // додати до історії користувача
  const users = loadUsers(); const idx = users.findIndex(u=>u.email===email);
  if(idx!==-1){
    users[idx].history = users[idx].history || [];
    users[idx].history.push({
      route: (r.type==='електричка'?r.route:'№ '+r.route),
      type: r.type,
      from: r.from,
      to: r.to,
      price: determinePrice(r),
      timestamp: now.toISOString(),
      payload
    });
    saveUsers(users);
  }
}

/* ------------------------- Barcode drawing (preserve original look) ------------------------- */
function drawBarcode(data){
  const ctx=barcodeCanvas.getContext('2d');
  const w=barcodeCanvas.width;
  const h=barcodeCanvas.height;
  ctx.fillStyle='#fff'; ctx.fillRect(0,0,w,h);
  let seed = simpleFNV(data).toString(2).padStart(32,'0') + simpleFNV(data+'salt').toString(2).padStart(32,'0');
  const cols=120; const colW=Math.floor(w/cols);
  for(let i=0;i<cols;i++){
    const bit=(seed.charCodeAt(i%seed.length)&1);
    const rnd=(simpleFNV(data+'_'+i)%100)/100;
    const thickness=Math.max(1,Math.round(colW*(0.6+rnd*1.2)));
    ctx.fillStyle=bit? '#0b3a1f':'#000';
    const x=i*colW+Math.round((colW-thickness)/2);
    ctx.fillRect(x,8,thickness,h-16);
  }
  ctx.font='14px Inter, Arial';
  ctx.fillStyle='#063012';
  const short='ID:'+simpleFNV(data).toString(16).toUpperCase();
  ctx.fillText(short,10,h-6);
}
function simpleFNV(str){
  let h=2166136261>>>0;
  for(let i=0;i<str.length;i++){ h^=str.charCodeAt(i); h=Math.imul(h,16777619); }
  return h>>>0;
}

/* ------------------------- Save & Print ------------------------- */
saveBarcode.addEventListener('click', ()=>{
  const url=barcodeCanvas.toDataURL('image/png');
  const a=document.createElement('a'); a.href=url; a.download='barcode_ticket.png'; document.body.appendChild(a); a.click(); a.remove();
});
printTicket.addEventListener('click', ()=>window.print());

/* ------------------------- Modal buttons: confirm payment (валидація картки) ------------------------- */
confirmPay.addEventListener('click', () => {
  const rawNumber = document.getElementById('cardNumber').value;
  const cardNumberDigits = rawNumber.replace(/\D/g,'');
  const cardExpiry = document.getElementById('cardExpiry').value.trim();
  const cardCvc = document.getElementById('cardCvc').value.trim();

  const cardNumberValid = /^\d{16}$/.test(cardNumberDigits);
  const expiryValid = /^(0[1-9]|1[0-2])\/\d{2}$/.test(cardExpiry);
  const cvcValid = /^\d{3}$/.test(cardCvc);

  if (!cardNumberValid) return alert('Введіть 16 цифр номера картки');
  if (!expiryValid) return alert('Введіть термін дії у форматі MM/YY');
  if (!cvcValid) return alert('Введіть 3 цифри CVC');

  // якщо все ок — закриваємо модалку та показуємо квиток
  modal.classList.remove('show');

  setTimeout(() => {
    showFinalTicket(); // показуємо фінальний квиток із barcode
    // Очистка полів
    document.getElementById('cardNumber').value = '';
    document.getElementById('cardExpiry').value = '';
    document.getElementById('cardCvc').value = '';
    // оновити історію в UI, якщо відкрита
    renderHistory();
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

/* ------------------------- Small UI actions: open login/register modals ------------------------- */
openLoginBtn.addEventListener('click', ()=> {
  // focus inline login
  window.scrollTo({top:0, behavior:'smooth'});
  document.getElementById('login_email').focus();
});
openRegisterModalBtn.addEventListener('click', ()=> {
  registerModal.classList.add('show');
});

/* close modal on background click */
document.querySelectorAll('.modal').forEach(m=>{
  m.addEventListener('click', (e)=>{
    if(e.target === m){ m.classList.remove('show'); }
  });
});

/* toggle header profile view */
document.getElementById('logoutBtn').addEventListener('click', ()=>{
  clearCurrentUser();
});

/* ------------------------- Init ------------------------- */
renderRoutes();
updateAuthUI();

/* ------------------------- Small enhancements: autofill demo account (optional) ------------------------- */
/* If you want, create demo user for quick testing */
(function ensureDemoUser(){
  const users = loadUsers();
  if(!users.find(u=>u.email==='demo@example.com')){
    users.push({
      email:'demo@example.com',
      firstName:'Demo',
      lastName:'User',
      dob:'',
      phone:'+380000000000',
      avatar:null,
      passHash: simpleHash('demo123'),
      history: []
    });
    saveUsers(users);
  }
})();