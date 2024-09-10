<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for <a href="https://github.com/highlightjs/highlight.js">Highlight.js</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
	<a href="https://github.com/catppuccin/highlightjs/stargazers"><img src="https://img.shields.io/github/stars/catppuccin/highlightjs?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/highlightjs/issues"><img src="https://img.shields.io/github/issues/catppuccin/highlightjs?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/highlightjs/contributors"><img src="https://img.shields.io/github/contributors/catppuccin/highlightjs?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

<p align="center">
	<img src="assets/preview.webp"/>
</p>

## Previews

<details>
<summary>🌻 Latte</summary>
<img src="assets/latte.webp"/>
</details>
<details>
<summary>🪴 Frappé</summary>
<img src="assets/frappe.webp"/>
</details>
<details>
<summary>🌺 Macchiato</summary>
<img src="assets/macchiato.webp"/>
</details>
<details>
<summary>🌿 Mocha</summary>
<img src="assets/mocha.webp"/>
</details>

## Usage

Add the CSS for your preferred flavor in your markup. You can do this by either getting the files from npm, or through a CDN.

### npm

Install the `@catppuccin/highlightjs` package with your preferred package manager.

```bash
npm install -D @catppuccin/highlightjs
```

You can then use the files in `@catppuccin/highlightjs/css` or `@catppuccin/highlightjs/sass`.

### CDN

Embed the [Highlight.js script](https://highlightjs.org/download/) along with one of our themes.

> [!NOTE]
> The "variable version" assumes that you have a flavor of Catppuccin already present in your CSS variables, in any format of color (e.g. `--ctp-mauve: rgb(136, 57, 239)`, `--ctp-mauve: #8839ef`, `--ctp-mauve: hsl(266deg, 85%, 58%)`, etc).
> If you use [Catppuccin for TailwindCSS](https://github.com/catppuccin/tailwindcss), where your variables are in the format of three comma-separated RGB
> values (e.g. `--ctp-mauve: 136,57,239`), you should use the "rgb variable" version.

<!-- x-release-please-start-version -->

#### unpkg

```html
<link rel="stylesheet" href="//unpkg.com/@catppuccin/highlightjs@0.2.2/css/catppuccin-latte.css">
<link rel="stylesheet" href="//unpkg.com/@catppuccin/highlightjs@0.2.2/css/catppuccin-frappe.css">
<link rel="stylesheet" href="//unpkg.com/@catppuccin/highlightjs@0.2.2/css/catppuccin-macchiato.css">
<link rel="stylesheet" href="//unpkg.com/@catppuccin/highlightjs@0.2.2/css/catppuccin-mocha.css">
<!-- Variable version -->
<link rel="stylesheet" href="//unpkg.com/@catppuccin/highlightjs@0.2.2/css/catppuccin.variables.css">
<!-- Variable version with !important (higher specificity) -->
<link rel="stylesheet" href="//unpkg.com/@catppuccin/highlightjs@0.2.2/css/catppuccin.variables.important.css">
<!-- RGB variable version -->
<link rel="stylesheet" href="//unpkg.com/@catppuccin/highlightjs@0.2.2/css/catppuccin.variables.rgb.css">
<!-- RGB variable version with !important (higher specificity) -->
<link rel="stylesheet" href="//unpkg.com/@catppuccin/highlightjs@0.2.2/css/catppuccin.variables.rgb.important.css">
```

#### jsDelivr

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@catppuccin/highlightjs@0.2.2/css/catppuccin-latte.css">
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@catppuccin/highlightjs@0.2.2/css/catppuccin-frappe.css">
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@catppuccin/highlightjs@0.2.2/css/catppuccin-macchiato.css">
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@catppuccin/highlightjs@0.2.2/css/catppuccin-mocha.css">
<!-- Variable version -->
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@catppuccin/highlightjs@0.2.2/css/catppuccin.variables.css">
<!-- Variable version with !important (higher specificity) -->
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@catppuccin/highlightjs@0.2.2/css/catppuccin.variables.important.css">
<!-- RGB variable version -->
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@catppuccin/highlightjs@0.2.2/css/catppuccin.variables.rgb.css">
<!-- RGB variable version with !important (higher specificity) -->
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@catppuccin/highlightjs@0.2.2/css/catppuccin.variables.rgb.important.css">
```

<!-- x-release-please-end -->

## 💝 Thanks to

- [Andreas Grafen](https://github.com/andreasgrafen)
- [winston](https://github.com/nekowinston)

&nbsp;

<p align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" />
</p>

<p align="center">
	Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
</p>

<p align="center">
	<a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a>
</p>
