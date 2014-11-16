if (Meteor.isClient) {
  // You can override the momentum animation
  // Session.setDefault('overlay-animation','right-to-left');

  Session.setDefault("counter", 0);
  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click .js-overlay-open': function () {
      Overlay.show('hello');

      // Overlay.show('hello',{closeable: false, title:'prova'});

      // setTimeout(function () {
      //   Overlay.hide();
      // }, 3000);
    },
    'click .js-count': function () {
      Session.set("counter", Session.get("counter") + 1);
    }
  });


}

if (Meteor.isServer) {
}
