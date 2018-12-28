workflow "Build and deploy to gh-pages" {
  on = "push"
  resolves = ["Build "]
}

action "Install" {
  uses = "actions/npm@e7aaefe"
  args = "ci"
}

action "Build && Deploy" {
  uses = "actions/npm@e7aaefe"
  runs = "npm run deploy"
  secrets = ["GITHUB_TOKEN"]
}

action "Build " {
  uses = "actions/npm@e7aaefe"
  needs = ["Install"]
  args = "run deploy"
  secrets = ["DEPLOY_TOKEN", "DEPLOY_USER"]
}
