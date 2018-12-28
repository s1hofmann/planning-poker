workflow "Build and deploy to gh-pages" {
  on = "push"
  resolves = ["Build "]
}

action "Install" {
  uses = "actions/npm@e7aaefe"
  runs = "npm ci"
  secrets = ["GITHUB_TOKEN"]
}

action "Build && Deploy" {
  uses = "actions/npm@e7aaefe"
  runs = "npm run deploy"
  secrets = ["GITHUB_TOKEN"]
}

action "Build " {
  uses = "actions/npm@e7aaefe"
  needs = ["Install"]
  runs = "npm run deploy"
  secrets = ["GITHUB_TOKEN"]
}
