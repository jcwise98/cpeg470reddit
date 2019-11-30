  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBBj93-0ZUhkz31nT8u-lGD9982zP0Tf1Y",
    authDomain: "cpeg470-reddit.firebaseapp.com",
    databaseURL: "https://cpeg470-reddit.firebaseio.com",
    projectId: "cpeg470-reddit",
    storageBucket: "cpeg470-reddit.appspot.com",
    messagingSenderId: "530492936109",
    appId: "1:530492936109:web:cfeb7b01d2240ae48c1b24"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let displayPosts = function(post) {
    $('#post').html(post);
  }

  firebase.database().reg("posts").on("post1", function(snapshot) {
    let data = snapshot.val();
    displayPosts(data);
  });