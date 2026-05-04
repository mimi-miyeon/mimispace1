export async function applyTranslations(lang) {
  try {
    const response = await fetch(`./data/i18n/${lang}.json`);
    if (!response.ok) throw new Error('Failed to load translations');
    const t = await response.json();

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] != null) el.innerHTML = t[key];
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const [attr, key] = el.dataset.i18nAttr.split(':');
      if (t[key] != null) el.setAttribute(attr, t[key]);
    });

    document.documentElement.lang = lang;
  } catch (error) {
    console.error('Error applying translations:', error);
  }
}
