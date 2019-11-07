navigator.geolocation.getCurrentPosition(
    position => document.write(position.coords.latitude + ", " + position.coords.longitude),
    err => document.write(err.message)
);