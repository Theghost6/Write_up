import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Security Notes',
  description: 'Cybersecurity Research, PortSwigger Web Security Academy & CTF Write-ups',
  base: '/Write_up/',
  cleanUrls: true,
  appearance: 'dark',

  head: [
    ['meta', { name: 'theme-color', content: '#0ea5e9' }]
  ],

  themeConfig: {
    siteTitle: 'Security Notes',

    search: {
      provider: 'local',
      options: {
        placeholder: 'Tìm kiếm write-up, payload, CVE...'
      }
    },

    nav: [
      { text: 'Trang tổng quan', link: '/' },
      { text: 'CTF (6)', link: '/CTF/Warmup' },
      { text: 'PortSwigger (17)', link: '/Portswigger/Authentication/2FA broken logic' },
      { text: 'GitHub', link: 'https://github.com/Theghost6/Write_up' }
    ],

    sidebar: [
      {
        text: 'BẮT ĐẦU',
        items: [
          { text: 'Tổng quan kho tài liệu', link: '/' }
        ]
      },
      {
        text: 'CTF CHALLENGES (6)',
        collapsed: false,
        items: [
          { text: 'Warmup — IDOR & SSRF Chain', link: '/CTF/Warmup' },
          { text: 'Vulnerable Bank — Stored XSS & PIN', link: '/CTF/Vulnerable Bank' },
          { text: 'Tháp Khởi Nguyên — Crypto & Game', link: '/CTF/THAP KHOI NGUYEN' },
          { text: 'NovaMart — Race Condition Coupon', link: '/CTF/NovaMart' },
          { text: 'CV tiềm năng — Malicious Macro', link: '/CTF/CV tiem nang' },
          { text: 'Ex-lover chat — Steganography QR', link: '/CTF/Ex-lover chat' }
        ]
      },
      {
        text: 'AUTHENTICATION (7)',
        collapsed: false,
        items: [
          { text: '2FA Broken Logic', link: '/Portswigger/Authentication/2FA broken logic' },
          { text: '2FA Bypass via Brute-Force', link: '/Portswigger/Authentication/2FA bypass using a brute-force attack' },
          { text: 'Brute-Forcing Stay-Logged-In Cookie', link: '/Portswigger/Authentication/Brute-forcing a stay-logged-in cookie' },
          { text: 'Offline Password Cracking', link: '/Portswigger/Authentication/Offline password cracking' },
          { text: 'Password Brute-Force via Password Change', link: '/Portswigger/Authentication/Password brute-force via password change' },
          { text: 'Password Reset Broken Logic', link: '/Portswigger/Authentication/Password reset broken logic' },
          { text: 'Password Reset Poisoning via Middleware', link: '/Portswigger/Authentication/Password reset poisoning via middleware' }
        ]
      },
      {
        text: 'PATH TRAVERSAL (6)',
        collapsed: false,
        items: [
          { text: 'Simple Case', link: '/Portswigger/Path traversal/File path traversal, simple case' },
          { text: 'Absolute Path Bypass', link: '/Portswigger/Path traversal/File path traversal, traversal sequences blocked with absolute path bypass' },
          { text: 'Non-Recursive Sequence Stripping', link: '/Portswigger/Path traversal/File path traversal, traversal sequences stripped non-recursively' },
          { text: 'Superfluous URL-Decode Bypass', link: '/Portswigger/Path traversal/File path traversal, traversal sequences stripped with superfluous URL-decode' },
          { text: 'Null Byte Bypass Validation', link: '/Portswigger/Path traversal/File path traversal, validation of file extension with null byte bypas' },
          { text: 'Start of Path Validation', link: '/Portswigger/Path traversal/File path traversal, validation of start of path' }
        ]
      },
      {
        text: 'JSON WEB TOKEN (2)',
        collapsed: false,
        items: [
          { text: 'Flawed Signature Verification', link: '/Portswigger/JWT/JWT authentication bypass via flawed signature verification' },
          { text: 'Unverified Signature Bypass', link: '/Portswigger/JWT/JWT authentication bypass via unverified signature' }
        ]
      },
      {
        text: 'WEB CACHE POISONING (2)',
        collapsed: false,
        items: [
          { text: 'Unkeyed Cookie Exploitation', link: '/Portswigger/Web Cache Poisoning/Web cache poisoning with an unkeyed cookie' },
          { text: 'Unkeyed Header Exploitation', link: '/Portswigger/Web Cache Poisoning/Web cache poisoning with an unkeyed header' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Theghost6/Write_up' }
    ],

    footer: {
      message: 'Security Notes & CTF Technical Write-ups.',
      copyright: 'Copyright © 2025-2026'
    },

    docFooter: {
      prev: 'Bài trước',
      next: 'Bài tiếp theo'
    },

    outline: {
      label: 'Mục lục trang này',
      level: [2, 3]
    }
  }
})
