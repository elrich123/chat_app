App.chat = App.cable.subscriptions.create("ChatChannel", {
  connected: function () {
    console.log("hiya, it ran");
  },
  disconnected: function () {
    console.log("hiya, it ran");
  },
  received: function (data) {
    var messages = $('#chatbox');
    messages.append(data['message']);
    messages.scrollTop($('#chatbox')[0].scrollHeight);
  }
})
