document.addEventListener("DOMContentLoaded", function(event) {
    updateFavIcon();
    // kc-form element:
    const kcForm = document.getElementById('kc-form');
    // kc-info element:
    const kcInfo = document.getElementById('kc-info');

    // Hide kc login form:
    // kc-form -> kc-form-wrapper -> kc-form-login(hide) & kc-update-profile-form(keep)
    const kcLoginForm = document.getElementById('kc-form-login');
    if (kcLoginForm != null) {
      kcForm.classList.add('hidden');
    }

    // swap the order of form:
    if (kcForm && kcInfo) {
      swapElements(kcForm, kcInfo);
    }
});

function updateFavIcon() {
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = 'https://portal.nrs.gov.bc.ca/nrs-portal-theme/images/favicon.ico';
  document.getElementsByTagName('head')[0].appendChild(link);
};

function swapElements(obj1, obj2) {
  // save the location of obj2
  var parent2 = obj2.parentNode;
  var next2 = obj2.nextSibling;
  // special case for obj1 is the next sibling of obj2
  if (next2 === obj1) {
      // just put obj1 before obj2
      parent2.insertBefore(obj1, obj2);
  } else {
      // insert obj2 right before obj1
      obj1.parentNode.insertBefore(obj2, obj1);

      // now insert obj1 where obj2 was
      if (next2) {
          // if there was an element after obj2, then insert obj1 right before that
          parent2.insertBefore(obj1, next2);
      } else {
          // otherwise, just append as last child
          parent2.appendChild(obj1);
      }
  }
}
