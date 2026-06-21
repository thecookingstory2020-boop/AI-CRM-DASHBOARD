/* ============================================================
   conversations.js — Conversations inbox page data & logic
   ============================================================ */

// --- Placeholder Data ---

const conversations = [
  {
    id: 1, name: "Riya Malhotra", platform: "instagram", status: "booked",
    preview: "Need catering for 80 ppl, sangeet on the 14th", time: "9 min ago",
    thread: [
      { sender: "customer", text: "Hi! I saw your sangeet catering package on the reel. We need food for about 80 people on June 14th. Is that possible?", time: "10:22 AM" },
      { sender: "bot", text: "Hi Riya! Yes, we would love to cater your sangeet! For 80 guests, we have several menu options. Do you have a preference - North Indian, fusion, or a mix?", time: "10:22 AM" },
      { sender: "customer", text: "A mix would be great! Something with chaat stalls, a main course, and desserts. What is the per-plate budget range?", time: "10:24 AM" },
      { sender: "bot", text: "Perfect choice! Our sangeet combo packages range from Rs 1,200 to Rs 1,800 per plate. This includes live chaat counters, a 6-item main course, and dessert station. Which range works for you?", time: "10:24 AM" },
      { sender: "customer", text: "Let us go with the Rs 1,800 option - it is a big celebration! Can you send me the full menu for that?", time: "10:26 AM" },
      { sender: "bot", text: "Wonderful! I have noted your booking: 80 pax, Rs 1,800/plate, June 14th. I am sending the detailed menu PDF to your DMs now. Our events manager Priya will also reach out to finalize the details.", time: "10:26 AM" },
    ],
  },
  {
    id: 2, name: "Arjun Bhatia", platform: "instagram", status: "pending",
    preview: "Do you have a vegan thali option?", time: "22 min ago",
    thread: [
      { sender: "customer", text: "Hey, do you have a vegan thali option? No dairy, no ghee.", time: "10:10 AM" },
      { sender: "bot", text: "Hi Arjun! Yes, we offer a fully vegan thali with coconut-based curries, dal, rice, rotis made without ghee, and seasonal sabzi. Would you like to try it at the cafe or order for delivery?", time: "10:10 AM" },
      { sender: "customer", text: "Delivery would be great. How much is it?", time: "10:12 AM" },
      { sender: "bot", text: "Our vegan thali is Rs 349 for delivery. We deliver within a 10km radius. Shall I help you place an order?", time: "10:12 AM" },
    ],
  },
  {
    id: 3, name: "Sneha Kapoor", platform: "instagram", status: "booked",
    preview: "Loved the reel! Table for 6 this Sat eve?", time: "1 hr ago",
    thread: [
      { sender: "customer", text: "Your latest reel with the paneer tikka looked amazing! Can I book a table for 6 this Saturday evening?", time: "9:45 AM" },
      { sender: "bot", text: "Thank you Sneha! Saturday evening is popular - I have slots at 7:00 PM and 8:30 PM. Which works better for your group?", time: "9:45 AM" },
      { sender: "customer", text: "7 PM please!", time: "9:47 AM" },
      { sender: "bot", text: "Done! Table for 6, Saturday 7:00 PM, confirmed. You will get a WhatsApp reminder 2 hours before. See you there!", time: "9:47 AM" },
    ],
  },
  {
    id: 4, name: "Karan Oberoi", platform: "instagram", status: "lost",
    preview: "Budget per plate too high for us, thanks tho", time: "2 hr ago",
    thread: [
      { sender: "customer", text: "Hi, what is your catering rate for 150 people?", time: "8:30 AM" },
      { sender: "bot", text: "Hi Karan! For 150 guests, our packages start at Rs 1,200/plate going up to Rs 2,200/plate depending on the menu. What is your budget range?", time: "8:30 AM" },
      { sender: "customer", text: "We were looking at around Rs 600-700 per plate. That is too high for us. Thanks though.", time: "8:35 AM" },
      { sender: "bot", text: "I understand, Karan. If your plans change or if you would like to explore our basic menu options, feel free to reach out anytime!", time: "8:35 AM" },
    ],
  },
  {
    id: 5, name: "Pooja Reddy", platform: "instagram", status: "pending",
    preview: "Can you send the full menu PDF?", time: "3 hr ago",
    thread: [
      { sender: "customer", text: "Can you send the full menu PDF? Planning a house party.", time: "7:50 AM" },
      { sender: "bot", text: "Sure Pooja! Here is our complete menu for house parties and small events. How many guests are you expecting? I can suggest the best package.", time: "7:50 AM" },
    ],
  },
  {
    id: 6, name: "Vikram Seth", platform: "whatsapp", status: "booked",
    preview: "Corporate lunch, 40 boxes, Monday 1pm", time: "4 min ago",
    thread: [
      { sender: "customer", text: "Hi, need 40 lunch boxes for our office on Monday by 1 PM. Non-veg combo preferred.", time: "10:28 AM" },
      { sender: "bot", text: "Hi Vikram! We can absolutely do that. Our non-veg corporate combo is Rs 299/box and includes chicken curry, dal, rice, roti, salad, and a sweet. Shall I confirm 40 boxes for Monday 1 PM?", time: "10:28 AM" },
      { sender: "customer", text: "Yes, confirmed. Please deliver to Cyber Hub, Tower B, 5th floor.", time: "10:30 AM" },
      { sender: "bot", text: "Booked! 40 non-veg combos, Monday 1 PM, Cyber Hub Tower B. Total: Rs 11,960. Invoice coming your way shortly.", time: "10:30 AM" },
    ],
  },
  {
    id: 7, name: "Ananya Iyer", platform: "whatsapp", status: "pending",
    preview: "Is the cafe open on Diwali this year?", time: "31 min ago",
    thread: [
      { sender: "customer", text: "Are you guys open on Diwali this year? Want to bring the family.", time: "10:01 AM" },
      { sender: "bot", text: "Hi Ananya! Yes, we will be open on Diwali with a special festive menu. Would you like me to reserve a table for your family?", time: "10:01 AM" },
    ],
  },
  {
    id: 8, name: "Rohan Desai", platform: "whatsapp", status: "booked",
    preview: "Confirming the birthday order, 2pm pickup", time: "48 min ago",
    thread: [
      { sender: "customer", text: "Just confirming - birthday party order for 15 people, pickup at 2 PM tomorrow.", time: "9:44 AM" },
      { sender: "bot", text: "Confirmed, Rohan! Your order for 15 pax is ready for pickup at 2 PM tomorrow. Everything including the cake and starters. See you then!", time: "9:44 AM" },
    ],
  },
  {
    id: 9, name: "Meera Nair", platform: "whatsapp", status: "lost",
    preview: "Went with another vendor, sorry", time: "1 hr ago",
    thread: [
      { sender: "customer", text: "Hi, sorry but we went with another caterer for the wedding. Thanks for the quote though.", time: "9:15 AM" },
      { sender: "bot", text: "No worries at all, Meera! Wishing you a wonderful wedding celebration. We are always here if you need us in the future.", time: "9:15 AM" },
    ],
  },
  {
    id: 10, name: "Siddharth Rao", platform: "whatsapp", status: "booked",
    preview: "Anniversary dinner, window table for 2", time: "2 hr ago",
    thread: [
      { sender: "customer", text: "Can I book a window table for 2 on Saturday? It is our anniversary.", time: "8:40 AM" },
      { sender: "bot", text: "How lovely, Siddharth! Congratulations! I have reserved window table #4 for 2, this Saturday at 8 PM. Would you like our special anniversary dessert platter?", time: "8:40 AM" },
      { sender: "customer", text: "Yes please! That sounds perfect.", time: "8:42 AM" },
      { sender: "bot", text: "All set! Window table for 2, Saturday 8 PM, with the anniversary dessert platter. We will make it special. Happy anniversary!", time: "8:42 AM" },
    ],
  },
  {
    id: 11, name: "Nikhil Chawla", platform: "email", status: "pending",
    preview: "Requesting quote for 200-pax wedding", time: "17 min ago",
    thread: [
      { sender: "customer", text: "Dear Team, we are planning a wedding reception for approximately 200 guests in July. Could you please share your catering packages and pricing? We need both vegetarian and non-vegetarian options.", time: "10:15 AM" },
      { sender: "bot", text: "Dear Nikhil, thank you for considering The Cooking Story for your wedding reception! For 200 guests, our wedding packages range from Rs 1,500 to Rs 2,500 per plate. I am attaching our detailed wedding menu brochure. Would you like to schedule a tasting session?", time: "10:15 AM" },
    ],
  },
  {
    id: 12, name: "Divya Saxena", platform: "email", status: "booked",
    preview: "Confirmed, please send the invoice", time: "52 min ago",
    thread: [
      { sender: "customer", text: "Hi, we have reviewed the menu and we would like to confirm the order for our office team lunch on Friday. Please send the invoice.", time: "9:40 AM" },
      { sender: "bot", text: "Great news, Divya! Your team lunch for Friday is confirmed. I have generated the invoice and sent it to your email. Payment can be made via UPI or bank transfer. Thank you!", time: "9:40 AM" },
    ],
  },
  {
    id: 13, name: "Aditya Joshi", platform: "email", status: "pending",
    preview: "Can you cater outside the city limits?", time: "1.5 hr ago",
    thread: [
      { sender: "customer", text: "Hello, we have a farmhouse event about 45km from the city. Do you cater outside city limits? What would be the additional charges?", time: "9:00 AM" },
      { sender: "bot", text: "Hi Aditya! Yes, we do cater outside city limits. For locations beyond 25km, there is a nominal logistics fee of Rs 5,000 to Rs 8,000 depending on the distance and order size. Could you share more details about the event?", time: "9:00 AM" },
    ],
  },
  {
    id: 14, name: "Tanvi Mehta", platform: "email", status: "booked",
    preview: "Office party for 25, Friday evening", time: "3 hr ago",
    thread: [
      { sender: "customer", text: "We need catering for a small office party - 25 people, Friday evening around 6 PM. Mix of starters and mains.", time: "7:30 AM" },
      { sender: "bot", text: "Hi Tanvi! For 25 people with starters and mains, I would recommend our Corporate Cocktail package at Rs 1,950/head. Includes 4 starters, 2 mains, bread basket, and dessert. Does that work?", time: "7:30 AM" },
      { sender: "customer", text: "Sounds perfect, let us go with that.", time: "7:35 AM" },
      { sender: "bot", text: "Booked! 25 pax, Friday 6 PM, Corporate Cocktail package. Total: Rs 48,750. We will set up by 5:30 PM.", time: "7:35 AM" },
    ],
  },
  {
    id: 15, name: "Harsh Vora", platform: "email", status: "lost",
    preview: "No reply, looks like cold lead", time: "5 hr ago",
    thread: [
      { sender: "bot", text: "Hi Harsh! Following up on your inquiry about catering for your daughter's birthday party. Were you still interested in our kids' party package? Happy to help with any questions!", time: "5:30 AM" },
    ],
  },
];

