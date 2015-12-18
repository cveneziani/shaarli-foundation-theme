document.body.onload = function(){
  // Add Link
  if (document.addform && document.addform.post) {
    document.addform.post.focus();
  }

  // Change password
  if (document.changepasswordform && document.changepasswordform.oldpassword) {
    document.changepasswordform.oldpassword.focus();
  }

  // Change tag
   if (document.changetag && document.changetag.fromtag) {
    document.changetag.fromtag.focus();
  }

  var deletionTag = document.getElementsByClassName('m-deletion-tag--button');
  if (deletionTag.length) {
    deletionTag[0].onclick = function(event){
      return confirmDeleteTag(event);
    }
  }

  // Edit link
  if (document.linkform) {
    if (document.linkform.lf_title) {
      document.linkform.lf_title.focus();
    }
    else if (document.linkform.lf_description) {
      document.linkform.lf_description.focus();
    }
    else {
      document.linkform.lf_tags.focus();
    }
  }

  var deletionLink = document.getElementsByClassName('m-deletion-link--button');
  if (deletionLink.length) {
    deletionLink[0].onclick = function(event){
      return confirmDeleteLink(event);
    }
  }

  // Import
  if (document.uploadform && document.uploadform.filetoupload) {
    document.uploadform.filetoupload.focus();
  }

  // Install
  if (document.installform && document.installform.setlogin) {
    document.installform.setlogin.focus();
  }

  // Linklist
  var perPageSelect = document.getElementsByClassName('m-pagination--per-page');
  if (perPageSelect.length) {
    perPageSelect[0].onchange = function(event){
      return changePageSize(perPageSelect);
    }
  }

  // Login
  if (document.loginform && document.loginform.login) {
    document.loginform.login.focus();
  }

  // Tools
  var shaareLink = document.getElementsByClassName('m-tools--shaare-link');
  if (shaareLink.length) {
    shaareLink[0].onclick = function(event){
      event.preventDefault();
      alert('Drag this link to your bookmarks toolbar, or right-click it and choose Bookmark This Link...');
      return false;
    }
  }
}

jQuery(document).ready(function($) {
  $(document).foundation();
});

changePageSize = function(perPageSelect){
  var page_size = perPageSelect.value;
  if (page_size.length > 0) {
    document.location.href = '?linksperpage=' + page_size;
  }
}

confirmDeleteLink = function(event) {
  var agree = confirm("Are you sure you want to delete this link ?");
  if (agree) {
    return true;
  }
  else {
    event.preventDefault();
    return false;
  }
}

confirmDeleteTag = function(event) {
  var agree = confirm("Are you sure you want to delete this tag from all links ?");

  if (agree == true) {
    return true;
  } else {
    event.preventDefault();
    return false;
  }
}
