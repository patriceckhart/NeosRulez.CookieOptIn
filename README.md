# Cookie Opt-In for Neos CMS

A package which handles Cookie Opt-In for Neos CMS.


## Installation

The NeosRulez.CookieOptIn package is listed on packagist (https://packagist.org/packages/neosrulez/cookieoptin) - therefore you don't have to include the package in your "repositories" entry any more.

Just run:

```
composer require neosrulez/cookieoptin
```

## Usage

Definition of the cookies used in the json files in all necessary languages.

```yaml
NeosRulez:
  CookieOptIn:
    cookieMetadata: 'resource://NeosRulez.CookieOptIn/Private/Metadata/'
```

## Neos side

Definition of data-attributes `(data-cookie)` in iframe tags and additionally `type="text/plain"` in script tags. It's easy with Fusion.

```html
<iframe data-cookie="bar" width="1116" height="628" cookie-src="https://www.youtube.com/embed/7KUdmFyefSA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<script data-cookie="all" type="text/plain" async src="https://www.googletagmanager.com/gtag/js?id=UA-141147524-30"></script>
<script data-cookie="all" type="text/plain">window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "UA-141147524-30");</script>
```


## Author

* E-Mail: mail@patriceckhart.com
* URL: http://www.patriceckhart.com
