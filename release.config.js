export default {
  branches: ['main'],
  repositoryUrl: 'https://github.com/SP-Libraries/actions.git',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits'
      }
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits'
      }
    ],
    '@semantic-release/changelog',
    [
      '@semantic-release/exec',
      {
        prepareCmd:
          'RELEASE_VERSION=${nextRelease.version} node ./release.update.js'
      }
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'package-lock.json'],
        message:
          'chore(release): v${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ],
    '@semantic-release/github'
  ]
};
