# Review

Reflections on Norman: perfect! (Does that help, reflectively? :-)

Nice work on the IA feedback. Remember that PACE layers aren't limited to that one model (fashion, etc.). *Any* system with parts that change at different rates can be modeled with PACE layering.

Excellent feedback on IxD as well, including affordances. My favorite bad affordance is the pull bar on doors that require you to push. Very common! You'll start noticing it everywhere if you look. Hadn't noticed the elevator/loo connection, but now I'll look for it. :-)

URLs: good. On the form, what made you use the placeholder "First name" instead of "Given name". This is an interesting situation, and any option is a compromise. You'll notice that we used "given" and "family" rather than "first" and "last". Any idea why?

For most Westerners, first and last are much more commonly used. Some young folks might not even know what a "given" name is! But calling them first and last is biased towards the West, where the family name is generally the last name. In many countries in the East, however, the family name comes *first*. This causes a lot of problems in the U.S., for example, where many Asian students discover that their universities have their names reversed. Oops.

So how to compromise? Well, one way might be to use the placeholder as you have, but that just adds to the confusion for people who put family name first. Which is it? Given or family? A better idea might be to give examples in the placeholder, but how to avoid bias there? You could do something like `placeholder="e.g., John"` but how many Chinese people are named John? And isn't it sexist, too?

There is no right answer and no perfect way. Knowing your intended audience is the key, but as much as possible we should be sensitive to cultural differences. Perhaps the best solution is to ask why we really need to separate out the names anyway. Why not just one `name` field.

As with much of the work you'll do in P0, the idea is to get you *thinking critically* about the problems and possible solutions. Not to give you a one-size-fits-all solution. We have not perfected the Internet yet! You can still help. :-)

In other form news, you didn't use the validator, did you? **Always** validate! Always validate! (I will. ;-) You have several errors, but it essentially comes down to one error: one error often causes numerous other errors&mdash;this makes debugging fun, as you can often fix one mistake and watch a dozen or more errors disappear!

What's wrong with this?

```html
<form action:"/sign-up" method="post">
```

Whoops! Also, no need for the quotation marks here:

```html
<textarea name="textarea" rows="4" cols="50">""</textarea>
```

Once you fix the `action` error, you'll find that you're missing a closing tag: `</<fieldset>`.

Fix that and there's still one more error. You have a `<label>` with a `for` attribute:

```html
<label for="favouriteColour">Favourite Colour</label>
<select name="favouriteColour">
```

Remember that the `for` points to the `id` attribute, *not* the `name` attribute.

You could have avoided all these errors if you'd used the [validator](https://validator.w3.org/#validate_by_input). Always validate!

The CSS selectors look good. Do you know the difference between `div .classname` and `div.classname`? Just askin'. :-)

On the JS, nice work! The problem you're having with reverse is that you're not giving it what it wants. Look carefully at the [docs](http://ramdajs.com/docs/#reverse). Reverse takes an *array* of elements, not a set of parameters! You're passing in 1, 2, 3, etc. as individual parameters. Wrap them in an array (`[1, 2, 3, 4, 5]`) and it will work just fine.

With programming, it's either perfect or it's broken. Computers are just not smart enough (most of the time) to guess what you meant, though often they can offer suggestions in the error message. They're getting smarter slowly. In the meantime, you really must learn very good *attention to detail*. Little things will drive you up the wall! Better to spend an extra one minute checking carefully than to spend two hours debugging. This is maybe the most painful lesson we developers have to learn. Learn early and spare yourself the pain! :-)

Ping me on Slack if you're still unclear about Ramda. Really nice work there.

Good work on the accessibility and usability. I'm not surprised that the W3C has few issues. They'd better not! That would be embarrassing!

What do you think about using placeholders to add value, rather than to replace or duplicate the label? For example, what if the label were "Street address" and the placholder was "e.g., 123 Elm Street"? There are some bias issues there, but that could be internationalized by putting in different placeholders based on IP address (location).

This is an area of usability that still needs a lot of work (industry-wide).

The job stories look good. On to the site skeleton!

Thanks again for all your effort. Keep it up. You're going to do very well in this course.

