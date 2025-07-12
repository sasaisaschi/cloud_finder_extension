// popup.js
'use strict';

// Liste der Top-10 Cloud-Anbieter
const clouds = [
    { name: "Google Drive", url: "https://drive.google.com", icon: "icons/google-drive.png" },
    { name: "OneDrive",     url: "https://onedrive.live.com", icon: "icons/onedrive.png"     },
    { name: "iCloud",       url: "https://www.icloud.com",    icon: "icons/icloud.png"       },
    { name: "Dropbox",      url: "https://www.dropbox.com",  icon: "icons/dropbox.png"      },
    { name: "Box",          url: "https://www.box.com",      icon: "icons/box.png"          },
    { name: "MEGA",         url: "https://mega.nz",          icon: "icons/mega.png"         },
    { name: "Amazon S3",    url: "https://aws.amazon.com/s3", icon: "icons/aws-s3.png"       },
    { name: "MediaFire",    url: "https://www.mediafire.com", icon: "icons/mediafire.png"    },
    { name: "pCloud",       url: "https://www.pcloud.com",   icon: "icons/pcloud.png"       },
    { name: "Sync.com",     url: "https://www.sync.com",     icon: "icons/sync.png"         }
];

/**
 * Rendert die Cloud-Liste ins DOM
 */
function renderCloudList() {
    const listEl = document.getElementById('cloud-list');
    if (!listEl) return;
    // Leere ggf. bestehende Einträge
    listEl.innerHTML = '';

    clouds.forEach(({ name, url, icon }) => {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener';
        link.className = 'cloud-item';

        const img = document.createElement('img');
        img.src = icon;
        img.alt = `${name} icon`;

        const span = document.createElement('span');
        span.textContent = name;

        link.append(img, span);
        listEl.append(link);
    });
}

// Auto-Ausführung beim Laden im Browser/JS-DOM
document.addEventListener('DOMContentLoaded', renderCloudList);

// Für Testumgebungen (z.B. Jest + JSDOM)
if (typeof document !== 'undefined' && document.readyState === 'complete') {
    renderCloudList();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { clouds, renderCloudList };
}