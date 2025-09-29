const routes = [
  { type: "маршрутка", route: "16", from: "м. Буча", to: "с. Озера", stops: "Залізнична станція Буча, Вулиця Левка Лук'яненка, Вулиця Захисників України, Смт Гостомель (військове містечко)", hours: "05:30 - 21:00", interval: "20 хв", map: "https://zora-irpin.info/wp-content/uploads/2022/06/03-2.jpg" },
  { type: "маршрутка", route: "89", from: "м. Буча", to: "с. Мироцьке", stops: "Залізничний вокзал Буча, Школа №5, Вулиця Пушкінська, Дитячий садок, Санаторій, Вулиця Лісова, Балановка, Крохмальний завод, По вимозі, Вулиця Балабуєва, Вулиця Соборна, село Блиставиця (центр), село Блиставиця", hours: "06:10 - 20:00", interval: "30 хв", map: "https://www.marshrutka.com.ua/3535" },
  { type: "маршрутка", route: "90", from: "м. Буча", to: "м. Гостомель", stops: "Залізничний вокзал Буча, Вулиця Левка Лук'яненка, Вулиця Захисників України, Вулиця Остромирська, Вулиця Автошляхова, Військове містечко (Гостомель)", hours: "07:30 - 19:00", interval: "30 хв", map: "https://www.marshrutka.com.ua/3533" },
  { type: "маршрутка", route: "91", from: "м. Буча", to: "Військове містечко", stops: "Залізничний вокзал Буча, Вулиця Левка Лук'яненка, Вулиця Захисників України, Вулиця Остромирська, Вулиця Автошляхова, Військове містечко (Гостомель)", hours: "07:30 - 19:00", interval: "30 хв", map: "https://www.eway.in.ua/ua/cities/kyiv/routes/10359" },
  { type: "маршрутка", route: "99", from: "м. Буча (вул. Тарасівська)", to: "м. Ірпінь (зал. вокзал)", stops: "Залізничний вокзал Буча, Вулиця Тарасівська, Вулиця Баффета, Вулиця Вокзальна, Вулиця Соборна, Вулиця Гнатюка, Вулиця Озерна, Вулиця Личака, Вулиця Центральна, Залізничний вокзал Ірпінь", hours: "07:30 - 19:00", interval: "30 хв", map: "https://www.marshrutka.com.ua/3532" },
  { type: "маршрутка", route: "100", from: "м. Буча (ЖК Нова Буча)", to: "м. Ірпінь (автостанція)", stops: "ТК «Варшавський», вул. Депутатська, Нове шосе, бульв. Б. Хмельницького, вул. Енергетиків, вул. Захисників України, вул. Л. Лук'яненка, вул. Києво-Мироцька, вул. Тячівська, вул. Сім'ї Красовських, вул. Старо-Яблунська, м. Гостомель, м. Ірпінь (Гостомельське шосе, вул. Котляревського, вул. Антонова, вул. Ветеранів Афганістану, автостанція «Ірпінь»", hours: "07:30 - 19:00", interval: "30 хв", map: "https://www.marshrutka.com.ua/3531" },
  { type: "маршрутка", route: "212", from: "с. Микуличі", to: "м. Київ, ст. м. Академмістечко", stops: "Залізничний вокзал Буча, Вулиця Жовтнева, Садочок «Козачок», Дитячий садок №3, Мельники, с. Балановка, смт Гостомель, Вулиця Соборна, Магазин, Школа, Блиставиця, Озера, Амбулаторія, с. Гаврилівка", hours: "07:30 - 19:00", interval: "30 хв", map: "https://www.eway.in.ua/ua/cities/kyiv/routes/10373" },
  { type: "маршрутка", route: "331", from: "м. Буча", to: "с. Гаврилівка", stops: "Залізничний вокзал Буча, Вулиця Тарасівська, Вулиця Баффета, Вулиця Вокзальна, Вулиця Соборна, Вулиця Гнатюка, Вулиця Озерна, Вулиця Личака, Вулиця Центральна, Залізничний вокзал Ірпінь", hours: "07:30 - 19:00", interval: "30 хв", map: "https://wikiroutes.info/bucha?routes=49776" },
  { type: "маршрутка", route: "381", from: "м. Буча", to: "м. Київ, ст. м. Академмістечко", stops: "ЖК «Новатор», мкр Мельники, ЗОШ №5, Залізничний вокзал Буча, вул. Захисників України, вул. Енернетиків, вул. Нове Шосе, Екомаркет, Новус, ЗОШ №2, ЖК Річ Таун, м. Гостомель, КП, ТРЦ Лавіна, ст. м. Академмістечко ", hours: "07:30 - 19:00", interval: "30 хв", map: "https://www.eway.in.ua/ua/cities/kyiv/routes/554" },
  { type: "маршрутка", route: "421", from: "м. Буча (Жк Нова Буча)", to: "м. Київ, ст. м.Героїв Дніпра", stops: "Ж/М Нова Буча, Вулиця Бориса Гмирі, Вулиця Депутатська, Вулиця Чорних Запорожців, Вулиця Левка Лук'яненка, Вулиця Захисників України, Вулиця Енергетиків, Бульвар Богдана Хмельницького, Нове Шосе, Вулиця Шевченка, Гостомельське Шосе, Мостищенська вулиця, Село Горенка, КПП ДАІ, Лісорозсадник, Гіпермаркет, Вулиця Газопровідна, Нафтовик, Метро Героїв Дніпра", hours: "07:30 - 19:00", interval: "30 хв", map: "https://www.eway.in.ua/ua/cities/kyiv/routes/573" },
  { type: "маршрутка", route: "422", from: "м. Буча", to: "м. Київ, ст. м. Академмістечко", stops: "Станція Лісова Буча, Вулиця Тарасівська, Вулиця Вокзальна, Вулиця Садова, Вулиця Яблунська, Вулиця Щаслива, Вулиця Мінеральна, М. Ірпінь (Нудпсу), Вулиця Українська, Вулиця Університетська, Вулиця Генерала Наумова, Вулиця Академіка Булаховського, Проспект Академіка Палладіна, Вулиця Академіка Єфремова, Станція метро Академмістечко", hours: "07:30 - 19:00", interval: "30 хв", map: "https://www.eway.in.ua/ua/cities/kyiv/routes/671" },
  { type: "маршрутка", route: "423", from: "м. Буча (вул. Тарасівська)", to: "м. Київ, ст. м. Святошин", stops: "Станція Лісова Буча, Вулиця Тарасівська, Площа Баффета, Станція Буча, Вулиця Лугова, Вулиця Садова, Фора, Епіцентр, Вулиця Депутатська, Навчгосп, Вулиця Склозаводська, Вулиця Заводська, Вулиця Садова, Вулиця Лугова, Станція Буча, Вулиця Вокзальна, Вулиця Тарасівська, Станція Лісова Буча, Метро Академмістечко", hours: "07:30 - 19:00", interval: "30 хв", map: "https://www.eway.in.ua/ua/cities/kyiv/routes/555" },
  { type: "маршрутка", route: "424", from: "с. Ворзель (Кічеєво)", to: "м. Київ, ст. м. Святошин", stops: "Вул. Крилова, Вул. 1-го Травня, Вул. Тюльпанова, Вул. Курортна, Станція Ворзель, Вул. Депутатська, Нове Шосе, Вул. Шевченка, Вул. Героїв Майдану, Бульвар Б. Хмельницького, Вул. Києво-Мироцька, Вул. Ярослава Мудрого, с. Горенка, КПП ДАІ, Лісорозсадник, Гіпермаркет, Вул. Газопровідна, Станція метро Академмістечко, Станція метро Святошин", hours: "07:30 - 19:00", interval: "30 хв", map: "https://www.eway.in.ua/ua/cities/kyiv/routes/496" },
  { type: "маршрутка", route: "817", from: "с. Бабинці", to: "м. Київ, ст. м. Академмічстечко", stops: "ст. м. Академмістечко, Нафтовик, Гіпермаркет, Лісорозсадник, КПП ДАІ, Гостомельське шосе, Горенка, Вулиця Героїв Майдану, Буча, Бульвар Богдана Хмельницького, ТЦ «Епіцентр», Вулиця Депутатська, Ворзель (Лікарня), Мироцьке, Немішаєве (Коледж), Микуличі (Ринок), Клавдієве, Бабинці (Заводська вулиця)", hours: "07:30 - 19:00", interval: "30 хв", map: "https://www.eway.in.ua/ua/cities/kyiv/routes/10480" },
  { type: "автобус", route: "101", from: "Залізнична станція Буча", to: "Залізнична станція Ворзель", stops: "ЗС Буча, ЗОШ №5, Новус, Екомаркет-Макдональдз, бульвар Богдана Хмельницького, Епіцентр, ТК Варшавський, Форест Ленд, Ворзель, АЗС, Щаслива №2, Щаслива №1, ЗП Ворзель", hours: "05:45 - 20:00", interval: "30 хв", map: "https://www.buchanews.com.ua/wp-content/uploads/2023/12/marshrut-101-600x600.jpg" },
  { type: "автобус", route: "102", from: "НДІ Буча", to: "с. Ворзель (Санаторій Україна)", stops: "НДІ, Зоряний, Площа Баффета, ЗОШ №3, Магазин Фора, Військомат, Склозавод, Кар’єр, Навчгосп, Магазин, Захисників України, Крамничка, Садочок, ЗП Ворзель", hours: "06:20 - 18:30", interval: "30 хв", map: "https://www.buchanews.com.ua/wp-content/uploads/marshrut-buchatransservis-102-600x600.jpg" },
  { type: "автобус", route: "103", from: "м. Буча", to: "с. Синяк",stops: "ЗС Буча, Блиставиця старостат, Луб’янка старостат, Вороньківка, Раківка, Червоне, Синяк старостат, Гаврилівка старостат", hours: "06:20 - 18:30", interval: "30 хв", map: "https://www.buchanews.com.ua/wp-content/uploads/marshrut-buchatransservis-103-600x600.jpg" },
  { type: "автобус", route: "104", from: "м. Буча", to: "с. Здвижівка", stops: "ЗС Буча, Ворзель, Поворот на Мироцьке, Бабинці амбулаторія, Здвижівка старостат, Здвижівка дачі", hours: "06:20 - 18:30", interval: "30 хв", map: "https://www.buchanews.com.ua/wp-content/uploads/marshrut-buchatransservis-104-600x600.jpg" },
  { type: "автобус", route: "105", from: "м. Буча (ЖК Нова Буча)", to: "м. Київ, ТРЦ Лавіна", stops: "м. Буча, Бульвар Богдана Хмельницького, Вул. Героїв Майдану, Вул. Гоголя, м. Київ, ТРЦ Lavina Mall", hours: "06:20 - 18:30", interval: "30 хв", map: "https://scontent.fiev7-4.fna.fbcdn.net/v/t39.30808-6/549154051_638563902668964_8477560922840203435_n.jpg?stp=cp6_dst-jpg_s600x600_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gCE7itKSq_4Q7kNvwFqAZED&_nc_oc=AdmpPREpFIvxQTcgaugasuJmrtJSpP9bVB0v-02K34FAdXUvCiYz9Ey5RyYYP_ppZQ8&_nc_zt=23&_nc_ht=scontent.fiev7-4.fna&_nc_gid=mKQrWmw9yEKLKX-HjD2YLA&oh=00_AfYq7LbHwAPxr1JZO-9_EApONwyUyVRsnXFE7Vh_q9XOiA&oe=68DDE8B8" },
  { type: "електричка", route: "6670", from: "Немішаєве", to: "м. Київ, ст. м. Святошин", stops: "Немішаєве, Кічеєве, Ворзель, Склозаводська, Буча, Лісова Буча, Ірпінь, Біличі, Святошин", hours: "05:18 - 21:50", interval: "1 год", map: "https://www.eway.in.ua/ua/cities/kyiv/routes/1591000211" },
  { type: "електричка", route: "6602", from: "Тетерів", to: "м. Київ, ст. м. Святошин", stops: "Тетерів, Піски, Спартак, Загальці, Хутір Гай, Бородянка, Макійчукове, Клавдієве, Немішаєве, Кічеєве, Ворзель, Склозаводська, Буча, Лісова Буча, Ірпінь, Біличі, Новобіличі, Святошин", hours: "05:45 - 21:20", interval: "1 год", map: "https://www.eway.in.ua/ua/cities/kyiv/routes/1591000891" },
  { type: "електричка", route: "6604", from: "Малин", to: "Київ-Пасажирський", stops: "Малин, Пенизевичі, Макалевичі, Піски, Загальці, Бородянка, Клавдієве, Кічеєве, Склозаводська, Лісова Буча, Біличі, Святошин, Київ-Пасажирський", hours: "06:00 - 20:20", interval: "1 год", map: "https://www.eway.in.ua/ua/cities/kyiv/routes/1591000885" },
  { type: "електричка", route: "6606", from: "Тетерів", to: "Борщагівка", stops: "Тетерів, Піски, Спартак, Загальці, Хутір Гай, Бородянка, Макийчукове, Клавдієве, Немішаєве, Кічеєве, Ворзель, Склозаводська, Буча, Лісова Буча, Ірпінь, Біличі, Новобіличі, Святошин, Борщагівка", hours: "05:30 - 21:00", interval: "1 год", map: "https://www.eway.in.ua/ua/cities/kyiv/routes/1591000886" },
  { type: "електричка", route: "6672", from: "Клавдієве", to: "м. Київ, ст. м. Святошин", stops: "Клавдієве, Немішаєве, Кічеєве, Ворзель, Стеклозавод, Буча, Лісова Буча, Ірпінь, Біличі, Новобіличі, Святошин", hours: "05:10 - 21:10", interval: "1 год", map: "https://www.easyway.com.ua/static/maps/t6672.png" },
  { type: "електричка", route: "6612", from: "Коростень", to: "Борщагівка", stops: "Коростень, Древлянка, Шатрище, Новаки, Малин, Тетерів, Пісківка, Спартак, Загальці, Хутір Гай, Бородянка, Макійчукове, Клавдієво, Немішаєве, Кічеєве, Ворзель, Склозаводська, Буча, Лісова Буча, Ірпінь, Біличі, Новобіличі, Святошин, Борщагівка", hours: "05:25 - 21:15", interval: "1 год", map: "https://www.eway.in.ua/ua/cities/kyiv/routes/1591000883" },
  { type: "електричка", route: "6614", from: "Тетерів", to: "Київ-Пасажирський", stops: "Тетерів, Піски, Спартак, Загальці, Хутір Гай, Бородянка, Макійчукове, Клавдієве, Немішаєве, Кичеєве, Ворзель, Склозаводська, Буча, Лісова Буча, Ірпінь, Біличі, Новобіличі, Святошин, Борщагівка", hours: "05:50 - 22:00", interval: "1 год", map: "https://www.easyway.com.ua/static/maps/t6614.png" },
  { type: "електричка", route: "6620", from: "Коростень", to: "м. Київ, ст. м. Святошин", stops: "Коростень, Древлянка, Шатрище, Малин, Щебзавод, Пенизевичі, Ірша, Макалевичі, Тетерів, Пісківка, Спартак, Загальці, Хутір Гай, Бородянка, Макійчукове, Клавдієво, Немішаєве, Кічеєве, Ворзель, Стеклозавод, Буча, Лісова Буча, Ірпінь, Біличі, Новобіличі, Святошин", hours: "05:35 - 21:45", interval: "1 год", map: "https://www.eway.in.ua/ua/cities/kyiv/routes/1591000878" }
];
const block = document.getElementById('routeBlock');
const searchInput = document.getElementById('searchInput');
const typeFilter = document.getElementById('typeFilter');

