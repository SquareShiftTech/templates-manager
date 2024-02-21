project_name: "templates-manager"

application: templates-manager {
  label: "Manage templates"
  url: "https://localhost:8080/bundle.js"
  # file: "bundle.js
  entitlements: {
    external_api_urls: ["https://pixelperfect.squareshift.dev"]
    core_api_methods: ["me"]
    use_iframes: yes
    use_downloads: yes
}
}