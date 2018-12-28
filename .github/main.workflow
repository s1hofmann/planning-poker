workflow "Build and deploy to gh-pages" {
  on = "push"
  resolves = ["Build && Deploy"]
}

action "Install" {
  uses = "actions/npm@e7aaefe"
  args = "ci"
}

action "Build && Deploy" {
  uses = "s1hofmann/npm@master"
  needs = ["Install"]
  args = "run deploy"
  secrets = ["DEPLOY_TOKEN", "DEPLOY_USER"]
}
