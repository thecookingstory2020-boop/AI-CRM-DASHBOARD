/* ============================================================
   badges.js — Shared badge & tag helpers
   Used across all pages for consistent status/type rendering.
   ============================================================ */

/**
 * Returns an HTML string for a status badge.
 * @param {'booked'|'pending'|'lost'} status
 * @returns {string} HTML span element
 */
function getStatusBadge(status) {
  const map = {
    booked: { label: 'Booked', cls: 'badge-booked' },
    pending: { label: 'Pending', cls: 'badge-pending' },
    lost: { label: 'Lost', cls: 'badge-lost' },
  };
  const s = map[status.toLowerCase()] || map.pending;
  return `<span class="badge ${s.cls}">${s.label}</span>`;
}

/**
 * Returns an HTML string for a booking type tag.
 * @param {'catering'|'reservation'} type
 * @returns {string} HTML span element
 */
function getTypeTag(type) {
  const map = {
    catering: { label: 'Catering order', cls: 'type-tag-catering' },
    reservation: { label: 'Cafe reservation', cls: 'type-tag-reservation' },
  };
  const t = map[type.toLowerCase()] || map.catering;
  return `<span class="type-tag ${t.cls}">${t.label}</span>`;
}

/**
 * Returns a platform icon SVG (Tabler Icons reference).
 * @param {'instagram'|'whatsapp'|'email'} platform
 * @param {string} [extraClass='']
 * @returns {string} HTML i element with Tabler icon class
 */
function getPlatformIcon(platform, extraClass = '') {
  const map = {
    instagram: { icon: 'ti-brand-instagram', cls: 'instagram' },
    whatsapp: { icon: 'ti-brand-whatsapp', cls: 'whatsapp' },
    email: { icon: 'ti-mail', cls: 'email' },
  };
  const p = map[platform.toLowerCase()] || map.email;
  return `<i class="ti ${p.icon} platform-icon ${p.cls} ${extraClass}"></i>`;
}

/**
 * Returns a small platform icon for tables.
 * @param {'instagram'|'whatsapp'|'email'} platform
 * @returns {string}
 */
function getPlatformIconSmall(platform) {
  return getPlatformIcon(platform, 'platform-icon-sm');
}
