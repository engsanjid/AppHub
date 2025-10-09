const KEY = 'installed_apps';

export function getInstalled() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch { return []; }
}

export function saveInstalled(list) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export function isInstalled(id) {
  const list = getInstalled();
  return list.some(a => String(a.id) === String(id));
}

export function installApp(app) {
  const list = getInstalled();
  if (!list.some(a => String(a.id) === String(app.id))) {
    list.push(app);
    saveInstalled(list);
  }
}

export function uninstallApp(id) {
  const list = getInstalled().filter(a => String(a.id) !== String(id));
  saveInstalled(list);
}
