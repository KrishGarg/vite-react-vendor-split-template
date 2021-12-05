# Vite React with Vendor-Splitting template.

# Credits: [Sambit Sahoo](https://sambitsahoo.com/blog/vite-code-splitting-that-works.html)

**Note:** You can remove `react-icons` as it is only installed for the example.

## Quick Clone:

```shell
npx degit KrishGarg/vite-react-vendor-split-template#main
```

## Example:

Keep looking in the Network tab and the Sources tab to see the real power of code splitting.

https://vite-react-vendor-split.surge.sh/

## So, what is this?

First of all, if you don't know what code-splitting is, I would suggest checking the [official page](https://reactjs.org/docs/code-splitting.html) in the react docs.

By default, vite does support code-splitting, but it only splits the app-specific code. What I mean by that is whatever code we write, is app specific. So, what is not app-specific? The third-party dependencies! If we use React.lazy + Suspense, vite will split the bundles for the lazy components and load them only when rendered, but vite does not, by default, split the dependencies.

Vite just packs all the dependencies in a `vender.[hash].js` which is sent to the client whenever they load our website. We usually use a lot of 3rd party dependencies but we know that not all components/routes needs all the dependencies, thats why we have code-splitting!

So to fix this issue of the browser being sent all the dependencies at once, in this template, we split the vendor in multiple bundles. So in the end production build, we will have,

- `index.[hash].js`: Our entry app-specific code.
- `[lazyComponentName].[hash].js`: All the lazy components will be automatically separated in bundles by vite.
- `vendor.[hash].js`: This will have the global dependencies like `react`, `react-dom` and `react-router-dom`. This will be sent on loading any page, as these are needed in all routes.
- `[packageName].[hash].js`: All the dependencies will be minified and splitted in separate bundles.

Now lets say you have a component named `Sample` and it imports something from `react-icons` package. When you lazy-render `Sample` using React.lazy and Suspense, it will fetch `Sample.[hash].js` and `react-icons.[hash].js`.
