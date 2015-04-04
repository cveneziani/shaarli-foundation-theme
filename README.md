# Shaarly Foundation Theme

This is a [Foundation](http://foundation.zurb.com/) Theme for [Shaarli](https://github.com/shaarli/Shaarli).

## Installing

Download the source.

Then, on your web server:
* Create a directory called `foundation-theme`.
* Move the directories from source to `foundation-theme/` directory, on your web server.
* Add or update `data/options.php` file to point template to foundation theme.

### Example of `data/options.php`

```php
<?php
  $GLOBALS['config']['RAINTPL_TPL'] = 'foundation-theme/tpl/';
?
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License

Shaarly Foundation Theme is released under the GPL License.
It also includes:
* [Foundation](http://foundation.zurb.com/) - MIT License
* [Shaarli](https://github.com/shaarli/Shaarli) logo - zlib/libpng License
