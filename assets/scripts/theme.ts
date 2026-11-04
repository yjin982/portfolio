export const themeScript = `
(function() {
  const getCookie = (name) => {
    const cookie = document.cookie
      .split(';')
      .map((c) => c.trim())
      .find((c) => c.startsWith(name + '='));
    return cookie ? cookie.slice(name.length + 1) : '';
  };
  
  const stored = localStorage.getItem('theme') || getCookie('theme');
  const theme = stored || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
})();
`;
