# SimpleClientValidation

This is a simple client validation i.e. with given messages the user will get simple notice about the input fields.
This gem is build for the simple_form, so please make sure to add this line to your application's Gemfile:
```ruby
gem 'simple_form'
```
and check the documentation for the installation instructions:
[simple_form](https://github.com/plataformatec/simple_form)

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'simple_client_validation'
```

And then execute:

    $ bundle install

## Usage

Because this gem uses font-awesome, make sure to add this line in your `application.css` if you haven't already

```css
/*
 *= require font-awesome
 */
```
and after that add the simple_client_validation styles
```css
/*
 *= require simple_client_validation
 */
```
Require simple_client_validation Javascripts in `application.js`:

```js
//= require simple_client_validation
```
Then restart your webserver if it was previously running.

Because this gem is built for
```ruby
gem 'simple_form'
```
add error messages for the input field you need to add:
```ruby
input_html: { message: "Your message here" }
```
and it should look like this:
```ruby
f.input :email, label: 'Email', input_html: { message: "Your message here" }
```
or if you use I18n gem
```ruby
f.input :email, label: t('Email'), input_html: { message: t("YourMessageHere") }
```

## Development

After checking out the repo, run `bin/setup` to install dependencies. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/bobpetar/simple_client_validation.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
