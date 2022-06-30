export const projectDir = `
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   │   ├── base.less
│   │   │   └── index.css
│   │   ├── img
│   │   │   ├── login-bg.svg
│   │   │   └── logo.svg
│   │   └── logo.png
│   ├── base-ui
│   │   ├── breadcrumb
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── breadcrumb.vue
│   │   │   └── types
│   │   │       └── index.ts
│   │   ├── card
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── card.vue
│   │   ├── code
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── index.vue
│   │   ├── descriptions
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       ├── data.d.ts
│   │   │       └── index.vue
│   │   ├── echart
│   │   │   ├── data
│   │   │   │   └── china.json
│   │   │   ├── hooks
│   │   │   │   └── userEchart.ts
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── base-echart.vue
│   │   ├── form
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── form.vue
│   │   │   └── types
│   │   │       └── index.ts
│   │   ├── table
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── table.vue
│   │   └── text-link
│   │       ├── index.ts
│   │       └── src
│   │           └── index.vue
│   ├── components
│   │   ├── nav-header
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       ├── nav-header.vue
│   │   │       └── user-info.vue
│   │   ├── nav-menu
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── nav-menu.vue
│   │   ├── page-content
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── page-content.vue
│   │   ├── page-echarts
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   ├── bar-echart.vue
│   │   │   │   ├── line-echart.vue
│   │   │   │   ├── map-echart.vue
│   │   │   │   ├── pie-echart.vue
│   │   │   │   └── rose-echart.vue
│   │   │   ├── types
│   │   │   │   └── index.ts
│   │   │   └── utils
│   │   │       ├── convert-data.ts
│   │   │       └── coordinate-data.ts
│   │   ├── page-modal
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── page-modal.vue
│   │   └── page-search
│   │       ├── index.ts
│   │       └── src
│   │           └── page-search.vue
│   ├── global
│   │   ├── index.ts
│   │   ├── register-element.ts
│   │   └── register-properties.ts
│   ├── hooks
│   │   ├── use-page-modal.ts
│   │   ├── use-page-search.ts
│   │   └── use-permission.ts
│   ├── main.ts
│   ├── router
│   │   ├── index.ts
│   │   └── main
│   │       ├── analysis
│   │       │   ├── dashboard
│   │       │   │   └── dashboard.ts
│   │       │   └── overview
│   │       │       └── overview.ts
│   │       ├── product
│   │       │   ├── category
│   │       │   │   └── category.ts
│   │       │   └── goods
│   │       │       └── goods.ts
│   │       ├── story
│   │       │   ├── chat
│   │       │   │   └── chat.ts
│   │       │   └── list
│   │       │       └── list.ts
│   │       └── system
│   │           ├── department
│   │           │   └── department.ts
│   │           ├── menu
│   │           │   └── menu.ts
│   │           ├── role
│   │           │   └── role.ts
│   │           └── user
│   │               └── user.ts
│   ├── service
│   │   ├── axios_demo.ts
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── login.ts
│   │   │   └── type.ts
│   │   ├── main
│   │   │   ├── analysis
│   │   │   │   └── dashboard.ts
│   │   │   └── system
│   │   │       └── system.ts
│   │   ├── request
│   │   │   ├── config.ts
│   │   │   ├── index.ts
│   │   │   └── type.ts
│   │   └── types.ts
│   ├── shims-vue.d.ts
│   ├── store
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── login.ts
│   │   │   └── types.ts
│   │   ├── main
│   │   │   ├── analysis
│   │   │   │   ├── dashboard.ts
│   │   │   │   └── types.ts
│   │   │   ├── product
│   │   │   └── system
│   │   │       ├── system.ts
│   │   │       └── types.ts
│   │   └── types.ts
│   ├── utils
│   │   ├── cache.ts
│   │   ├── date-form.ts
│   │   └── map-menus.ts
│   └── views
│       ├── login
│       │   ├── config
│       │   │   ├── account-config.ts
│       │   │   └── phone-code.ts
│       │   ├── cpns
│       │   │   ├── login-account.vue
│       │   │   ├── login-panel.vue
│       │   │   └── login-phone.vue
│       │   ├── hook
│       │   └── login.vue
│       ├── main
│       │   ├── analysis
│       │   │   ├── dashboard
│       │   │   │   ├── dashboard.vue
│       │   │   │   └── demo.vue
│       │   │   └── overview
│       │   │       ├── overview.vue
│       │   │       └── p-config
│       │   │           ├── dependencies.ts
│       │   │           ├── dev-dependencies.ts
│       │   │           ├── index.ts
│       │   │           ├── project-dir.ts
│       │   │           └── technology-stacks.ts
│       │   ├── main.vue
│       │   ├── product
│       │   │   ├── category
│       │   │   │   └── category.vue
│       │   │   └── goods
│       │   │       ├── config
│       │   │       │   └── content.config.ts
│       │   │       └── goods.vue
│       │   ├── story
│       │   │   ├── chat
│       │   │   │   └── chat.vue
│       │   │   └── list
│       │   │       └── list.vue
│       │   └── system
│       │       ├── department
│       │       │   └── department.vue
│       │       ├── menu
│       │       │   ├── config
│       │       │   │   └── content.config.ts
│       │       │   └── menu.vue
│       │       ├── role
│       │       │   ├── config
│       │       │   │   ├── content.config.ts
│       │       │   │   ├── modal.config.ts
│       │       │   │   └── search.config.ts
│       │       │   └── role.vue
│       │       └── user
│       │           ├── config
│       │           │   ├── content.config.ts
│       │           │   ├── modal.config.ts
│       │           │   └── search.config.ts
│       │           └── user.vue
│       └── not-found
│           └── not-found.vue
`
