const clouds = [
  { name: "Google Drive", url: "https://drive.google.com",      icon: "icons/google-drive.png" },
  { name: "OneDrive",     url: "https://onedrive.live.com",      icon: "icons/onedrive.png"     },
  { name: "iCloud",       url: "https://www.icloud.com",         icon: "icons/icloud.png"       },
  { name: "Dropbox",      url: "https://www.dropbox.com",        icon: "icons/dropbox.png"      },
  { name: "Box",          url: "https://www.box.com",            icon: "icons/box.png"          },
  { name: "MEGA",         url: "https://mega.nz",                icon: "icons/mega.png"         },
  { name: "Amazon S3",    url: "https://aws.amazon.com/s3",      icon: "icons/aws-s3.png"       },
  { name: "MediaFire",    url: "https://www.mediafire.com",      icon: "icons/mediafire.png"    },
  { name: "pCloud",       url: "https://www.pcloud.com",         icon: "icons/pcloud.png"       },
  { name: "Sync.com",     url: "https://www.sync.com",           icon: "icons/sync.png"         }
];

const cloudList = document.getElementById('cloud-list');

clouds.forEach(cloud => {
    const cloudItem = document.createElement('a');
    cloudItem.href = cloud.url;
    cloudItem.target = '_blank';
    cloudItem.classList.add('cloud-item');

    const icon = document.createElement('img');
    icon.src = cloud.icon;
    icon.alt = `${cloud.name} icon`;

    const name = document.createElement('span');
    name.textContent = cloud.name;

    cloudItem.appendChild(icon);
    cloudItem.appendChild(name);
    cloudList.appendChild(cloudItem);
});
