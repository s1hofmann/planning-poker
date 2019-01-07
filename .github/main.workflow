workflow "Build and deploy to gh-pages" {
  on = "push"
  resolves = [
    "Deploy if on master",
    "Test",
    "Production build && Deploy",
  ]
}

action "Install" {
  uses = "docker://node:10"
  args = "npm ci"
}

action "Production build && Deploy" {
  uses = "docker://node:10"
  needs = ["Deploy if on master"]
  secrets = [
    "DEPLOY_USER",
    "GITHUB_TOKEN",
  ]
  runs = "npm run deploy"
}

action "Deploy if on master" {
  uses = "actions/bin/filter@b2bea07"
  needs = ["Test"]
  args = "branch master"
}

action "Test" {
  uses = "docker://node:10"
  needs = ["Install"]
  args = "npm test"
  env = {
    CI = "true"
  }
}
