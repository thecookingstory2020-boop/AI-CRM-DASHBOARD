/* ============================================================
   dashboard.js — Dashboard overview page data & rendering
   ============================================================ */

// --- Placeholder Data ---

const statCards = [
  {
    label: 'Lifetime DMs answered',
    icon: 'ti-message-circle',
    value: '48,236',
    sub: '+1,284 this month',
    subClass: 'positive',
  },
  {
    label: 'Orders converted by bot',
    icon: 'ti-shopping-cart',
    value: '3,914',
    sub: '62% of total bookings',
    subClass: '',
  },
  {
    label: 'Revenue influenced',
    icon: 'ti-currency-rupee',
    value: '₹1.87 Cr',
    sub: 'Lifetime, all platforms',
    subClass: '',
  },
  {
    label: 'Avg first response time',
    icon: 'ti-clock',
    value: '38 sec',
    sub: 'vs 6.4 hrs human avg',
    subClass: 'positive',
  },
];

const dmData = {
  instagram: {
    platform: 'instagram',
    label: 'Instagram',
    rows: [
      { name: 'Riya Malhotra', status: 'booked', message: 'Need catering for 80 ppl, sangeet on the 14th', time: '9 min ago' },
      { name: 'Arjun Bhatia', status: 'pending', message: 'Do you have a vegan thali option?', time: '22 min ago' },
      { name: 'Sneha Kapoor', status: 'booked', message: 'Loved the reel! Table for 6 this Sat eve?', time: '1 hr ago' },
      { name: 'Karan Oberoi', status: 'lost', message: 'Budget per plate too high for us, thanks tho', time: '2 hr ago' },
      { name: 'Pooja Reddy', status: 'pending', message: 'Can you send the full menu PDF?', time: '3 hr ago' },
    ],
  },
  whatsapp: {
    platform: 'whatsapp',
    label: 'WhatsApp',
    rows: [
      { name: 'Vikram Seth', status: 'booked', message: 'Corporate lunch, 40 boxes, Monday 1pm', time: '4 min ago' },
      { name: 'Ananya Iyer', status: 'pending', message: 'Is the cafe open on Diwali this year?', time: '31 min ago' },
      { name: 'Rohan Desai', status: 'booked', message: 'Confirming the birthday order, 2pm pickup', time: '48 min ago' },
      { name: 'Meera Nair', status: 'lost', message: 'Went with another vendor, sorry', time: '1 hr ago' },
      { name: 'Siddharth Rao', status: 'booked', message: 'Anniversary dinner, window table for 2', time: '2 hr ago' },
    ],
  },
  email: {
    platform: 'email',
    label: 'Email',
    rows: [
      { name: 'Nikhil Chawla', status: 'pending', message: 'Requesting quote for 200-pax wedding', time: '17 min ago' },
      { name: 'Divya Saxena', status: 'booked', message: 'Confirmed, please send the invoice', time: '52 min ago' },
      { name: 'Aditya Joshi', status: 'pending', message: 'Can you cater outside the city limits?', time: '1.5 hr ago' },
      { name: 'Tanvi Mehta', status: 'booked', message: 'Office party for 25, Friday evening', time: '3 hr ago' },
      { name: 'Harsh Vora', status: 'lost', message: 'No reply, looks like cold lead', time: '5 hr ago' },
    ],
  },
};

const upcomingBookings = [
  { date: '21 Jun', description: 'Malhotra sangeet, 80 pax', amount: '₹1.4L' },
  { date: '22 Jun', description: 'Seth corporate lunch', amount: '₹32K' },
  { date: '24 Jun', description: 'Mehta office party', amount: '₹48K' },
  { date: '27 Jun', description: 'Desai birthday order', amount: '₹9K' },
];

// --- Render functions ---

