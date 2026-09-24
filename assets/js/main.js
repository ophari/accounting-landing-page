/*!
 * AkunPro - Software Akuntansi & Bisnis Modern
 * Shared front-end behaviour untuk seluruh 5 halaman.
 * Vanilla JS tanpa dependency. Setiap modul diberi guard agar file tunggal
 * ini aman dimuat di semua halaman.
 */
(function () {
  'use strict';

  /* ------------------------------------------------------------------ *
   * Konfigurasi global
   * ------------------------------------------------------------------ */
  var CONFIG = {
    waNumber: '6281234567890',
    waDefaultText: 'Halo AkunPro, saya ingin konsultasi mengenai software akuntansi untuk bisnis saya.'
  };

  function waLink(text) {
    return 'https://wa.me/' + CONFIG.waNumber + '?text=' + encodeURIComponent(text || CONFIG.waDefaultText);
  }

  function $(selector, scope) {
    return (scope || document).querySelector(selector);
  }

  function $$(selector, scope) {
    return Array.prototype.slice.call((scope || document).querySelectorAll(selector));
  }

  /* ------------------------------------------------------------------ *
   * 1. Navbar - mobile menu, scroll state, active link
   * ------------------------------------------------------------------ */
  function initNavbar() {
    var header = $('[data-header]');
    var toggle = $('[data-menu-toggle]');
    var menu = $('[data-mobile-menu]');

    if (toggle && menu) {
      var setOpen = function (open) {
        menu.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.classList.toggle('is-active', open);
        document.body.classList.toggle('overflow-hidden', open);
      };

      toggle.addEventListener('click', function () {
        setOpen(!menu.classList.contains('is-open'));
      });

      // Tutup ketika salah satu tautan diklik
      $$('a', menu).forEach(function (link) {
        link.addEventListener('click', function () { setOpen(false); });
      });

      // Tutup dengan tombol Escape
      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && menu.classList.contains('is-open')) setOpen(false);
      });

      // Reset ketika kembali ke breakpoint desktop
      window.addEventListener('resize', function () {
        if (window.innerWidth >= 1024 && menu.classList.contains('is-open')) setOpen(false);
      });
    }

    if (header) {
      var onScroll = function () {
        header.classList.toggle('is-scrolled', window.scrollY > 12);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    // Tandai tautan halaman aktif
    var path = window.location.pathname.split('/').pop() || 'index.html';
    $$('[data-nav-link]').forEach(function (link) {
      if (link.getAttribute('href') === path) {
        link.classList.add('is-active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  /* ------------------------------------------------------------------ *
   * 2. Tab interaktif (dashboard showcase, dll.)
   * ------------------------------------------------------------------ */
  function initTabs() {
    $$('[data-tabs]').forEach(function (group) {
      var buttons = $$('[data-tab-btn]', group);
      var panels = $$('[data-tab-panel]', group);
      if (!buttons.length) return;

      var activate = function (key, focus) {
        buttons.forEach(function (btn) {
          var active = btn.getAttribute('data-tab-btn') === key;
          btn.classList.toggle('is-active', active);
          btn.setAttribute('aria-selected', active ? 'true' : 'false');
          btn.setAttribute('tabindex', active ? '0' : '-1');
          if (active && focus) btn.focus();
        });
        panels.forEach(function (panel) {
          var active = panel.getAttribute('data-tab-panel') === key;
          panel.classList.toggle('hidden', !active);
          if (active) {
            panel.classList.remove('tab-enter');
            void panel.offsetWidth; // paksa reflow agar animasi dapat diulang
            panel.classList.add('tab-enter');
          }
        });
      };

      buttons.forEach(function (btn, index) {
        btn.addEventListener('click', function () {
          activate(btn.getAttribute('data-tab-btn'), false);
        });

        // Navigasi keyboard sesuai pola ARIA tablist
        btn.addEventListener('keydown', function (event) {
          var next = null;
          if (event.key === 'ArrowRight') next = buttons[(index + 1) % buttons.length];
          if (event.key === 'ArrowLeft') next = buttons[(index - 1 + buttons.length) % buttons.length];
          if (event.key === 'Home') next = buttons[0];
          if (event.key === 'End') next = buttons[buttons.length - 1];
          if (next) {
            event.preventDefault();
            activate(next.getAttribute('data-tab-btn'), true);
          }
        });
      });

      activate(group.getAttribute('data-tabs-default') || buttons[0].getAttribute('data-tab-btn'), false);
    });
  }

  /* ------------------------------------------------------------------ *
   * 3. Akordion (FAQ)
   * ------------------------------------------------------------------ */
  function initAccordion() {
    $$('[data-accordion]').forEach(function (accordion) {
      var single = accordion.hasAttribute('data-accordion-single');
      var items = $$('[data-accordion-item]', accordion);

      items.forEach(function (item) {
        var trigger = $('[data-accordion-trigger]', item);
        var panel = $('[data-accordion-panel]', item);
        if (!trigger || !panel) return;

        var close = function () {
          item.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
          panel.style.maxHeight = '0px';
        };

        var open = function () {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
          panel.style.maxHeight = panel.scrollHeight + 'px';
        };

        // State awal mengikuti markup
        if (item.classList.contains('is-open')) open(); else close();

        trigger.addEventListener('click', function () {
          var isOpen = item.classList.contains('is-open');
          if (single) {
            items.forEach(function (other) {
              if (other === item) return;
              var otherTrigger = $('[data-accordion-trigger]', other);
              var otherPanel = $('[data-accordion-panel]', other);
              other.classList.remove('is-open');
              if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
              if (otherPanel) otherPanel.style.maxHeight = '0px';
            });
          }
          if (isOpen) close(); else open();
        });

        // Jaga tinggi panel tetap akurat ketika ukuran layar berubah
        window.addEventListener('resize', function () {
          if (item.classList.contains('is-open')) panel.style.maxHeight = panel.scrollHeight + 'px';
        });
      });
    });
  }

  /* ------------------------------------------------------------------ *
   * 4. Validasi form & umpan balik pengiriman
   * ------------------------------------------------------------------ */
  var VALIDATORS = {
    required: function (value) {
      return value.trim().length > 0 || 'Kolom ini wajib diisi.';
    },
    name: function (value) {
      if (!value.trim()) return 'Nama lengkap wajib diisi.';
      if (value.trim().length < 3) return 'Nama minimal 3 karakter.';
      return true;
    },
    company: function (value) {
      if (!value.trim()) return 'Nama bisnis atau instansi wajib diisi.';
      if (value.trim().length < 2) return 'Nama bisnis minimal 2 karakter.';
      return true;
    },
    email: function (value) {
      if (!value.trim()) return 'Alamat email wajib diisi.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())) {
        return 'Format email belum valid, contoh: nama@perusahaan.com';
      }
      return true;
    },
    phone: function (value) {
      var digits = value.replace(/[^0-9]/g, '');
      if (!digits) return 'Nomor WhatsApp wajib diisi.';
      if (!/^(\+?62|0)[0-9\s\-().]{7,18}$/.test(value.trim())) {
        return 'Gunakan format nomor Indonesia, contoh: 0812xxxxxxxx.';
      }
      if (digits.length < 9 || digits.length > 15) return 'Nomor WhatsApp harus 9-15 digit.';
      return true;
    },
    select: function (value) {
      return value ? true : 'Silakan pilih salah satu opsi.';
    },
    optional: function () {
      return true;
    }
  };

  function fieldError(field) {
    return document.querySelector('[data-error-for="' + field.name + '"]');
  }

  function showFieldState(field, message) {
    var box = fieldError(field);
    var invalid = typeof message === 'string';
    field.classList.toggle('is-invalid', invalid);
    field.classList.toggle('is-valid', !invalid && field.value.trim().length > 0);
    field.setAttribute('aria-invalid', invalid ? 'true' : 'false');
    if (box) {
      box.textContent = invalid ? message : '';
      box.classList.toggle('hidden', !invalid);
    }
    return !invalid;
  }

  function validateField(field) {
    var rule = field.getAttribute('data-validate') || 'optional';
    var validator = VALIDATORS[rule] || VALIDATORS.optional;
    var result = validator(field.value);
    return showFieldState(field, result === true ? null : result);
  }

  function updateCounter(field) {
    var counter = document.querySelector('[data-counter-for="' + field.name + '"]');
    if (!counter) return;
    var max = field.getAttribute('maxlength') || 500;
    counter.textContent = field.value.length + ' / ' + max;
  }

  function initForms() {
    $$('[data-validate-form]').forEach(function (form) {
      var fields = $$('[data-validate]', form);
      var status = $('[data-form-status]', form) || $('[data-form-status]');
      var submitBtn = $('[type="submit"]', form);
      var successPanel = $('[data-form-success]');

      fields.forEach(function (field) {
        field.addEventListener('blur', function () { validateField(field); });
        field.addEventListener('input', function () {
          // Validasi live hanya setelah kolom sempat ditandai salah
          if (field.classList.contains('is-invalid')) validateField(field);
          if (field.hasAttribute('data-counter')) updateCounter(field);
        });
        field.addEventListener('change', function () {
          if (field.tagName === 'SELECT') validateField(field);
        });
        if (field.hasAttribute('data-counter')) updateCounter(field);
      });

      form.addEventListener('submit', function (event) {
        event.preventDefault();

        var firstInvalid = null;
        fields.forEach(function (field) {
          if (!validateField(field) && !firstInvalid) firstInvalid = field;
        });

        if (firstInvalid) {
          if (status) {
            status.textContent = 'Beberapa isian belum lengkap. Mohon periksa kembali kolom yang ditandai merah.';
            status.className = 'form-status form-status--error';
          }
          firstInvalid.focus();
          firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
          return;
        }

        // Simulasi pengiriman - siap diganti endpoint Formspree / EmailJS
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.dataset.label = submitBtn.innerHTML;
          submitBtn.innerHTML = '<span class="spinner" aria-hidden="true"></span> Mengirim permintaan...';
        }
        if (status) {
          status.textContent = 'Mengirim data Anda ke tim konsultan AkunPro...';
          status.className = 'form-status form-status--pending';
        }

        var nameField = form.querySelector('[name="nama"]');
        var name = nameField ? nameField.value : 'Bapak/Ibu';

        window.setTimeout(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = submitBtn.dataset.label;
          }
          if (status) {
            status.textContent = '';
            status.className = 'form-status hidden';
          }

          if (successPanel) {
            var nameSlot = $('[data-success-name]', successPanel);
            if (nameSlot) nameSlot.textContent = name.split(' ')[0];
            var waBtn = $('[data-success-wa]', successPanel);
            if (waBtn) {
              waBtn.setAttribute('href', waLink('Halo AkunPro, saya ' + name +
                ' baru saja mengirim permintaan demo lewat website. Mohon dibantu penjadwalannya.'));
            }
            form.classList.add('hidden');
            successPanel.classList.remove('hidden');
            successPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }

          form.reset();
          fields.forEach(function (field) {
            field.classList.remove('is-valid', 'is-invalid');
            var box = fieldError(field);
            if (box) { box.textContent = ''; box.classList.add('hidden'); }
            if (field.hasAttribute('data-counter')) updateCounter(field);
          });
        }, 1200);
      });

      var resetBtn = $('[data-form-reset]');
      if (resetBtn && successPanel) {
        resetBtn.addEventListener('click', function () {
          successPanel.classList.add('hidden');
          form.classList.remove('hidden');
          form.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      }
    });

    // Form newsletter ringkas (footer / blog)
    $$('[data-newsletter]').forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var input = $('input[type="email"]', form);
        var note = $('[data-newsletter-note]', form);
        var value = input ? input.value.trim() : '';
        var valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
        if (note) {
          note.textContent = valid
            ? 'Terima kasih! Tips akuntansi mingguan akan dikirim ke ' + value + '.'
            : 'Mohon masukkan alamat email yang valid.';
          note.className = valid ? 'mt-2 text-sm text-accent-300' : 'mt-2 text-sm text-rose-300';
        }
        if (valid) form.reset();
      });
    });
  }

  /* ------------------------------------------------------------------ *
   * 5. Floating WhatsApp
   * ------------------------------------------------------------------ */
  function initWhatsApp() {
    // Lengkapi seluruh tautan WhatsApp di halaman (juga di luar widget)
    $$('[data-wa-link]').forEach(function (link) {
      link.setAttribute('href', waLink(link.getAttribute('data-wa-text')));
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener');
    });

    var root = $('[data-wa-widget]');
    if (!root) return;

    var toggle = $('[data-wa-toggle]', root);
    var panel = $('[data-wa-panel]', root);
    var bubble = $('[data-wa-bubble]', root);
    if (!toggle || !panel) return;

    var setOpen = function (open) {
      panel.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      root.classList.toggle('is-open', open);
      if (open && bubble) bubble.classList.add('hidden');
    };

    toggle.addEventListener('click', function (event) {
      event.stopPropagation();
      setOpen(!panel.classList.contains('is-open'));
    });

    var closeBtn = $('[data-wa-close]', root);
    if (closeBtn) closeBtn.addEventListener('click', function () { setOpen(false); });

    document.addEventListener('click', function (event) {
      if (!root.contains(event.target)) setOpen(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setOpen(false);
    });

    // Sapaan otomatis, satu kali per sesi
    if (bubble && !sessionStorage.getItem('akunpro-wa-greeted')) {
      window.setTimeout(function () {
        bubble.classList.remove('hidden');
        sessionStorage.setItem('akunpro-wa-greeted', '1');
        window.setTimeout(function () { bubble.classList.add('hidden'); }, 9000);
      }, 4500);
    }
  }

  /* ------------------------------------------------------------------ *
   * 6. Reveal on scroll + penghitung angka
   * ------------------------------------------------------------------ */
  function formatNumber(value, el) {
    var decimals = parseInt(el.getAttribute('data-count-decimals') || '0', 10);
    return value.toLocaleString('id-ID', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  }

  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count-to'));
    var duration = parseInt(el.getAttribute('data-count-duration') || '1400', 10);
    var start = performance.now();

    var step = function (now) {
      var progress = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      el.textContent = formatNumber(target * eased, el);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = formatNumber(target, el);
    };
    requestAnimationFrame(step);
  }

  function initReveal() {
    var items = $$('[data-reveal]');
    var counters = $$('[data-count-to]');
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce || !('IntersectionObserver' in window)) {
      items.forEach(function (item) { item.classList.add('is-visible'); });
      counters.forEach(function (el) {
        el.textContent = formatNumber(parseFloat(el.getAttribute('data-count-to')), el);
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
        window.setTimeout(function () { el.classList.add('is-visible'); }, delay);
        observer.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    items.forEach(function (item) { observer.observe(item); });

    if (counters.length) {
      var counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          animateCount(entry.target);
          counterObserver.unobserve(entry.target);
        });
      }, { threshold: 0.4 });
      counters.forEach(function (counter) { counterObserver.observe(counter); });
    }
  }

  /* ------------------------------------------------------------------ *
   * 7. Blog - pencarian, filter kategori, modal artikel
   * ------------------------------------------------------------------ */
  function initArticleModal() {
    var modal = $('[data-article-modal]');
    if (!modal) return;

    var body = $('[data-modal-body]', modal);
    var titleSlot = $('[data-modal-title]', modal);
    var metaSlot = $('[data-modal-meta]', modal);
    var categorySlot = $('[data-modal-category]', modal);
    var shareWa = $('[data-modal-share-wa]', modal);
    var lastFocused = null;

    var close = function () {
      modal.classList.remove('is-open');
      document.body.classList.remove('overflow-hidden');
      window.setTimeout(function () { modal.classList.add('hidden'); }, 200);
      if (lastFocused) lastFocused.focus();
    };

    var open = function (trigger) {
      var card = trigger.closest('[data-article-card]');
      if (!card) return;
      var template = $('template[data-article-body]', card);

      if (titleSlot) titleSlot.textContent = card.getAttribute('data-title') || '';
      if (metaSlot) metaSlot.textContent = card.getAttribute('data-meta') || '';
      if (categorySlot) categorySlot.textContent = card.getAttribute('data-category-label') || '';
      if (body) {
        body.innerHTML = '';
        if (template) body.appendChild(template.content.cloneNode(true));
        body.scrollTop = 0;
      }
      if (shareWa) {
        shareWa.setAttribute('href', 'https://wa.me/?text=' + encodeURIComponent(
          (card.getAttribute('data-title') || 'Artikel AkunPro') +
          ' - baca selengkapnya di blog AkunPro: ' + window.location.href
        ));
      }

      lastFocused = trigger;
      modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
      window.requestAnimationFrame(function () { modal.classList.add('is-open'); });
      var closeBtn = $('[data-modal-close]', modal);
      if (closeBtn) closeBtn.focus();
    };

    $$('[data-article-open]').forEach(function (trigger) {
      trigger.addEventListener('click', function (event) {
        event.preventDefault();
        open(trigger);
      });
    });

    $$('[data-modal-close]', modal).forEach(function (btn) {
      btn.addEventListener('click', close);
    });

    modal.addEventListener('click', function (event) {
      if (event.target === modal || event.target.hasAttribute('data-modal-overlay')) close();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !modal.classList.contains('hidden')) close();
    });
  }

  function initBlog() {
    var list = $('[data-blog-list]');
    if (!list) {
      initArticleModal();
      return;
    }

    var cards = $$('[data-article-card]', list);
    var pills = $$('[data-filter]');
    var search = $('[data-blog-search]');
    var empty = $('[data-blog-empty]');
    var countLabel = $('[data-blog-count]');
    var activeFilter = 'semua';

    var apply = function () {
      var term = (search ? search.value : '').trim().toLowerCase();
      var visible = 0;

      cards.forEach(function (card) {
        var matchCategory = activeFilter === 'semua' || card.getAttribute('data-category') === activeFilter;
        var haystack = ((card.getAttribute('data-keywords') || '') + ' ' + card.textContent).toLowerCase();
        var matchTerm = !term || haystack.indexOf(term) !== -1;
        var show = matchCategory && matchTerm;
        card.classList.toggle('hidden', !show);
        if (show) visible++;
      });

      if (empty) empty.classList.toggle('hidden', visible > 0);
      if (countLabel) {
        countLabel.textContent = visible === cards.length
          ? 'Menampilkan seluruh ' + cards.length + ' artikel'
          : 'Menampilkan ' + visible + ' dari ' + cards.length + ' artikel';
      }
    };

    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        activeFilter = pill.getAttribute('data-filter');
        pills.forEach(function (other) {
          var active = other === pill;
          other.classList.toggle('is-active', active);
          other.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        apply();
      });
    });

    if (search) {
      search.addEventListener('input', apply);
      search.addEventListener('search', apply);
    }

    var clear = $('[data-blog-clear]');
    if (clear) {
      clear.addEventListener('click', function () {
        if (search) search.value = '';
        activeFilter = 'semua';
        pills.forEach(function (other) {
          var active = other.getAttribute('data-filter') === 'semua';
          other.classList.toggle('is-active', active);
          other.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        apply();
        if (search) search.focus();
      });
    }

    apply();
    initArticleModal();
  }

  /* ------------------------------------------------------------------ *
   * 8. Utilitas kecil
   * ------------------------------------------------------------------ */
  function initMisc() {
    // Tahun berjalan pada footer
    $$('[data-current-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });

    // Smooth scroll untuk anchor internal, dengan offset navbar sticky
    $$('a[href^="#"]').forEach(function (link) {
      var id = link.getAttribute('href');
      if (!id || id.length < 2) return;
      link.addEventListener('click', function (event) {
        var target = document.getElementById(id.slice(1));
        if (!target) return;
        event.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 88,
          behavior: 'smooth'
        });
      });
    });

    // Toggle harga bulanan / tahunan pada matriks paket
    var billing = $('[data-billing-toggle]');
    if (billing) {
      billing.addEventListener('change', function () {
        var yearly = billing.checked;
        $$('[data-price-monthly]').forEach(function (el) { el.classList.toggle('hidden', yearly); });
        $$('[data-price-yearly]').forEach(function (el) { el.classList.toggle('hidden', !yearly); });
        var note = $('[data-billing-note]');
        if (note) {
          note.textContent = yearly
            ? 'Hemat 2 bulan dengan pembayaran tahunan.'
            : 'Tagihan bulanan, dapat dibatalkan kapan saja.';
        }
      });
    }
  }

  /* ------------------------------------------------------------------ *
   * Bootstrap
   * ------------------------------------------------------------------ */
  function boot() {
    initNavbar();
    initTabs();
    initAccordion();
    initForms();
    initWhatsApp();
    initReveal();
    initBlog();
    initMisc();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
