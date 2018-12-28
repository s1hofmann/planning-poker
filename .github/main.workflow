workflow "Build and deploy to gh-pages" {
  on = "push"
  resolves = ["Build && Deploy"]
}

action "Build && Deploy" {
  uses = "actions/npm@e7aaefe"
  runs = "npm run deploy"
  secrets = ["GITHUB_TOKEN"]
}