function renderRoutes() {
  const searchText = searchInput.value.toLowerCase();
  const type = typeFilter.value;

  block.innerHTML = '';

  const filtered = routes.filter(r => {
    const matchesSearch = r.route.toLowerCase().includes(searchText) || r.from.toLowerCase().includes(searchText) || r.to.toLowerCase().includes(searchText);
    const matchesType = type ? r.type === type : true;
    return matchesSearch && matchesType;
  });

  filtered.forEach(r => {
    const card = document.createElement('div');
    card.className = 'route-card_marsh';

    card.innerHTML = `
      <div class="route-card-inner_marsh">
        <div class="route-front_marsh ${r.type === 'маршрутка' ? 'marsh' : r.type === 'автобус' ? 'bus' : 'train'}">
          <div class="route-title_marsh">
             ${r.type === 'маршрутка' ? '🚌 Маршрутка № ' + r.route : 
               r.type === 'автобус' ? '🚎 Автобус № ' + r.route : 
             '🚅 Електричка № ' + r.route}
        </div>
          <div class="route-info_marsh">
            <p>Від: ${r.from}</p>
            <p>До: ${r.to}</p>
          </div>
        </div>
        <div class="route-back_marsh">
          <div class="route-info_marsh">
            <p><strong>Зупинки 📍:</strong> ${r.stops}</p>
            <p><strong>Години роботи 🕑:</strong> ${r.hours}</p>
            <p><strong>Інтервал:</strong> ${r.interval}</p>
            <a href="${r.map}" target="_blank">Переглянути карту</a>
          </div>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      card.classList.toggle('active');
    });

    block.appendChild(card);
  });
}

renderRoutes();

searchInput.addEventListener('input', renderRoutes);
typeFilter.addEventListener('change', renderRoutes);

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