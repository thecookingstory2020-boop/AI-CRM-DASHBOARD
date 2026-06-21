/* ============================================================
   bookings.js — Bookings & orders page data & logic
   ============================================================ */

// --- Placeholder Data ---

const bookingStats = [
  { label: 'Bookings this month', icon: 'ti-calendar-check', value: '142', sub: '+18% vs last month', subClass: 'positive' },
  { label: 'Total value this month', icon: 'ti-currency-rupee', value: '₹6.2L', sub: 'Revenue from confirmed bookings', subClass: '' },
  { label: 'Avg order value', icon: 'ti-receipt', value: '₹4,370', sub: 'Across all booking types', subClass: '' },
  { label: 'Catering vs Cafe split', icon: 'ti-chart-pie', value: '58% / 42%', sub: 'Catering orders / Cafe reservations', subClass: '' },
];

const bookingsData = [
  { date: '2026-06-21', customer: 'Riya Malhotra', type: 'catering', platform: 'instagram', status: 'booked', amount: 144000, amountLabel: '₹1,44,000', description: 'Sangeet catering, 80 pax' },
  { date: '2026-06-22', customer: 'Vikram Seth', type: 'catering', platform: 'whatsapp', status: 'booked', amount: 11960, amountLabel: '₹11,960', description: 'Corporate lunch, 40 boxes' },
  { date: '2026-06-22', customer: 'Sneha Kapoor', type: 'reservation', platform: 'instagram', status: 'booked', amount: 0, amountLabel: '—', description: 'Table for 6, Saturday 7 PM' },
  { date: '2026-06-23', customer: 'Rohan Desai', type: 'catering', platform: 'whatsapp', status: 'booked', amount: 9000, amountLabel: '₹9,000', description: 'Birthday order, 15 pax' },
  { date: '2026-06-24', customer: 'Tanvi Mehta', type: 'catering', platform: 'email', status: 'booked', amount: 48750, amountLabel: '₹48,750', description: 'Office party, 25 pax' },
  { date: '2026-06-24', customer: 'Siddharth Rao', type: 'reservation', platform: 'whatsapp', status: 'booked', amount: 0, amountLabel: '—', description: 'Anniversary dinner, table for 2' },
  { date: '2026-06-25', customer: 'Divya Saxena', type: 'catering', platform: 'email', status: 'booked', amount: 18500, amountLabel: '₹18,500', description: 'Team lunch, 12 pax' },
  { date: '2026-06-26', customer: 'Nikhil Chawla', type: 'catering', platform: 'email', status: 'pending', amount: 350000, amountLabel: '₹3,50,000', description: 'Wedding reception, 200 pax' },
  { date: '2026-06-27', customer: 'Ananya Iyer', type: 'reservation', platform: 'whatsapp', status: 'pending', amount: 0, amountLabel: '—', description: 'Diwali family dinner, table for 8' },
  { date: '2026-06-28', customer: 'Aditya Joshi', type: 'catering', platform: 'email', status: 'pending', amount: 75000, amountLabel: '₹75,000', description: 'Farmhouse event, 50 pax' },
  { date: '2026-06-29', customer: 'Arjun Bhatia', type: 'reservation', platform: 'instagram', status: 'pending', amount: 349, amountLabel: '₹349', description: 'Vegan thali delivery' },
  { date: '2026-06-30', customer: 'Pooja Reddy', type: 'catering', platform: 'instagram', status: 'pending', amount: 0, amountLabel: 'TBD', description: 'House party — awaiting headcount' },
];

const calendarDays = [
  { name: 'Sat', number: 21, count: 1, today: true },
  { name: 'Sun', number: 22, count: 2, today: false },
  { name: 'Mon', number: 23, count: 1, today: false },
  { name: 'Tue', number: 24, count: 2, today: false },
  { name: 'Wed', number: 25, count: 1, today: false },
  { name: 'Thu', number: 26, count: 1, today: false },
  { name: 'Fri', number: 27, count: 1, today: false },
];

// --- Sorting state ---
let sortColumn = 'date';
let sortAsc = true;

const columns = [
  { key: 'date', label: 'Date' },
  { key: 'customer', label: 'Customer' },
  { key: 'type', label: 'Type' },
  { key: 'platform', label: 'Platform' },
  { key: 'status', label: 'Status' },
  { key: 'description', label: 'Description' },
  { key: 'amount', label: 'Amount' },
];

// --- Render functions ---

function renderBookingStats() {
  const container = document.getElementById('booking-stats');
  container.innerHTML = bookingStats.map(card => `
    <div class="stat-card">
      <div class="stat-card-label">
        <i class="ti ${card.icon} icon"></i>
        ${card.label}
      </div>
      <div class="stat-card-value">${card.value}</div>
      <div class="stat-card-sub ${card.subClass}">${card.sub}</div>
    </div>
  `).join('');
}

function getSortedBookings() {
  const sorted = [...bookingsData];
  sorted.sort((a, b) => {
    let valA = a[sortColumn];
    let valB = b[sortColumn];

    if (typeof valA === 'string') {
      valA = valA.toLowerCase();
      valB = valB.toLowerCase();
    }

    if (valA < valB) return sortAsc ? -1 : 1;
    if (valA > valB) return sortAsc ? 1 : -1;
    return 0;
  });
  return sorted;
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
}

function renderBookingsTable() {
  // Render header
  const thead = document.getElementById('bookings-thead');
  thead.innerHTML = `<tr>${columns.map(col => {
    const isSorted = sortColumn === col.key;
    const arrow = isSorted ? (sortAsc ? '↑' : '↓') : '↕';
    return `<th class="${isSorted ? 'sorted' : ''}" data-sort="${col.key}">
      ${col.label} <span class="sort-icon">${arrow}</span>
    </th>`;
  }).join('')}</tr>`;

  // Attach sort handlers
  thead.querySelectorAll('th').forEach(th => {
    th.addEventListener('click', () => {
      const col = th.getAttribute('data-sort');
      if (sortColumn === col) {
        sortAsc = !sortAsc;
      } else {
        sortColumn = col;
        sortAsc = true;
      }
      renderBookingsTable();
    });
  });

  // Render body
  const tbody = document.getElementById('bookings-tbody');
  const sorted = getSortedBookings();

  tbody.innerHTML = sorted.map(row => `
    <tr>
      <td>${formatDate(row.date)}</td>
      <td class="customer-name">${row.customer}</td>
      <td>${getTypeTag(row.type)}</td>
      <td>${getPlatformIconSmall(row.platform)}</td>
      <td>${getStatusBadge(row.status)}</td>
      <td>${row.description}</td>
      <td class="amount">${row.amountLabel}</td>
    </tr>
  `).join('');
}

function renderCalendarStrip() {
  const container = document.getElementById('calendar-strip');
  container.innerHTML = calendarDays.map(day => {
    const dots = Array(day.count).fill('<span class="calendar-day-dot"></span>').join('');
    return `
      <div class="calendar-day ${day.today ? 'today' : ''}">
        <div class="calendar-day-name">${day.name}</div>
        <div class="calendar-day-number">${day.number}</div>
        <div class="calendar-day-count">${day.count} booking${day.count !== 1 ? 's' : ''}</div>
        <div class="calendar-day-dots">${dots}</div>
      </div>
    `;
  }).join('');
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  renderBookingStats();
  renderBookingsTable();
  renderCalendarStrip();
});