// --- State ---
let activeFilters = { platform: "all", status: "all" };
let selectedConvoId = 1;

// --- Filter bar ---
function renderFilterBar() {
  const container = document.getElementById("filter-bar");
  container.innerHTML = `
    <div class="filter-group">
      <span class="filter-group-label">Platform</span>
      <button class="filter-pill active" data-filter="platform" data-value="all">All</button>
      <button class="filter-pill" data-filter="platform" data-value="instagram">
        <i class="ti ti-brand-instagram icon"></i> Instagram
      </button>
      <button class="filter-pill" data-filter="platform" data-value="whatsapp">
        <i class="ti ti-brand-whatsapp icon"></i> WhatsApp
      </button>
      <button class="filter-pill" data-filter="platform" data-value="email">
        <i class="ti ti-mail icon"></i> Email
      </button>
    </div>
    <div class="filter-group">
      <span class="filter-group-label">Status</span>
      <button class="filter-pill active" data-filter="status" data-value="all">All</button>
      <button class="filter-pill" data-filter="status" data-value="booked">Booked</button>
      <button class="filter-pill" data-filter="status" data-value="pending">Pending</button>
      <button class="filter-pill" data-filter="status" data-value="lost">Lost</button>
    </div>
  `;

  // Attach click handlers
  container.querySelectorAll(".filter-pill").forEach(function(pill) {
    pill.addEventListener("click", function() {
      var filterType = pill.getAttribute("data-filter");
      var value = pill.getAttribute("data-value");
      activeFilters[filterType] = value;

      // Update active state within the group
      container.querySelectorAll('.filter-pill[data-filter="' + filterType + '"]').forEach(function(p) {
        p.classList.remove("active");
      });
      pill.classList.add("active");

      renderConvoList();
    });
  });
}

