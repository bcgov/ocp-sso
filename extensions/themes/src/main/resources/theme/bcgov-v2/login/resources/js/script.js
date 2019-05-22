document.addEventListener("DOMContentLoaded", function(event) {
    // use gov icon for tab:
    updateFavIcon();
    // extent the login message:
    const errorMsg = document.getElementById('kc-error-message');
    const titleContent = errorMsg ? 'Log In Error:' : 'Log In With<br/>An Identity Provider:'
    document.getElementById('kc-page-title').innerHTML = titleContent;
});

function updateFavIcon() {
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = 'https://portal.nrs.gov.bc.ca/nrs-portal-theme/images/favicon.ico';
  document.getElementsByTagName('head')[0].appendChild(link);
};
