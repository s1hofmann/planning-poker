workflow "Build and deploy to gh-pages" {
  on = "push"
  resolves = [
    "Deploy if on master",
    "Test",
    "Production build && Deploy",
  ]
}

action "Install" {
  uses = "actions/npm@e7aaefe"
  args = "ci"
}

action "Production build && Deploy" {
  uses = "s1hofmann/npm@master"
  needs = ["Deploy if on master"]
  args = "run deploy"
  secrets = [
    "DEPLOY_USER",
    "GITHUB_TOKEN",
  ]
}

action "Deploy if on master" {
  uses = "actions/bin/filter@b2bea07"
  needs = ["Test"]
  args = "branch master"
}

action "Test" {
  uses = "actions/npm@e7aaefe"
  needs = ["Install"]
  args = "test"
}
