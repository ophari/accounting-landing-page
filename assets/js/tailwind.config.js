/*!
 * AkunPro - konfigurasi Tailwind Play CDN.
 * Dimuat tepat setelah <script src="https://cdn.tailwindcss.com"></script>
 * sehingga seluruh halaman memakai token desain yang sama.
 */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        /* Navy korporat - warna utama brand */
        navy: {
          50: '#eef4fb',
          100: '#d9e5f5',
          200: '#b6cbea',
          300: '#85a7d9',
          400: '#4f7dc2',
          500: '#2f5da6',
          600: '#234a89',
          700: '#1d3b6e',
          800: '#172e56',
          900: '#122443',
          950: '#0a1730'
        },
        /* Hijau segar - warna aksen & konversi */
        accent: {
          50: '#ecfdf4',
          100: '#d1fae3',
          200: '#a6f2cb',
          300: '#6ee7ad',
          400: '#34d18b',
          500: '#12b76a',
          600: '#059355',
          700: '#047545',
          800: '#065c39',
          900: '#054c31',
          950: '#012a1b'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
      },
      boxShadow: {
        soft: '0 1px 2px rgba(10, 23, 48, .04), 0 8px 24px -12px rgba(10, 23, 48, .12)',
        card: '0 1px 3px rgba(10, 23, 48, .06), 0 18px 40px -24px rgba(10, 23, 48, .25)',
        lift: '0 2px 6px rgba(10, 23, 48, .06), 0 30px 60px -28px rgba(10, 23, 48, .35)',
        glow: '0 20px 50px -20px rgba(18, 183, 106, .55)'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      maxWidth: {
        prose: '68ch'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'grow-bar': {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' }
        }
      },
      animation: {
        'fade-up': 'fade-up .5s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'grow-bar': 'grow-bar .8s cubic-bezier(.16,1,.3,1) both'
      }
    }
  }
};