// --- Conversation list ---
function getFilteredConversations() {
  return conversations.filter(function(c) {
    if (activeFilters.platform !== "all" && c.platform !== activeFilters.platform) return false;
    if (activeFilters.status !== "all" && c.status !== activeFilters.status) return false;
    return true;
  });
}

function renderConvoList() {
  var container = document.getElementById("convo-list-panel");
  var filtered = getFilteredConversations();

  if (filtered.length === 0) {
    container.innerHTML = '<div style="padding:40px;text-align:center;color:var(--color-text-tertiary);">No conversations match the selected filters.</div>';
    return;
  }

  container.innerHTML = filtered.map(function(c) {
    return '<div class="convo-list-item ' + (c.id === selectedConvoId ? "selected" : "") + '" data-id="' + c.id + '">' +
      getPlatformIconSmall(c.platform) +
      '<div class="convo-list-content">' +
        '<div class="convo-list-top">' +
          '<span class="convo-list-name">' + c.name + '</span>' +
          getStatusBadge(c.status) +
        '</div>' +
        '<div class="convo-list-preview">' + c.preview + '</div>' +
      '</div>' +
      '<span class="convo-list-time">' + c.time + '</span>' +
    '</div>';
  }).join("");

  // Attach click handlers
  container.querySelectorAll(".convo-list-item").forEach(function(item) {
    item.addEventListener("click", function() {
      selectedConvoId = parseInt(item.getAttribute("data-id"));
      renderConvoList();
      renderConvoDetail();
    });
  });
}

