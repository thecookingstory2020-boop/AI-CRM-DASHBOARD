/* ============================================================
   settings.js — Settings & analytics page data & logic
   ============================================================ */

// --- Placeholder Data ---

const businessProfile = [
  { label: 'Business name', value: 'The Cooking Story' },
  { label: 'Address', value: 'Shop No: 4, Satelite, Ahmedabad, 380015' },
  { label: 'Cuisine type', value: 'North Indian, Mughlai, Fusion' },
  { label: 'Operating hours', value: '11:00 AM – 11:00 PM (Mon – Sun)' },
  { label: 'Phone', value: '+91 8780226352' },
  { label: 'GST number', value: '07AABCT1234A1ZT' },
];

const botToggles = [
  { id: 'auto-reply', title: 'Auto-reply outside business hours', desc: 'Send automated responses when the cafe is closed', active: true },
  { id: 'handoff', title: 'Hand off to human after 3 failed intents', desc: 'Escalate to a team member when the bot can\'t understand the query', active: true },
  { id: 'whatsapp-confirm', title: 'Send booking confirmations via WhatsApp', desc: 'Automatically send confirmation messages after a booking is made', active: true },
  { id: 'follow-up', title: 'Auto follow-up on pending leads', desc: 'Send a gentle reminder after 24 hours if no response', active: false },
  { id: 'feedback', title: 'Post-chat satisfaction survey', desc: 'Ask customers to rate their experience after each conversation', active: true },
];

const connectedChannels = [
  { platform: 'instagram', name: 'Instagram', account: '@the.cookingstory', bgClass: 'instagram-bg', iconClass: 'ti-brand-instagram' },
  { platform: 'whatsapp', name: 'WhatsApp Business', account: '+91 8780226352', bgClass: 'whatsapp-bg', iconClass: 'ti-brand-whatsapp' },
  { platform: 'email', name: 'Email', account: 'thecookingstory2020@gmail.com', bgClass: 'email-bg', iconClass: 'ti-mail' },
];

const teamMembers = [
  { initials: 'RP', name: 'Rajesh Patel', email: 'rajesh@thecookingstory.in', role: 'Owner', roleClass: 'owner' },
  { initials: 'PK', name: 'Priya Kumar', email: 'priya@thecookingstory.in', role: 'Manager', roleClass: '' },
  { initials: 'AS', name: 'Amit Sharma', email: 'amit@thecookingstory.in', role: 'Staff', roleClass: '' },
];

// --- Render functions ---

function renderBusinessProfile() {
  const card = document.getElementById('business-profile-card');
  card.innerHTML = `
    <div class="settings-card-title">
      <i class="ti ti-building-store icon"></i>
      Business profile
      <button class="btn btn-outline" style="margin-left:auto;font-size:11px;padding:4px 12px;">
        <i class="ti ti-pencil" style="font-size:13px;"></i> Edit
      </button>
    </div>
    ${businessProfile.map(f => `
      <div class="profile-field">
        <span class="profile-field-label">${f.label}</span>
        <span class="profile-field-value">${f.value}</span>
      </div>
    `).join('')}
  `;
}

function renderBotConfig() {
  const card = document.getElementById('bot-config-card');
  card.innerHTML = `
    <div class="settings-card-title">
      <i class="ti ti-robot icon"></i>
      Bot configuration
    </div>
    ${botToggles.map(t => `
      <div class="toggle-row">
        <div class="toggle-label">
          <div class="toggle-label-title">${t.title}</div>
          <div class="toggle-label-desc">${t.desc}</div>
        </div>
        <div class="toggle-switch ${t.active ? 'active' : ''}" data-toggle-id="${t.id}"></div>
      </div>
    `).join('')}
  `;

  // Wire up toggle clicks
  card.querySelectorAll('.toggle-switch').forEach(toggle => {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
    });
  });
}

function renderChannels() {
  const card = document.getElementById('channels-card');
  card.innerHTML = `
    <div class="settings-card-title">
      <i class="ti ti-plug-connected icon"></i>
      Connected channels
    </div>
    ${connectedChannels.map(ch => `
      <div class="channel-row">
        <div class="channel-row-icon ${ch.bgClass}">
          <i class="ti ${ch.iconClass} icon"></i>
        </div>
        <div class="channel-row-info">
          <div class="channel-row-name">${ch.name}</div>
          <div class="channel-row-account">${ch.account}</div>
        </div>
        <span class="badge badge-booked channel-row-badge">Connected</span>
        <span class="channel-row-disconnect">Disconnect</span>
      </div>
    `).join('')}
  `;
}

function renderTeam() {
  const card = document.getElementById('team-card');
  card.innerHTML = `
    <div class="settings-card-title">
      <i class="ti ti-users icon"></i>
      Team & permissions
    </div>
    ${teamMembers.map(m => `
      <div class="team-row">
        <div class="team-avatar">${m.initials}</div>
        <div class="team-info">
          <div class="team-name">${m.name}</div>
          <div class="team-email">${m.email}</div>
        </div>
        <span class="team-role ${m.roleClass}">${m.role}</span>
      </div>
    `).join('')}
  `;
}

function initAccuracyChart() {
  const ctx = document.getElementById('accuracyChart').getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, 220);
  gradient.addColorStop(0, 'rgba(59, 109, 17, 0.12)');
  gradient.addColorStop(1, 'rgba(59, 109, 17, 0.01)');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Accuracy (%)',
        data: [88, 90, 91.5, 93, 94.5, 96],
        borderColor: '#3B6D11',
        backgroundColor: gradient,
        borderWidth: 2.5,
        pointBackgroundColor: '#3B6D11',
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
            label: ctx => ` ${ctx.parsed.y}%`,
          },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { family: "'Inter', sans-serif", size: 11 } },
        },
        y: {
          min: 85,
          max: 100,
          grid: { color: 'rgba(0,0,0,0.04)' },
          ticks: {
            callback: value => `${value}%`,
            font: { family: "'Inter', sans-serif", size: 11 },
          },
        },
      },
    },
  });
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  renderBusinessProfile();
  renderBotConfig();
  renderChannels();
  renderTeam();
  initAccuracyChart();
});
