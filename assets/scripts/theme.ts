export const themeScript = `
(function() {
  const getCookie = (name) => {
    const value = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return value ? value.pop() : '';
  };
  
  const stored = localStorage.getItem('theme') || getCookie('theme');
  const theme = stored || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
})();
`;
