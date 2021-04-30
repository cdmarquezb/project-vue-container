This is a Vuejs 2 application for the Home page of our microfrotend app.

We don't need to create a mount function here because it's our integration project. In this case our bootstrap is:

```
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
```

This Project is running at http://localhost:8080/ after `npm start` and will lazyLoad the Components. Each component will need to mount the frontend app.

For development we will use the following configuration to define the modules. (We need to start every project in the local machine to make it work)

```
new ModuleFederationPLugin({
  name: "container",
  remotes: {
    home: "home@http://localhost:8081/remoteEntry.js",
    auth: "auth@http://localhost:8082/remoteEntry.js",
    dashboard: "dashboard@http://localhost:8083/remoteEntry.js"
  },
  shared: packageJson.dependencies,
}),
```

For production we will use:

```
const domain = process.env.PRODUCTION_DOMAIN;

new ModuleFederationPlugin({
  name: "container",
  remotes: {
    home: `home@${domain}/home/latest/remoteEntry.js`,
    auth: `auth@${domain}/auth/latest/remoteEntry.js`,
    dashboard: `dashboard@${domain}/dashboard/latest/remoteEntry.js`,
  },
  shared: packageJson.dependencies,
}),
```

Because we use webpack, the version of the modules will be defined at build time.