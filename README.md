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
    var yo = new yoAPI('YOUR_YO_API_KEY');
}
```

Now you can send a Yo to everyone with one line on the server side:

```
yo.all()
```

Or send a Yo to one person:

```
yo.one('paulm')
```

To send a Yo from an action on the client side, set up a `Meteor.method` on the server side of the Meteor app:

```
Meteor.methods({
    yoAll: function(){
        return yo.all()
    },
    yoOne: function(user){
        return yo.one(user)
    }
});
```

Then call the Yo API method from someplace on the client side:

```
Meteor.call('yoAll');
```

or

```
Meteor.call('yoOne', username, function(error, result){
    if(!err){
        console.log(result)
    }
});
```

## More Info

For more information on the Yo API, [check out this post on Medium](https://medium.com/@YoAppStatus/yo-developers-api-e7f2f0ec5c3c).

-----------

License: MIT
Author: Paul Molluzzo
©2014