// --- Conversation detail ---
function renderConvoDetail() {
  var container = document.getElementById("convo-detail-panel");
  var convo = conversations.find(function(c) { return c.id === selectedConvoId; });

  if (!convo) {
    container.innerHTML = '<div style="padding:60px;text-align:center;color:var(--color-text-tertiary);">Select a conversation to view details.</div>';
    return;
  }

  var headerHtml = '<div class="convo-detail-header">' +
    '<div class="convo-detail-customer">' +
      getPlatformIcon(convo.platform) +
      '<span class="convo-detail-name">' + convo.name + '</span>' +
      getStatusBadge(convo.status) +
    '</div>' +
    '<div class="convo-detail-actions">' +
      '<button class="btn btn-success" data-action="book" data-id="' + convo.id + '">' +
        '<i class="ti ti-check icon"></i> Mark as booked' +
      '</button>' +
      '<button class="btn btn-danger" data-action="lost" data-id="' + convo.id + '">' +
        '<i class="ti ti-x icon"></i> Mark as lost' +
      '</button>' +
    '</div>' +
  '</div>';

  var chatHtml = '<div class="convo-chat">' +
    convo.thread.map(function(msg) {
      var senderLabel = msg.sender === "customer" ? convo.name : "The Cooking Story Bot";
      return '<div class="chat-bubble ' + msg.sender + '">' +
        '<div class="chat-bubble-sender">' + senderLabel + '</div>' +
        msg.text +
        '<div class="chat-bubble-time">' + msg.time + '</div>' +
      '</div>';
    }).join("") +
  '</div>';

  container.innerHTML = headerHtml + chatHtml;

  // Wire up mark-as buttons (demo: updates status client-side)
  container.querySelectorAll(".btn[data-action]").forEach(function(btn) {
    btn.addEventListener("click", function() {
      var action = btn.getAttribute("data-action");
      var id = parseInt(btn.getAttribute("data-id"));
      var c = conversations.find(function(conv) { return conv.id === id; });
      if (c) {
        c.status = action === "book" ? "booked" : "lost";
        renderConvoList();
        renderConvoDetail();
      }
    });
  });
}

// --- Init ---
document.addEventListener("DOMContentLoaded", function() {
  renderFilterBar();
  renderConvoList();
  renderConvoDetail();
});