function renderStatStrip() {
  const container = document.getElementById('stat-strip');
  container.innerHTML = statCards.map(card => `
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

function renderPlatformPanels() {
  const container = document.getElementById('platform-grid');
  const platforms = ['instagram', 'whatsapp', 'email'];

  container.innerHTML = platforms.map(key => {
    const data = dmData[key];
    return `
      <div class="platform-panel">
        <div class="platform-panel-header">
          <div class="platform-panel-title">
            ${getPlatformIcon(data.platform)}
            ${data.label}
          </div>
          <span class="platform-panel-count">5 recent</span>
        </div>
        <ul class="platform-panel-list">
          ${data.rows.map(row => `
            <li class="dm-row">
              <div class="dm-row-content">
                <div class="dm-row-top">
                  <span class="dm-row-name">${row.name}</span>
                  ${getStatusBadge(row.status)}
                </div>
                <div class="dm-row-message">${row.message}</div>
              </div>
              <span class="dm-row-time">${row.time}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }).join('');
}

function renderBottomRow() {
  const container = document.getElementById('bottom-row');
  container.innerHTML = `
    <!-- Upcoming bookings -->
    <div class="info-card">
      <div class="info-card-title">
        <i class="ti ti-calendar-event icon"></i>
        Upcoming bookings
      </div>
      <table class="mini-table">
        <thead>
          <tr><th>Date</th><th>Description</th><th style="text-align:right">Amount</th></tr>
        </thead>
        <tbody>
          ${upcomingBookings.map(b => `
            <tr>
              <td>${b.date}</td>
              <td>${b.description}</td>
              <td class="amount">${b.amount}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <!-- Top performing channel -->
    <div class="info-card">
      <div class="info-card-title">
        <i class="ti ti-trending-up icon"></i>
        Top performing channel
      </div>
      <div class="top-channel-icon">
        <i class="ti ti-brand-whatsapp platform-icon whatsapp" style="width:28px;height:28px;color:var(--color-whatsapp);"></i>
        <span class="top-channel-name">WhatsApp</span>
      </div>
      <div class="top-channel-stat">41% of all bookings this month</div>
      <div class="channel-breakdown">
        <div class="channel-breakdown-item">
          <span class="channel-breakdown-dot" style="background:var(--color-instagram);"></span>
          Instagram — 33%
        </div>
        <div class="channel-breakdown-item">
          <span class="channel-breakdown-dot" style="background:var(--color-email);"></span>
          Email — 26%
        </div>
      </div>
    </div>

    <!-- Customer satisfaction -->
    <div class="info-card">
      <div class="info-card-title">
        <i class="ti ti-star icon"></i>
        Customer satisfaction
      </div>
      <div class="sat-score">4.8 / 5</div>
      <div class="sat-sub">From 2,140 post-chat surveys</div>
      <div class="sat-bar">
        <div class="sat-bar-fill" style="width: 96%;"></div>
      </div>
    </div>
  `;
}

// --- Charts ---

function initBarChart() {
  const ctx = document.getElementById('barChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Instagram',
          data: [38, 42, 35, 50, 61, 74, 58],
          backgroundColor: '#E1306C',
          borderRadius: 4,
          barPercentage: 0.7,
          categoryPercentage: 0.65,
        },
        {
          label: 'WhatsApp',
          data: [55, 60, 58, 70, 82, 95, 80],
          backgroundColor: '#25D366',
          borderRadius: 4,
          barPercentage: 0.7,
          categoryPercentage: 0.65,
        },
        {
          label: 'Email',
          data: [20, 18, 22, 25, 28, 30, 24],
          backgroundColor: '#5B7FFF',
          borderRadius: 4,
          barPercentage: 0.7,
          categoryPercentage: 0.65,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
            pointStyle: 'rectRounded',
            padding: 20,
            font: { family: "'Inter', sans-serif", size: 11, weight: '600' },
          },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { family: "'Inter', sans-serif", size: 11 } },
        },
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(0,0,0,0.04)' },
          ticks: { font: { family: "'Inter', sans-serif", size: 11 } },
        },
      },
    },
  });
}

function initDonutChart() {
  // Render legend
  const legend = document.getElementById('donut-legend');
  legend.innerHTML = `
    <div class="donut-legend-item">
      <span class="donut-legend-swatch" style="background:#3B6D11;"></span>
      Booked 62%
    </div>
    <div class="donut-legend-item">
      <span class="donut-legend-swatch" style="background:#BA7517;"></span>
      Pending 24%
    </div>
    <div class="donut-legend-item">
      <span class="donut-legend-swatch" style="background:#A32D2D;"></span>
      Lost 14%
    </div>
  `;

  const ctx = document.getElementById('donutChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Booked', 'Pending', 'Lost'],
      datasets: [{
        data: [62, 24, 14],
        backgroundColor: ['#3B6D11', '#BA7517', '#A32D2D'],
        borderWidth: 0,
        hoverOffset: 6,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '68%',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ` ${ctx.label}: ${ctx.parsed}%`,
          },
        },
      },
    },
  });
}

function initLineChart() {
  const ctx = document.getElementById('lineChart').getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, 220);
  gradient.addColorStop(0, 'rgba(216, 90, 48, 0.15)');
  gradient.addColorStop(1, 'rgba(216, 90, 48, 0.01)');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Revenue (₹ lakh)',
        data: [9.5, 11.2, 13.8, 15.4, 18.1, 21.0],
        borderColor: '#D85A30',
        backgroundColor: gradient,
        borderWidth: 2.5,
        pointBackgroundColor: '#D85A30',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.35,
        fill: true,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ` ₹${ctx.parsed.y}L`,
          },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { family: "'Inter', sans-serif", size: 11 } },
        },
        y: {
          beginAtZero: false,
          grid: { color: 'rgba(0,0,0,0.04)' },
          ticks: {
            callback: value => `₹${value}L`,
            font: { family: "'Inter', sans-serif", size: 11 },
          },
        },
      },
    },
  });
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  renderStatStrip();
  renderPlatformPanels();
  renderBottomRow();
  initBarChart();
  initDonutChart();
  initLineChart();
});
