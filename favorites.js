// ===== SOMAPO お気に入り機能（localStorage） =====
// データ形式: ["cat:idx", "cat:idx", ...]
const FAV_KEY = 'somapo_favorites';

function favLoad() {
  try {
    const raw = localStorage.getItem(FAV_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}
function favSave(arr) {
  try { localStorage.setItem(FAV_KEY, JSON.stringify(arr)); } catch (e) {}
}
function favKey(cat, idx) { return `${cat}:${idx}`; }
function favHas(cat, idx) { return favLoad().includes(favKey(cat, idx)); }
function favToggle(cat, idx) {
  const key = favKey(cat, idx);
  const list = favLoad();
  const i = list.indexOf(key);
  if (i >= 0) { list.splice(i, 1); favSave(list); return false; }
  list.push(key); favSave(list); return true;
}
function favAll() {
  return favLoad().map(k => {
    const [cat, idx] = k.split(':');
    return { cat, idx: parseInt(idx, 10) };
  });
}
window.FAV = { load: favLoad, save: favSave, has: favHas, toggle: favToggle, all: favAll };
