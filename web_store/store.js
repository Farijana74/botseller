(function () {
  "use strict";
  var T = {
    fa: {
      nav_plans: "پلن‌ها", nav_how: "راهنما", nav_faq: "سؤالات متداول", faq_title: "سؤالات متداول خرید", faq_q1: "چطور از ShopVPN خرید کنم؟", faq_a1: "پلن فعال را انتخاب کنید، روش پرداخت را انتخاب و مراحل سفارش را کامل کنید. وضعیت سفارش و تحویل از همین صفحه قابل پیگیری است.", faq_q2: "برای خرید حتماً باید تلگرام داشته باشم؟", faq_a2: "خیر. می‌توانید با ایمیل وارد شوید و کد تأیید را دریافت کنید. برای برخی روش‌های پشتیبانی یا اتصال حساب، تلگرام اختیاری است.", faq_q3: "کانفیگ را چطور دریافت می‌کنم؟", faq_a3: "پس از تأیید پرداخت، لینک اشتراک در صفحه نتیجه خرید یا بخش سرویس‌های حساب نمایش داده می‌شود. پرداخت‌های نیازمند بررسی دستی پس از تأیید مدیر تحویل می‌شوند.", faq_q4: "چطور سرویس را به برنامه VPN اضافه کنم؟", faq_a4: "از دکمه افزودن به اپ در صفحه سفارش استفاده کنید یا لینک اشتراک را در برنامه سازگار مانند Hiddify یا v2rayNG وارد کنید.", faq_q5: "اگر پرداخت کردم ولی سرویس تحویل نشد چه کنم؟", faq_a5: "شناسه سفارش را نگه دارید و از بخش تیکت‌ها یا راه ارتباطی پشتیبانی فروشگاه پیگیری کنید. پرداخت را دوباره انجام ندهید مگر اینکه وضعیت سفارش مشخص شده باشد.", login: "ورود", logout: "خروج", close: "بستن", back: "بازگشت", guest_title: "خرید مهمان", guest_sub: "برای خرید بدون تلگرام، ایمیل را وارد کنید. کد تأیید برای تحویل سفارش و پیگیری خرید لازم است.",
      hero_tag: "تحویل فوری کانفیگ", hero_a: "اینترنت آزاد،", hero_b: "با یک کلیک",
      hero_sub: "پلن را انتخاب کن، لینک اشتراک را همان لحظه بگیر و به اپ اضافه کن.",
      hero_cta: "مشاهده پلن‌ها", pn_label: "قیمت پلن انتخاب‌شده", pn_low: "ارزان‌تر", pn_high: "گران‌تر", go_title: "خرید و اتصال سریع", pn_off: "تخفیف ویژه", plans_title: "پلن‌ها", all: "همه",
      how_title: "چطور کار می‌کند؟", how1: "پلن مناسب را انتخاب کن.",
      how2: "پرداخت کن؛ کانفیگ خودکار ساخته می‌شود.", how3: "لینک را در اپ بگذار و وصل شو.",
      buy: "خرید", sold_out: "ناموجود", currency: "تومان",
      loading: "در حال بارگذاری…", load_err: "بارگذاری پلن‌ها ناموفق بود. دوباره تلاش کنید.", empty: "فعلاً پلنی فعال نیست.",
      email_or: "یا ورود با ایمیل", email_required: "لطفاً ایمیل خود را وارد کنید.", email_label: "ایمیل", email_send: "ارسال کد تأیید", email_code_label: "کد تأیید ۶ رقمی", email_verify: "تأیید و ورود", email_sent: "کد تأیید به ایمیل شما ارسال شد.", email_bad: "کد نامعتبر یا منقضی شده است.", login_title: "ورود با تلگرام یا خرید با ایمیل", login_sub: "برای خرید مستقیم از وب، ایمیل را وارد کن و کد تأیید را بزن؛ نیازی به تلگرام نیست.",
      login_open: "باز کردن تلگرام", login_wait: "منتظر تأیید در تلگرام…", login_expired: "درخواست منقضی شد. دوباره تلاش کنید.",
      login_err: "اتصال به سرور ناموفق بود.", hi: "سلام", net_err: "اتصال به سرور ناموفق بود.",
      ck_qty: "تعداد", ck_code: "کد تخفیف (اختیاری)", ck_next: "ادامه به پرداخت", ck_total: "مبلغ قابل پرداخت",
      ck_methods: "روش پرداخت را انتخاب کنید", ck_none: "فعلاً هیچ روش پرداختی فعال نیست؛ به پشتیبانی پیام بدهید.",
      m_card: "کارت‌به‌کارت (ارسال رسید)", m_card_auto: "کارت‌به‌کارت خودکار", m_crypto: "پرداخت ارزی (کریپتو)",
      pay_wait: "پس از پرداخت، این صفحه خودکار به‌روز می‌شود.", pay_open: "رفتن به صفحه پرداخت",
      pay_waiting: "در انتظار تأیید پرداخت…", pay_bot: "پرداخت داخل ربات",
      c_amount: "مبلغ دقیق", c_card: "شماره کارت", c_holder: "به نام", c_bank: "بانک",
      c_exact: "دقیقاً همین مبلغ را واریز کنید تا پرداخت خودکار تأیید شود.",
      c_receipt: "عکس رسید", c_send: "ارسال رسید", c_sent: "رسید ارسال شد؛ پس از تأیید ادمین کانفیگ تحویل داده می‌شود.",
      c_nocard: "شماره کارت هنوز برای حساب شما فعال نشده؛ روش دیگری انتخاب کنید یا به پشتیبانی پیام بدهید.",
      c_expired: "مهلت پرداخت تمام شد. سفارش را دوباره ثبت کنید.", c_left: "زمان باقی‌مانده",
      rejected: "سفارش رد یا لغو شد. اگر پرداخت کرده‌اید به پشتیبانی پیام بدهید.",
      done_title: "خرید موفق", done_exp: "انقضا", done_copy: "کپی لینک", done_copied: "کپی شد",
      done_add: "افزودن به اپ", done_hint: "لینک اشتراک را در اپ‌هایی مثل v2rayNG یا Hiddify اضافه کنید.",
      done_empty: "سفارش تأیید شد؛ کانفیگ هنوز آماده نیست. چند لحظه بعد دوباره باز کنید.",
      fj_title: "عضویت در کانال", fj_join: "عضویت در کانال", fj_retry: "عضو شدم، ادامه",
      terms_title: "قوانین و مقررات", terms_accept: "می‌پذیرم و ادامه می‌دهم",
      link_telegram: "اتصال حساب به تلگرام", link_telegram_title: "اتصال حساب وب به تلگرام", link_telegram_open: "تأیید در تلگرام", link_telegram_hint: "لینک را باز کن و درخواست اتصال را در بات تأیید کن. پس از تأیید، صفحه را تازه‌سازی کن."
    },
    en: {
      nav_plans: "Plans", nav_how: "How it works", nav_faq: "FAQ", faq_title: "Frequently asked questions", faq_q1: "How do I buy from ShopVPN?", faq_a1: "Choose an available plan, select a payment method and complete checkout. You can follow your order and delivery status on the store page.", faq_q2: "Do I need Telegram to purchase?", faq_a2: "No. You can sign in with your email and verify it with a one-time code. Telegram is optional for some support or account-linking features.", faq_q3: "How will I receive my configuration?", faq_a3: "After payment is approved, the subscription link appears on the order result page or in your account services. Payments requiring manual review are delivered after approval.", faq_q4: "How do I add the service to a VPN app?", faq_a4: "Use the Add to App button on the order page, or paste your subscription link into a compatible app such as Hiddify or v2rayNG.", faq_q5: "What if I paid but did not receive the service?", faq_a5: "Keep your order ID and contact support through tickets or the store’s support channel. Do not pay again until the order status has been checked.", login: "Log in", logout: "Log out", close: "Close", back: "Back", guest_title: "Guest checkout", guest_sub: "To purchase without Telegram, enter your email. A verification code is required to deliver and track your order.",
      hero_tag: "Instant config delivery", hero_a: "Open internet,", hero_b: "one click away",
      hero_sub: "Pick a plan, get your subscription link instantly and add it to your app.",
      hero_cta: "View plans", pn_label: "Selected plan price", pn_low: "Cheaper", pn_high: "Pricier", go_title: "Buy and connect fast", pn_off: "Special discount", plans_title: "Plans", all: "All",
      how_title: "How it works", how1: "Choose the plan that fits you.",
      how2: "Pay, and your config is created automatically.", how3: "Paste the link into your app and connect.",
      buy: "Buy", sold_out: "Sold out", currency: "Toman",
      loading: "Loading…", load_err: "Could not load plans. Please try again.", empty: "No active plans right now.",
      email_or: "Or log in with email", email_required: "Please enter your email address.", email_label: "Email address", email_send: "Send verification code", email_code_label: "6-digit verification code", email_verify: "Verify and log in", email_sent: "A verification code has been sent to your email.", email_bad: "The code is invalid or expired.", login_title: "Telegram login or email checkout", login_sub: "To buy directly on the website, enter your email and verify the code; Telegram is not required.",
      login_open: "Open Telegram", login_wait: "Waiting for confirmation in Telegram…", login_expired: "Request expired. Please try again.",
      login_err: "Could not reach the server.", hi: "Hi", net_err: "Could not reach the server.",
      ck_qty: "Quantity", ck_code: "Discount code (optional)", ck_next: "Continue to payment", ck_total: "Amount due",
      ck_methods: "Choose a payment method", ck_none: "No payment method is active right now; please contact support.",
      m_card: "Card to card (send receipt)", m_card_auto: "Automatic card to card", m_crypto: "Crypto payment",
      pay_wait: "This page updates automatically after you pay.", pay_open: "Go to payment page",
      pay_waiting: "Waiting for payment confirmation…", pay_bot: "Pay inside the bot",
      c_amount: "Exact amount", c_card: "Card number", c_holder: "Holder", c_bank: "Bank",
      c_exact: "Transfer exactly this amount so the payment is confirmed automatically.",
      c_receipt: "Receipt photo", c_send: "Send receipt", c_sent: "Receipt sent; your config is delivered after an admin approves it.",
      c_nocard: "The card number isn't enabled for your account yet; pick another method or contact support.",
      c_expired: "Payment window expired. Please place the order again.", c_left: "Time left",
      rejected: "The order was rejected or cancelled. If you paid, please contact support.",
      done_title: "Purchase complete", done_exp: "Expires", done_copy: "Copy link", done_copied: "Copied",
      done_add: "Add to app", done_hint: "Add the subscription link to apps like v2rayNG or Hiddify.",
      done_empty: "Order approved; the config isn't ready yet. Please check again in a moment.",
      fj_title: "Channel membership", fj_join: "Join the channel", fj_retry: "I joined, continue",
      terms_title: "Terms and conditions", terms_accept: "I accept and continue",
      link_telegram: "Link account to Telegram", link_telegram_title: "Link web account to Telegram", link_telegram_open: "Confirm in Telegram", link_telegram_hint: "Open the link and confirm the link request in the bot. Refresh this page after confirmation."
    }
  };
  Object.assign(T.fa, {
    nav_account: "حساب من", acc_title: "حساب من", acc_wallet: "موجودی کیف پول", acc_services: "سرویس‌های من",
    acc_tickets: "تیکت‌ها", acc_guide: "آموزش اتصال", svc_none: "هنوز سرویسی ندارید؛ از پلن‌های پایین خرید کنید.",
    svc_expiry: "انقضا", svc_left: "روز مانده", svc_unlimited: "نامحدود", svc_used: "مصرف", svc_qr: "QR",
    svc_renew: "تمدید", badge_test: "تست", badge_off: "غیرفعال", badge_expired: "منقضی", days: "روز", off: "تخفیف",
    renew_title: "تمدید سرویس", renew_none: "پلن تمدیدی برای این سرویس تعریف نشده.", renew_ok: "تمدید انجام شد.",
    tk_new: "تیکت جدید", tk_none: "تیکتی ندارید.", tk_subject: "موضوع", tk_message: "پیام", tk_send: "ارسال",
    tk_close: "بستن تیکت", tk_closed: "بسته", tk_open: "باز", tk_title: "تیکت جدید",
    g1_t: "اندروید", g1_b: "v2rayNG یا Hiddify را نصب کنید، روی «افزودن به اپ» بزنید یا لینک را در بخش اشتراک (Subscription) وارد کنید.",
    g2_t: "آیفون", g2_b: "Streisand یا Hiddify را از اپ‌استور نصب کنید و با دکمه «افزودن به اپ» لینک را اضافه کنید.",
    g3_t: "ویندوز و مک", g3_b: "Hiddify را نصب کنید، لینک اشتراک را کپی کنید و از «افزودن پروفایل از کلیپ‌بورد» استفاده کنید."
  });
  Object.assign(T.en, {
    nav_account: "My account", acc_title: "My account", acc_wallet: "Wallet balance", acc_services: "My services",
    acc_tickets: "Tickets", acc_guide: "Connection guide", svc_none: "No services yet; buy a plan below.",
    svc_expiry: "Expires", svc_left: "days left", svc_unlimited: "Unlimited", svc_used: "Used", svc_qr: "QR",
    svc_renew: "Renew", badge_test: "Test", badge_off: "Disabled", badge_expired: "Expired", days: "days", off: "off",
    renew_title: "Renew service", renew_none: "No renewal plan is defined for this service.", renew_ok: "Renewal complete.",
    tk_new: "New ticket", tk_none: "No tickets.", tk_subject: "Subject", tk_message: "Message", tk_send: "Send",
    tk_close: "Close ticket", tk_closed: "Closed", tk_open: "Open", tk_title: "New ticket",
    g1_t: "Android", g1_b: "Install v2rayNG or Hiddify, tap “Add to app”, or paste the link in the Subscription section.",
    g2_t: "iPhone", g2_b: "Install Streisand or Hiddify from the App Store and add the link with the “Add to app” button.",
    g3_t: "Windows and Mac", g3_b: "Install Hiddify, copy the subscription link and use “Add profile from clipboard”."
  });
  Object.assign(T.fa, {
    merge_title: "ادغام حساب ایمیلی و تلگرام", merge_intro: "اگر دو حساب دارید (ایمیلی و تلگرامی)، می‌توانید آن‌ها را در یک حساب ادغام کنید. موجودی، سرویس‌ها و تیکت‌های حساب ایمیلی به حساب تلگرام منتقل می‌شوند و این کار برگشت‌پذیر نیست.",
    merge_gen: "ساخت کد ادغام", merge_send_bot: "این کد را در ربات تلگرام با دستور /merge CODE بفرستید (۱۰ دقیقه اعتبار دارد).",
    merge_enter: "اگر کد را از ربات گرفته‌اید، اینجا وارد کنید:", merge_code_label: "کد ۸ رقمی", merge_check: "بررسی کد",
    merge_bad_code: "کد باید ۸ رقم باشد.", merge_confirm_text: "حساب ایمیلی {email} به حساب تلگرام {tg} ادغام شود؟",
    merge_irreversible: "پس از تأیید، این ایمیل از این مرورگر خارج می‌شود و با ورود بعدی به حساب تلگرام وارد خواهید شد.",
    merge_confirm: "تأیید ادغام", merge_done: "ادغام انجام شد", merge_done_text: "لطفاً دوباره با ایمیل خود وارد شوید؛ ورود بعدی به همان حساب تلگرام انجام می‌شود.",
    link_telegram: "ادغام با تلگرام"
  });
  Object.assign(T.en, {
    merge_title: "Merge email and Telegram accounts", merge_intro: "If you have two accounts (email and Telegram), you can merge them into one. Balance, services and tickets from the email account move to the Telegram account. This cannot be undone.",
    merge_gen: "Create merge code", merge_send_bot: "Send this code to the Telegram bot with /merge CODE (valid for 10 minutes).",
    merge_enter: "If you got a code from the bot, enter it here:", merge_code_label: "8-digit code", merge_check: "Check code",
    merge_bad_code: "The code must be 8 digits.", merge_confirm_text: "Merge email account {email} into Telegram account {tg}?",
    merge_irreversible: "After confirming, this email leaves this browser; your next email sign-in opens the Telegram account.",
    merge_confirm: "Confirm merge", merge_done: "Merge complete", merge_done_text: "Please sign in again with your email; it now opens the Telegram account.",
    link_telegram: "Merge with Telegram"
  });
  var $ = function (id) { return document.getElementById(id); };
  var lang = /^\/store\/en(\/|$)/.test(location.pathname) ? "en" : "fa";
  var token = "";
  try { token = localStorage.getItem("ws-token") || ""; } catch (_) {}
  var catalog = null, activeCat = "all", pollTimer = null, pendingProduct = null, guestCheckout = false;
  var ck = { timer: null, view: null };
  function storeSet(k, v) { try { localStorage.setItem(k, v); } catch (_) {} }
  function storeDel(k) { try { localStorage.removeItem(k); } catch (_) {} }
  var turnstileSiteKey = "", turnstileToken = "", turnstileWidgets = {};

  function t(k) { return T[lang][k] || k; }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function fmt(n) { return new Intl.NumberFormat(lang === "fa" ? "fa-IR" : "en-US").format(n); }
  function money(n) { return fmt(n) + " " + t("currency"); }

  function api(path, opts) {
    opts = opts || {};
    var h = { "X-Language": lang };
    if (token) h["X-Web-Token"] = token;
    if (turnstileToken && (/^\/api\/web\/email\/(start|verify)$/.test(path) || path === "/api/orders")) {
      h["X-Turnstile-Token"] = turnstileToken;
      turnstileToken = "";
    }
    var body;
    if (opts.form) body = opts.form;
    else if (opts.body) { h["Content-Type"] = "application/json"; body = JSON.stringify(opts.body); }
    return fetch(path, { method: opts.method || "GET", headers: h, body: body }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) {
        if (path === "/api/orders") resetTurnstile("checkoutTurnstile");
        if (!r.ok) {
          var det = d && d.detail;
          var e = new Error(typeof det === "string" ? det : (det && det.message) || r.statusText);
          e.status = r.status; e.detail = det;
          throw e;
        }
        return d;
      });
    });
  }

  function loadTurnstileConfig() {
    api("/api/web/security-config").then(function (r) {
      turnstileSiteKey = r.turnstile_site_key || "";
      if (!turnstileSiteKey) return;
      ["emailTurnstile", "emailVerifyTurnstile", "checkoutTurnstile"].forEach(function (id) { $(id).hidden = false; });
      if (window.turnstile) { renderTurnstileWidgets(); return; }
      var script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true; script.defer = true;
      script.onload = renderTurnstileWidgets;
      script.onerror = function () { console.warn("Turnstile script could not load"); };
      document.head.appendChild(script);
    }).catch(function () {});
  }
  function renderTurnstileWidgets(onlyIds) {
    if (!turnstileSiteKey || !window.turnstile) return;
    (onlyIds || ["emailTurnstile", "emailVerifyTurnstile", "checkoutTurnstile"]).forEach(function (id) {
      var node = $(id), dialog = node && node.closest ? node.closest("dialog") : null;
      if (!node || (dialog && !dialog.open) || turnstileWidgets[id] !== undefined) return;
      turnstileWidgets[id] = window.turnstile.render("#" + id, {
        sitekey: turnstileSiteKey,
        callback: function (value) { turnstileToken = value || ""; },
        "expired-callback": function () { turnstileToken = ""; },
        "error-callback": function () { turnstileToken = ""; }
      });
    });
  }
  function resetTurnstile(id) {
    if (turnstileWidgets[id] !== undefined && window.turnstile) {
      try { window.turnstile.reset(turnstileWidgets[id]); } catch (_) {}
    }
    turnstileToken = "";
  }

  /* ---------- زبان و کاتالوگ ---------- */
  function applyLang() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    document.title = lang === "fa" ? "ShopVPN | خرید آنلاین سرویس VPN" : "ShopVPN | Buy VPN Service Online";
    var desc = document.querySelector('meta[name="description"]');
    var description = lang === "fa" ? "خرید آنلاین سرویس VPN در ShopVPN؛ مقایسه پلن‌ها، پرداخت آنلاین، خرید مهمان با تأیید ایمیل و دریافت لینک اشتراک." : "Buy VPN service online at ShopVPN. Compare plans, check out as a guest with email verification, pay online and receive your subscription link.";
    if (desc) desc.content = description;
    var ogDesc = document.querySelector('meta[property="og:description"]'); if (ogDesc) ogDesc.content = description;
    var twDesc = document.querySelector('meta[name="twitter:description"]'); if (twDesc) twDesc.content = description;
    $("langBtn").textContent = lang === "fa" ? "EN" : "FA";
    document.querySelectorAll("[data-i18n]").forEach(function (n) { n.textContent = t(n.dataset.i18n); });
    renderCatalog();
    if (!$("loginDlg").open) $("dlgStatus").textContent = "";
  }

  function renderCatalog() {
    var chips = $("chips"), cards = $("cards"), note = $("plansNote");
    chips.textContent = ""; cards.textContent = ""; note.textContent = "";
    if (!catalog) { note.textContent = t("loading"); return; }
    var cats = catalog.categories;
    if (!cats.length) { note.textContent = t("empty"); return; }
    if (cats.length > 1) {
      [{ id: "all", name: t("all") }].concat(cats).forEach(function (c) {
        var b = el("button", "glass pill chip", c.name);
        b.type = "button"; b.setAttribute("role", "tab");
        b.setAttribute("aria-selected", String(String(c.id) === String(activeCat)));
        b.onclick = function () { activeCat = c.id; renderCatalog(); };
        chips.appendChild(b);
      });
    }
    cats.forEach(function (c) {
      if (cats.length > 1 && activeCat !== "all" && String(c.id) !== String(activeCat)) return;
      c.products.forEach(function (p) {
        var card = el("article", "glass card");
        card.appendChild(el("h3", null, p.name));
        card.appendChild(el("p", "desc", p.description || ""));
        var price = el("div", "price");
        if (p.original_price && p.original_price > p.price) price.appendChild(el("s", null, money(p.original_price)));
        price.appendChild(document.createTextNode(money(p.price)));
        card.appendChild(price);
        var buy = el("button", "btn", p.in_stock ? t("buy") : t("sold_out"));
        buy.type = "button";
        if (p.in_stock) buy.onclick = function () { openCheckout(p); };
        else buy.disabled = true;
        card.appendChild(buy);
        cards.appendChild(card);
      });
    });
    renderPanel();
  }

  /* پنل معکوس بالای صفحه: انتخاب پلن با نمودار راه‌راه */
  var panelSel = null;
  function renderPanel() {
    var list = [];
    (catalog ? catalog.categories : []).forEach(function (c) {
      if (activeCat === "all" || String(c.id) === String(activeCat)) list = list.concat(c.products);
    });
    var buy = $("pnBuy"), chart = $("pnChart");
    chart.textContent = "";
    if (!list.length) { $("pnBig").textContent = ""; $("pnIns").textContent = ""; $("pnName").textContent = ""; $("pnSub").textContent = ""; buy.disabled = true; buy.textContent = t("buy"); panelSel = null; return; }
    if (list.indexOf(panelSel) < 0) panelSel = list.filter(function (p) { return p.in_stock; })[0] || list[0];
    var p = panelSel, max = Math.max.apply(null, list.map(function (x) { return x.price || 1; }));
    var big = $("pnBig"); big.textContent = fmt(p.price);
    big.appendChild(el("span", null, t("currency")));
    $("pnIns").textContent = p.original_price && p.original_price > p.price ? t("pn_off") + ": " + fmt(Math.round((1 - p.price / p.original_price) * 100)) + "%" : "";
    $("pnName").textContent = p.name;
    $("pnSub").textContent = p.in_stock ? "" : t("sold_out");
    list.forEach(function (x, i) {
      var b = el("button", "cb" + (x.in_stock ? "" : " out"));
      b.type = "button"; b.setAttribute("aria-pressed", String(x === p)); b.setAttribute("aria-label", x.name);
      var bar = document.createElement("i");
      bar.style.setProperty("--h", Math.max(10, Math.round((x.price || 1) / max * 100)) + "%"); bar.style.setProperty("--i", i);
      b.appendChild(bar); b.onclick = function () { panelSel = x; renderPanel(); };
      chart.appendChild(b);
    });
    buy.disabled = !p.in_stock;
    buy.textContent = p.in_stock ? t("buy") + " · " + p.name : t("sold_out");
    buy.onclick = function () { if (p.in_stock) openCheckout(p); };
  }

  var previewMode = new URLSearchParams(location.search).get("preview") === "1";
  var previewBrand = null;
  function applyBranding(b) {
    b = b || {};
    var name = b.store_name || "ShopVPN";
    var logo = b.logo || "";
    var tagline = b.tagline || "";
    $("brandName").textContent = name;
    $("brand").setAttribute("aria-label", name);
    $("footName").textContent = name;
    document.title = name;
    var logoEl = $("brandLogo");
    if (logoEl) { logoEl.src = logo; logoEl.style.display = logo ? "block" : "none"; }
    var tag = $("brandTagline");
    if (tag && tagline) { tag.textContent = tagline; tag.removeAttribute("data-i18n"); }
    var color = String(b.primary_color || "").trim();
    if (/^#[0-9a-fA-F]{6}$/.test(color)) { document.documentElement.style.setProperty("--brand-accent", color); }
    var theme = b.theme || "auto";
    if (theme === "dark" || theme === "light") document.documentElement.setAttribute("data-theme", theme);
  }
  if (previewMode) {
    window.addEventListener("message", function (ev) {
      if (!ev.data || ev.data.type !== "shopvpn-web-store-preview") return;
      previewBrand = ev.data.payload || {};
      applyBranding(previewBrand);
    });
  }
  function loadCatalog() {
    api("/api/web/catalog").then(function (d) {
      catalog = d;
      applyBranding({ store_name: d.store_name, logo: d.logo, tagline: d.tagline, primary_color: d.primary_color, support_url: d.support_url });
      if (previewBrand) applyBranding(previewBrand);
      renderCatalog();
    }).catch(function () { $("plansNote").textContent = t("load_err"); });
  }

  /* ---------- نشست و ورود ---------- */
  function showUser(u) {
    $("userBox").hidden = !u; $("loginBtn").hidden = !!u;
    $("account").hidden = !u; $("navAccount").hidden = !u;
    if (u) { $("userName").textContent = t("hi") + " " + (u.first_name || u.username || ""); loadAccount(); }
    var linkBtn = $("linkTelegramBtn"); if (linkBtn) linkBtn.hidden = !(u && u.is_email_account);
  }
  function dropToken() { token = ""; storeDel("ws-token"); showUser(null); }
  function loadSession() {
    if (!token) { showUser(null); return; }
    api("/api/web/session").then(showUser).catch(function (e) {
      if (e.status === 401 || e.status === 403) dropToken(); else showUser(null);
    });
  }
  function stopPoll() { if (pollTimer) { clearInterval(pollTimer); pollTimer = null; } }

  function startGuestCheckout() {
    guestCheckout = true;
    var dlg = $("loginDlg");
    stopPoll();
    $("dlgTitle").textContent = t("guest_title");
    $("dlgText").textContent = t("guest_sub");
    $("dlgLink").hidden = true;
    $("emailInput").value = "";
    $("emailCodeInput").value = "";
    $("emailCodeWrap").hidden = true;
    $("dlgStatus").textContent = "";
    if (!dlg.open) dlg.showModal();
    renderTurnstileWidgets(["emailTurnstile"]);
    setTimeout(function () { $("emailInput").focus(); }, 0);
  }

  function startLogin() {
    guestCheckout = false;
    var dlg = $("loginDlg"), link = $("dlgLink"), status = $("dlgStatus");
    $("dlgTitle").textContent = t("login_title");
    $("dlgText").textContent = t("login_sub");
    link.hidden = false;
    stopPoll(); status.textContent = ""; link.removeAttribute("href");
    if (!dlg.open) dlg.showModal();
    renderTurnstileWidgets(["emailTurnstile"]);
    api("/api/web/login/start", { method: "POST" }).then(function (d) {
      link.href = d.link; status.textContent = t("login_wait");
      var deadline = Date.now() + d.expires_in * 1000;
      pollTimer = setInterval(function () {
        if (Date.now() > deadline) { stopPoll(); status.textContent = t("login_expired"); return; }
        api("/api/web/login/poll", { method: "POST", body: { poll: d.poll } }).then(function (r) {
          if (r.status === "ok") {
            stopPoll(); token = r.token; storeSet("ws-token", token);
            dlg.close(); showUser(r.user);
            if (pendingProduct) { var p = pendingProduct; pendingProduct = null; openCheckout(p); }
          } else if (r.status === "expired") { stopPoll(); status.textContent = t("login_expired"); }
        }).catch(function () { /* خطای شبکه‌ی موقت: poll بعدی دوباره تلاش می‌کند */ });
      }, 2000);
    }).catch(function (e) { status.textContent = e.status ? e.message : t("login_err"); });
  }

  /* ---------- پرداخت داخل سایت ---------- */
  function ckClear() { if (ck.timer) { clearInterval(ck.timer); ck.timer = null; } if (ck.tick) { clearInterval(ck.tick); ck.tick = null; } $("ckBody").textContent = ""; $("ckMsg").textContent = ""; }
  function ckTitle(s) { $("ckTitle").textContent = s; }
  function ckBody() { return $("ckBody"); }
  function ckError(e, retry) {
    if (e.status === 401) { dropToken(); $("ckDlg").close(); startLogin(); return; }
    var d = e.detail;
    if (e.status === 403 && d && typeof d === "object" && d.code === "force_join") {
      ckClear(); ckTitle(t("fj_title"));
      ckBody().appendChild(el("p", null, d.message || ""));
      var a = el("a", "btn", t("fj_join")); a.href = d.join_link; a.target = "_blank"; a.rel = "noopener";
      var r = el("button", "glass pill", t("fj_retry")); r.type = "button"; r.onclick = retry;
      var row = el("div", "row"); row.appendChild(a); row.appendChild(r); ckBody().appendChild(row);
      return;
    }
    if (e.status === 403 && d && typeof d === "object" && d.code === "terms_required") {
      ckClear(); ckTitle(t("terms_title"));
      ckBody().appendChild(el("div", "code", d.text || ""));
      var ok = el("button", "btn", t("terms_accept")); ok.type = "button";
      ok.onclick = function () { api("/api/terms/accept", { method: "POST" }).then(retry).catch(function (x) { ckError(x, retry); }); };
      var row2 = el("div", "row"); row2.appendChild(ok); ckBody().appendChild(row2);
      return;
    }
    $("ckMsg").textContent = e.status ? e.message : t("net_err");
  }

  function openCheckout(p) {
    if (!token) { pendingProduct = p; startGuestCheckout(); return; }
    ck.view = { product: p }; ck.done = null;
    showForm(p);
    if (!$("ckDlg").open) $("ckDlg").showModal();
    renderTurnstileWidgets(["checkoutTurnstile"]);
  }

  function showForm(p) {
    ckClear(); ckTitle(p.name);
    var b = ckBody();
    var kv = el("div", "kv"); kv.appendChild(el("span", null, t("ck_total"))); kv.appendChild(el("b", null, money(p.price)));
    b.appendChild(kv);
    var q = document.createElement("input"); q.type = "number"; q.min = "1"; q.max = "10"; q.value = "1"; q.inputMode = "numeric";
    var ql = el("label", "field"); ql.appendChild(el("span", null, t("ck_qty"))); ql.appendChild(q); b.appendChild(ql);
    var c = document.createElement("input"); c.type = "text"; c.autocomplete = "off"; c.maxLength = 64; c.dir = "ltr";
    var cl = el("label", "field"); cl.appendChild(el("span", null, t("ck_code"))); cl.appendChild(c); b.appendChild(cl);
    var go = el("button", "btn", t("ck_next")); go.type = "button"; go.style.width = "100%";
    function submit() {
      var qty = Math.min(10, Math.max(1, parseInt(q.value, 10) || 1));
      go.disabled = true; $("ckMsg").textContent = "";
      api("/api/orders", { method: "POST", body: { product_id: p.id, quantity: qty, discount_code: c.value.trim() || null } })
        .then(function (res) {
          if (res.status === "approved") showDelivery(res.order_id);
          else showMethods(res, p);
        })
        .catch(function (e) { go.disabled = false; ckError(e, function () { showForm(p); }); });
    }
    go.onclick = submit; b.appendChild(go);
  }

  function methodBtn(label, fn) {
    var m = el("button", "glass method", label); m.type = "button";
    m.onclick = function () { m.disabled = true; $("ckMsg").textContent = ""; fn(function () { m.disabled = false; }); };
    return m;
  }

  function showMethods(res, p) {
    ckClear(); ckTitle(p ? p.name : t("renew_title"));
    var b = ckBody(), id = res.order_id;
    var kv = el("div", "kv"); kv.appendChild(el("span", null, t("ck_total"))); kv.appendChild(el("b", null, money(res.final_price)));
    b.appendChild(kv);
    b.appendChild(el("p", null, t("ck_methods")));
    var list = el("div", "methods"); b.appendChild(list);
    function fail(done) { return function (e) { done(); ckError(e, function () { showMethods(res, p); }); }; }
    function invoice(path) { return function (done) { api(path, { method: "POST" }).then(function (r) { showPay(r, id); }).catch(fail(done)); }; }
    var added = 0;
    function add(label, fn) { list.appendChild(methodBtn(label, fn)); added++; }
    if (res.card_to_card_enabled) add(t("m_card"), function (done) { showManualCard(res); done(); });
    if (res.card_to_card_auto_enabled) add(t("m_card_auto"), function (done) {
      api("/api/orders/" + id + "/card-auto-invoice", { method: "POST" }).then(function (r) { showCardAuto(r, id); }).catch(fail(done));
    });
    if (res.crypto_enabled) add(t("m_crypto"), invoice("/api/orders/" + id + "/crypto-invoice"));
    if (res.abangateway_enabled) add("AbanGateway", invoice("/api/orders/" + id + "/abangateway-invoice"));
    if (res.blupal_enabled) add("Blupal", invoice("/api/orders/" + id + "/blupal-invoice"));
    if (res.noapay_enabled) add("NoaPay", invoice("/api/orders/" + id + "/noapay-invoice"));
    (res.extra_gateways || []).forEach(function (g) {
      add((g.icon ? g.icon + " " : "") + g.title, invoice("/api/orders/" + id + "/extra-invoice/" + encodeURIComponent(g.key)));
    });
    api("/api/gateways?amount=" + encodeURIComponent(res.final_price) + (p ? "&product_id=" + encodeURIComponent(p.id) : "")).then(function (gs) {
      (gs || []).forEach(function (g) { add(g.name, invoice("/api/orders/" + id + "/custom-invoice/" + encodeURIComponent(g.key))); });
    }).catch(function () { /* درگاه‌های سفارشی اختیاری‌اند */ }).then(function () {
      if (!added) $("ckMsg").textContent = t("ck_none");
    });
  }

  function showPay(r, orderId) {
    ckClear(); ckTitle(t("pay_waiting"));
    var b = ckBody();
    var url = r.payment_url || r.invoice_url || r.pay_url || "";
    b.appendChild(el("div", "spin")); b.appendChild(el("p", null, t("pay_wait")));
    var row = el("div", "row"); b.appendChild(row);
    if (url && /^https?:\/\//i.test(url)) {
      var a = el("a", "btn", t("pay_open")); a.href = url; a.target = "_blank"; a.rel = "noopener"; row.appendChild(a);
      try { window.open(url, "_blank", "noopener"); } catch (e) { /* مسدودسازی پاپ‌آپ؛ دکمه‌ی بالا هست */ }
    }
    if (r.bot_url && /^https?:\/\//i.test(r.bot_url)) {
      var bb = el("a", "glass pill", t("pay_bot")); bb.href = r.bot_url; bb.target = "_blank"; bb.rel = "noopener"; row.appendChild(bb);
    }
    watchOrder(orderId);
  }

  function showManualCard(res) {
    ckClear(); ckTitle(t("m_card"));
    var b = ckBody();
    function kv(k, v) { var r = el("div", "kv"); r.appendChild(el("span", null, k)); r.appendChild(el("b", null, v)); b.appendChild(r); }
    kv(t("c_amount"), money(res.final_price));
    if (!res.card_number) { b.appendChild(el("p", "err", t("c_nocard"))); return; }
    kv(t("c_card"), res.card_number);
    if (res.card_holder) kv(t("c_holder"), res.card_holder);
    var f = document.createElement("input"); f.type = "file"; f.accept = "image/*";
    var l = el("label", "field"); l.appendChild(el("span", null, t("c_receipt"))); l.appendChild(f); b.appendChild(l);
    var send = el("button", "btn", t("c_send")); send.type = "button"; send.style.width = "100%";
    send.onclick = function () {
      if (!f.files || !f.files[0]) return;
      var fd = new FormData(); fd.append("photo", f.files[0]);
      send.disabled = true;
      api("/api/orders/" + res.order_id + "/receipt", { method: "POST", form: fd }).then(function () {
        ckClear(); ckTitle(t("pay_waiting"));
        ckBody().appendChild(el("div", "spin")); ckBody().appendChild(el("p", null, t("c_sent")));
        watchOrder(res.order_id);
      }).catch(function (e) { send.disabled = false; ckError(e, function () { showManualCard(res); }); });
    };
    b.appendChild(send);
  }

  function showCardAuto(r, orderId) {
    ckClear(); ckTitle(t("m_card_auto"));
    var b = ckBody();
    function kv(k, v) { var x = el("div", "kv"); x.appendChild(el("span", null, k)); x.appendChild(el("b", null, v)); b.appendChild(x); return x; }
    kv(t("c_amount"), money(r.amount_toman));
    kv(t("c_card"), String(r.card_number || ""));
    if (r.card_holder) kv(t("c_holder"), r.card_holder);
    if (r.bank_name) kv(t("c_bank"), r.bank_name);
    b.appendChild(el("p", null, t("c_exact")));
    var left = kv(t("c_left"), "");
    var timeEl = left.querySelector("b");
    var end = r.expires_at ? new Date(String(r.expires_at).replace(" ", "T") + (/[zZ]|[+-]\d\d:?\d\d$/.test(r.expires_at) ? "" : "Z")).getTime() : 0;
    function tick() {
      var s = Math.max(0, Math.round((end - Date.now()) / 1000));
      timeEl.textContent = end ? Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0") : "";
    }
    tick(); ck.tick = setInterval(tick, 1000);
    b.appendChild(el("div", "spin"));
    var n = 0;
    watchOrder(orderId, function () {
      if (++n % 2 === 0 && r.invoice_id) {
        api("/api/card-auto-invoice/" + r.invoice_id + "/status").then(function (s) {
          if (s.status === "expired") { ckClear(); ckTitle(t("m_card_auto")); $("ckMsg").textContent = t("c_expired"); }
        }).catch(function () {});
      }
    });
  }

  function watchOrder(orderId, onTick) {
    if (ck.timer) clearInterval(ck.timer);
    var started = Date.now();
    ck.timer = setInterval(function () {
      if (!$("ckDlg").open || Date.now() - started > 45 * 60 * 1000) { clearInterval(ck.timer); ck.timer = null; return; }
      if (onTick) onTick();
      api("/api/web/orders/" + orderId).then(function (o) {
        if (o.status === "approved") { clearInterval(ck.timer); ck.timer = null; (ck.done || showDelivery)(orderId); }
        else if (o.status === "rejected" || o.status === "cancelled") {
          clearInterval(ck.timer); ck.timer = null; ckClear(); ckTitle(t("pay_waiting")); $("ckMsg").textContent = t("rejected");
        }
      }).catch(function () { /* poll بعدی */ });
    }, 4000);
  }

  var APPS = [
    ["v2rayNG", function (u) { return "v2rayng://install-config?url=" + encodeURIComponent(u); }],
    ["Streisand", function (u) { return "streisand://import/" + u; }],
    ["Hiddify", function (u) { return "hiddify://import/" + u; }]
  ];

  function copyText(text, btn) {
    function ok() { var old = btn.textContent; btn.textContent = t("done_copied"); setTimeout(function () { btn.textContent = old; }, 1500); }
    if (navigator.clipboard && window.isSecureContext) { navigator.clipboard.writeText(text).then(ok, function () {}); return; }
    var ta = document.createElement("textarea"); ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); ok(); } catch (e) { /* کاربر دستی کپی می‌کند */ } ta.remove();
  }

  function showDelivery(orderId, attempt) {
    attempt = attempt || 0;
    api("/api/web/orders/" + orderId).then(function (o) {
      if (o.status === "approved" && !o.links.length && attempt < 5) { setTimeout(function () { showDelivery(orderId, attempt + 1); }, 2000); return; }
      ckClear(); ckTitle(t("done_title")); $("ckTitle").className = "ok";
      var b = ckBody();
      b.appendChild(el("p", null, o.product_name + (o.quantity > 1 ? " × " + fmt(o.quantity) : "")));
      if (o.expires_at) { var k = el("div", "kv"); k.appendChild(el("span", null, t("done_exp"))); k.appendChild(el("b", null, String(o.expires_at).slice(0, 10))); b.appendChild(k); }
      if (!o.links.length) { b.appendChild(el("p", null, t("done_empty"))); return; }
      o.links.forEach(function (link, i) {
        b.appendChild(el("div", "code", link));
        var row = el("div", "row"); b.appendChild(row);
        var cp = el("button", "btn btn-sm", t("done_copy")); cp.type = "button"; cp.onclick = function () { copyText(link, cp); }; row.appendChild(cp);
        if (/^https?:\/\//i.test(link)) APPS.forEach(function (a) {
          var x = el("a", "glass pill", t("done_add") + " · " + a[0]); x.href = a[1](link); row.appendChild(x);
        });
        var img = el("img", "qr"); img.alt = "QR"; img.width = 168; img.height = 168;
        fetch("/api/web/orders/" + orderId + "/qr/" + i, { headers: { "X-Web-Token": token } })
          .then(function (r) { return r.ok ? r.blob() : Promise.reject(); })
          .then(function (bl) { img.src = URL.createObjectURL(bl); })
          .catch(function () { img.remove(); });
        var qrRow = el("div", "row"); qrRow.appendChild(img); b.appendChild(qrRow);
      });
      b.appendChild(el("p", "note", t("done_hint")));
    }).catch(function (e) { ckError(e, function () { showDelivery(orderId); }); });
  }


  /* ---------- داشبورد کاربر ---------- */
  function barText(n) { return (n / 1073741824).toFixed(n >= 10737418240 ? 0 : 1); }
  function badge(text, bad) { return el("span", "badge" + (bad ? " bad" : ""), text); }

  function loadAccount() {
    api("/api/me").then(function (m) { $("walletAmt").textContent = money(m.wallet_credit || 0); }).catch(function () {});
    api("/api/web/services").then(renderServices).catch(function (e) { $("svcNote").textContent = e.status ? e.message : t("net_err"); });
    api("/api/tickets").then(renderTickets).catch(function () {});
  }

  function renderServices(r) {
    var box = $("svcList"); box.textContent = ""; $("svcNote").textContent = r.services.length ? "" : t("svc_none");
    r.services.forEach(function (s) {
      var card = el("article", "glass svc");
      card.appendChild(el("h3", null, s.name));
      var badges = el("div", "badges"); card.appendChild(badges);
      if (s.is_test) badges.appendChild(badge(t("badge_test")));
      if (!s.enabled) badges.appendChild(badge(t("badge_off"), true));
      var usage = el("div", "usage"); card.appendChild(usage);
      var row = el("div", "row"); card.appendChild(row);
      var cp = el("button", "btn btn-sm", t("done_copy")); cp.type = "button"; cp.onclick = function () { copyText(s.link, cp); }; row.appendChild(cp);
      var qrBtn = el("button", "glass pill", t("svc_qr")); qrBtn.type = "button"; row.appendChild(qrBtn);
      if (/^https?:\/\//i.test(s.link)) APPS.forEach(function (a) { var x = el("a", "glass pill", a[0]); x.href = a[1](s.link); row.appendChild(x); });
      if (s.can_renew && r.renew_enabled) { var rn = el("button", "glass pill", t("svc_renew")); rn.type = "button"; rn.onclick = function () { openRenew(s); }; row.appendChild(rn); }
      var qrBox = el("div", "row"); card.appendChild(qrBox);
      qrBtn.onclick = function () {
        if (qrBox.firstChild) { qrBox.textContent = ""; return; }
        var img = el("img", "qr"); img.alt = "QR"; img.width = 168; img.height = 168; qrBox.appendChild(img);
        fetch("/api/web/qr?link=" + encodeURIComponent(s.link), { headers: { "X-Web-Token": token } })
          .then(function (x) { return x.ok ? x.blob() : Promise.reject(); })
          .then(function (bl) { img.src = URL.createObjectURL(bl); }).catch(function () { qrBox.textContent = ""; });
      };
      box.appendChild(card);
      api("/api/sub-info?link=" + encodeURIComponent(s.link)).then(function (i) {
        if (!i || !i.ok) { if (s.expires_at) usage.appendChild(el("p", "note", t("svc_expiry") + ": " + String(s.expires_at).slice(0, 10))); return; }
        var used = (i.upload || 0) + (i.download || 0);
        if (i.total > 0) {
          var bar = el("div", "bar"), fill = document.createElement("i");
          fill.style.width = Math.min(100, Math.round(used * 100 / i.total)) + "%"; bar.appendChild(fill); usage.appendChild(bar);
          usage.appendChild(el("p", "note", t("svc_used") + ": " + barText(used) + " / " + barText(i.total) + " GB"));
        } else usage.appendChild(el("p", "note", t("svc_used") + ": " + barText(used) + " GB · " + t("svc_unlimited")));
        if (i.expire) {
          var left = Math.ceil((i.expire * 1000 - Date.now()) / 86400000);
          if (left <= 0) badges.appendChild(badge(t("badge_expired"), true));
          usage.appendChild(el("p", "note", t("svc_expiry") + ": " + new Date(i.expire * 1000).toISOString().slice(0, 10) + (left > 0 ? " · " + fmt(left) + " " + t("svc_left") : "")));
        }
      }).catch(function () {});
    });
  }

  function openRenew(s) {
    ck.done = function () { ckClear(); ckTitle(t("renew_title")); ckBody().appendChild(el("p", "ok", t("renew_ok"))); loadAccount(); };
    ckClear(); ckTitle(t("renew_title")); ckBody().appendChild(el("div", "spin"));
    if (!$("ckDlg").open) $("ckDlg").showModal();
    api("/api/custom-configs/" + s.id + "/renewal-full-plans").then(function (plans) {
      ckClear(); ckTitle(t("renew_title"));
      var b = ckBody();
      if (!plans.length) { b.appendChild(el("p", null, t("renew_none"))); return; }
      var list = el("div", "methods"); b.appendChild(list);
      plans.forEach(function (p) {
        var label = p.name + " — " + (p.volume_gb ? fmt(p.volume_gb) + " GB / " : "") + fmt(p.duration_days) + " " + t("days") + " — " + money(p.price) +
          (p.discount_percent ? " (" + fmt(p.discount_percent) + "% " + t("off") + ")" : "");
        list.appendChild(methodBtn(label, function (done) {
          api("/api/custom-configs/" + s.id + "/renew-full", { method: "POST", body: { product_id: p.id } }).then(function (res) {
            if (res.status === "approved") ck.done(res.order_id || 0); else showMethods(res, null);
          }).catch(function (e) { done(); ckError(e, function () { openRenew(s); }); });
        }));
      });
    }).catch(function (e) { ckClear(); if (e.status === 401) ckError(e); else $("ckMsg").textContent = e.status ? e.message : t("net_err"); });
  }

  function renderTickets(list) {
    var box = $("tkList"); box.textContent = "";
    if (!list.length) { box.appendChild(el("p", "note", t("tk_none"))); return; }
    list.forEach(function (k) {
      var b = el("button", "glass tk"); b.type = "button";
      b.appendChild(el("span", null, "#" + k.id + " " + k.subject));
      b.appendChild(el("span", "badge" + (k.status === "closed" ? "" : " ok"), k.status === "closed" ? t("tk_closed") : t("tk_open")));
      b.onclick = function () { openTicket(k.id); };
      box.appendChild(b);
    });
  }

  function openNewTicket() {
    ck.done = null; ckClear(); ckTitle(t("tk_title"));
    var b = ckBody();
    var s = document.createElement("input"); s.type = "text"; s.maxLength = 150;
    var sl = el("label", "field"); sl.appendChild(el("span", null, t("tk_subject"))); sl.appendChild(s); b.appendChild(sl);
    var m = document.createElement("textarea"); m.className = "in"; m.maxLength = 2000;
    var ml = el("label", "field"); ml.appendChild(el("span", null, t("tk_message"))); ml.appendChild(m); b.appendChild(ml);
    var go = el("button", "btn", t("tk_send")); go.type = "button"; go.style.width = "100%";
    go.onclick = function () {
      go.disabled = true; $("ckMsg").textContent = "";
      api("/api/tickets", { method: "POST", body: { subject: s.value, message: m.value } })
        .then(function (r) { loadAccount(); openTicket(r.id); })
        .catch(function (e) { go.disabled = false; ckError(e, openNewTicket); });
    };
    b.appendChild(go);
    if (!$("ckDlg").open) $("ckDlg").showModal();
  }

  function openTicket(id) {
    ck.done = null; ckClear(); ckTitle("#" + id);
    var b = ckBody(), thread = el("div", "thread"), last = 0, closed = false;
    b.appendChild(thread);
    var m = document.createElement("textarea"); m.className = "in"; m.maxLength = 2000;
    var send = el("button", "btn", t("tk_send")); send.type = "button";
    var cl = el("button", "glass pill", t("tk_close")); cl.type = "button";
    var row = el("div", "row"); row.appendChild(send); row.appendChild(cl);
    b.appendChild(m); b.appendChild(row);
    function load() {
      api("/api/tickets/" + id + "/messages?since_id=" + last).then(function (r) {
        ckTitle("#" + id + " " + r.ticket.subject);
        r.messages.forEach(function (x) {
          if (x.id > last) last = x.id;
          var d = el("div", "msg" + (x.sender === "user" ? " me" : ""), x.message);
          d.appendChild(el("small", null, String(x.created_at || "").slice(0, 16).replace("T", " ")));
          thread.appendChild(d);
        });
        if (r.messages.length) thread.scrollTop = thread.scrollHeight;
        if (r.ticket.status === "closed" && !closed) { closed = true; m.hidden = true; row.hidden = true; }
      }).catch(function (e) { if (e.status === 401) ckError(e); });
    }
    send.onclick = function () {
      if (!m.value.trim()) return;
      send.disabled = true;
      api("/api/tickets/" + id + "/messages", { method: "POST", body: { message: m.value } })
        .then(function () { m.value = ""; send.disabled = false; load(); })
        .catch(function (e) { send.disabled = false; $("ckMsg").textContent = e.status ? e.message : t("net_err"); });
    };
    cl.onclick = function () { api("/api/tickets/" + id + "/close", { method: "POST" }).then(function () { load(); loadAccount(); }).catch(function () {}); };
    load(); ck.timer = setInterval(load, 8000);
    if (!$("ckDlg").open) $("ckDlg").showModal();
  }

  /* ---------- رویدادها ---------- */
  $("themeBtn").onclick = function () {
    var r = document.documentElement, dark = r.dataset.theme ? r.dataset.theme === "dark" : matchMedia("(prefers-color-scheme:dark)").matches;
    r.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("shop-theme", r.dataset.theme); } catch (e) {}
  };
  try { var sv = localStorage.getItem("shop-theme"); if (sv) document.documentElement.dataset.theme = sv; } catch (e) {}
  $("langBtn").onclick = function () { location.href = (lang === "fa" ? "/store/en/" : "/store/") + location.hash; };
  $("emailSendBtn").onclick = function () {
    var email = $("emailInput").value.trim();
    if (!email) { $("dlgStatus").textContent = t("email_required"); return; }
    $("emailSendBtn").disabled = true;
    api("/api/web/email/start", { method: "POST", body: { email: email } }).then(function () {
      $("emailCodeWrap").hidden = false; $("dlgStatus").textContent = t("email_sent");
      renderTurnstileWidgets(["emailVerifyTurnstile"]);
    }).catch(function (e) { $("dlgStatus").textContent = e.message || t("login_err"); })
      .finally(function () { resetTurnstile("emailTurnstile"); $("emailSendBtn").disabled = false; });
  };
  $("emailVerifyBtn").onclick = function () {
    var email = $("emailInput").value.trim(), code = $("emailCodeInput").value.trim();
    api("/api/web/email/verify", { method: "POST", body: { email: email, code: code } }).then(function (r) {
      stopPoll(); token = r.token; storeSet("ws-token", token); $("loginDlg").close(); showUser(r.user);
      if (pendingProduct) { var p = pendingProduct; pendingProduct = null; guestCheckout = false; openCheckout(p); }
    }).catch(function (e) { $("dlgStatus").textContent = e.message || t("email_bad"); })
      .finally(function () { resetTurnstile("emailVerifyTurnstile"); });
  };
  $("loginBtn").onclick = function () { pendingProduct = null; guestCheckout = false; $("emailCodeWrap").hidden = true; $("emailCodeInput").value = ""; startLogin(); };
  $("dlgClose").onclick = function () { stopPoll(); pendingProduct = null; guestCheckout = false; $("loginDlg").close(); };
  $("loginDlg").addEventListener("close", stopPoll);
  $("ckClose").onclick = function () { $("ckDlg").close(); };
  $("ckDlg").addEventListener("close", function () { ckClear(); $("ckTitle").className = ""; ck.done = null; });
  $("newTicketBtn").onclick = openNewTicket;
  var linkTelegramBtn = $("linkTelegramBtn");
  if (linkTelegramBtn) linkTelegramBtn.onclick = openMerge;

  function openMerge() {
    ck.done = null; ckClear(); ckTitle(t("merge_title"));
    var b = ckBody();
    b.appendChild(el("p", null, t("merge_intro")));
    var gen = el("button", "btn", t("merge_gen")); gen.type = "button"; gen.style.width = "100%";
    var made = el("div", null);
    gen.onclick = function () {
      gen.disabled = true; $("ckMsg").textContent = "";
      api("/api/web/merge/code", { method: "POST" }).then(function (r) {
        made.textContent = "";
        made.appendChild(el("div", "code", r.code));
        made.appendChild(el("p", "note", t("merge_send_bot")));
        if (ck.timer) clearInterval(ck.timer);
        ck.timer = setInterval(function () {
          api("/api/web/session").catch(function (e) {
            if (e.status !== 401 && e.status !== 403) return;
            dropToken(); ckClear(); ckTitle(t("merge_done"));
            ckBody().appendChild(el("p", null, t("merge_done_text")));
          });
        }, 3000);
      }).catch(function (e) { gen.disabled = false; ckError(e, openMerge); });
    };
    b.appendChild(gen); b.appendChild(made);
    b.appendChild(el("hr"));
    b.appendChild(el("p", null, t("merge_enter")));
    var inp = document.createElement("input"); inp.type = "text"; inp.inputMode = "numeric"; inp.maxLength = 8;
    inp.autocomplete = "off"; inp.placeholder = "12345678"; inp.dir = "ltr";
    var il = el("label", "field"); il.appendChild(el("span", null, t("merge_code_label"))); il.appendChild(inp); b.appendChild(il);
    var check = el("button", "glass pill", t("merge_check")); check.type = "button";
    var prev = el("div", null); b.appendChild(check); b.appendChild(prev);
    check.onclick = function () {
      var code = inp.value.trim();
      if (!/^[0-9]{8}$/.test(code)) { $("ckMsg").textContent = t("merge_bad_code"); return; }
      $("ckMsg").textContent = ""; prev.textContent = "";
      api("/api/web/merge/preview", { method: "POST", body: { code: code } }).then(function (r) {
        prev.appendChild(el("p", null, t("merge_confirm_text").replace("{email}", r.email).replace("{tg}", r.telegram)));
        prev.appendChild(el("p", "note", t("merge_irreversible")));
        var ok = el("button", "btn", t("merge_confirm")); ok.type = "button"; ok.style.width = "100%";
        ok.onclick = function () {
          ok.disabled = true;
          api("/api/web/merge/confirm", { method: "POST", body: { code: code } }).then(function () {
            dropToken(); ckClear(); ckTitle(t("merge_done"));
            ckBody().appendChild(el("p", null, t("merge_done_text")));
          }).catch(function (e) { ok.disabled = false; ckError(e, openMerge); });
        };
        prev.appendChild(ok);
      }).catch(function (e) { ckError(e, openMerge); });
    };
    if (!$("ckDlg").open) $("ckDlg").showModal();
  }
  $("logoutBtn").onclick = function () { api("/api/web/logout", { method: "POST" }).catch(function () {}).then(dropToken); };

  applyLang(); loadCatalog(); loadSession(); loadTurnstileConfig();
})();
