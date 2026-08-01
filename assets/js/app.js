/* Divinityx Publishing Company — production identity bootstrap. */
(function () {
  const head = document.head;
  const root = document.baseURI;
  const absolute = (path) => new URL(path, root).href;

  if (!head.querySelector('link[data-dpc-brand-lock]')) {
    const brandStyles = document.createElement('link');
    brandStyles.rel = 'stylesheet';
    brandStyles.href = absolute('assets/css/brand-identity.css');
    brandStyles.dataset.dpcBrandLock = 'true';
    head.appendChild(brandStyles);
  }

  const declarations = [
    ['link', { rel: 'icon', type: 'image/webp', href: absolute('assets/brand/divinityx-publishing-crest-gold.webp') }],
    ['link', { rel: 'apple-touch-icon', href: absolute('assets/brand/divinityx-publishing-crest-gold.webp') }],
    ['link', { rel: 'manifest', href: absolute('assets/brand/site.webmanifest') }],
    ['meta', { name: 'description', content: 'Divinityx Publishing Company develops books, authors, research, and enduring intellectual property with disciplined editorial stewardship and long-term catalog value.' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Divinityx Publishing Company' }],
    ['meta', { property: 'og:title', content: document.title || 'Divinityx Publishing Company' }],
    ['meta', { property: 'og:description', content: 'Books, ideas, and legacies built to outlive the moment.' }],
    ['meta', { property: 'og:url', content: location.href }],
    ['meta', { property: 'og:image', content: absolute('assets/brand/divinityx-publishing-crest-gold.webp') }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: document.title || 'Divinityx Publishing Company' }],
    ['meta', { name: 'twitter:description', content: 'Books, ideas, and legacies built to outlive the moment.' }],
    ['meta', { name: 'twitter:image', content: absolute('assets/brand/divinityx-publishing-crest-gold.webp') }]
  ];

  declarations.forEach(([tag, attrs]) => {
    const selector = attrs.rel
      ? `${tag}[rel="${attrs.rel}"]`
      : attrs.name
        ? `${tag}[name="${attrs.name}"]`
        : `${tag}[property="${attrs.property}"]`;
    if (head.querySelector(selector)) return;
    const node = document.createElement(tag);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
    head.appendChild(node);
  });

  if (!head.querySelector('link[rel="canonical"]')) {
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = `https://divinityxpublishing.com${location.pathname}`;
    head.appendChild(canonical);
  }

  if (!head.querySelector('script[data-dpc-organization-schema]')) {
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.dataset.dpcOrganizationSchema = 'true';
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Divinityx Publishing Company',
      url: 'https://divinityxpublishing.com/',
      logo: 'https://divinityxpublishing.com/assets/brand/divinityx-publishing-crest-gold.webp',
      parentOrganization: { '@type': 'Organization', name: 'Divinityx Enterprises LLC' },
      email: 'accounting@divinityxenterprises.com',
      telephone: '+1-502-270-8828'
    });
    head.appendChild(schema);
  }

  const application = document.createElement('script');
  application.src = absolute('assets/js/app-core.js');
  application.async = false;
  application.dataset.dpcApplicationCore = 'true';
  document.body.appendChild(application);
})();