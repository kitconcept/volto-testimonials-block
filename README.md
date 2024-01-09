# Volto Testimonials Block

[![NPM](https://img.shields.io/npm/v/@kitconcept/volto-testimonials-block.svg)](https://www.npmjs.com/package/@kitconcept/volto-testimonials-block)
[![Build Status](https://github.com/kitconcept/volto-testimonials-block/actions/workflows/code.yml/badge.svg)](https://github.com/kitconcept/volto-testimonials-block/actions)
[![Build Status](https://github.com/kitconcept/volto-testimonials-block/actions/workflows/unit.yml/badge.svg)](https://github.com/kitconcept/volto-testimonials-block/actions)
[![Build Status](https://github.com/kitconcept/volto-testimonials-block/actions/workflows/acceptance.yml/badge.svg)](https://github.com/kitconcept/volto-testimonials-block/actions)

<img alt="kitconcept GmbH" width="200px" src="https://kitconcept.com/logo.svg">

The Volto Testimonials Block allows editors to add a testimonials slider to a Volto page.

## Installation

**THIS ADD-ON IS NOT RELEASED YET, INSTALLING IT THIS WAY WON'T DO ANYTHINK BY NOW.**

Create a new Volto project (you can skip this step if you already have one):

```
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @kitconcept/volto-testimonials-block
cd my-volto-project
```

Add `@kitconcept/volto-testimonials-block`to your package.json:

```
"addons": [
    "@kitconcept/volto-testimonials-block"
],

"dependencies": {
    "@kitconcept/volto-testimonials-block": "*"
}
```

Download and install the new add-on by running:

```
yarn install
```

Start Volto with:

```
yarn start
```

Go to http://localhost:3000, login, create a new page. The quote block will show up in the Volto blocks chooser.

## Block configuration

Coming soon...

## Credits

<img alt="kitconcept GmbH" width="200px" src="https://kitconcept.com/logo.svg">

Developed by [kitconcept](https://kitconcept.com).

# License

The project is licensed under the MIT license.
