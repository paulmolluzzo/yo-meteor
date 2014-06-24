# Yo API Package for Meteor

This is a very simple package to wrap the [Yo API service](http://yoapi.justyo.co) for use in a Meteor project.

## Install

To install in a new project:

```
mrt add yo-meteor
```

To update an existing project:

```
mrt update yo-meteor
```

This package requires the HTTP package from Meteor, so if you're not using that package already, go ahead and install that with:

```
meteor add http
```

## How to Use

Define the Yo API on the _server side_ of the Meteor app:

```
if (Meteor.isServer) {
    var sayYo = new yoAPI( YOUR_API_TOKEN );
}
```

Then call the Yo API method from someplace in the app:

```
sayYo.yoall();
```

## More Info

For more information on the Yo API, [check out this post on Medium](https://medium.com/@YoAppStatus/yo-developers-api-e7f2f0ec5c3c).

-----------

License: MIT
Author: Paul Molluzzo
©2014