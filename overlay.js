Template.overlay.helpers({
    animation: function (argument) {
        return Session.get('overlay-animation') || 'left-to-right';
    },
    data:function () {
      return Session.get('overlay-data');
    },
    overlayVisible: function() {
      return Session.get('overlay-visible');
    },
    currentOverlay: function (argument) {
      return Session.get('overlay');
    }
});

Template.overlay.events({
    'click .js-overlay-close':function () {
      Overlay.hide();
    }
});


// API
Overlay = {
    show: function (template, data) {
        console.log(data);
      var data = data || {};
      if (data.closeable === undefined) data.closeable = true;
      _.extend(data, {isInOverlay:true});
      Session.set('overlay-data', data);
      Session.set('overlay', template);
      Session.set('overlay-animation', data.animation);
      Session.set('overlay-visible', true);
    },
    hide: function () {
      Session.set('overlay-visible', false);
    }
}
