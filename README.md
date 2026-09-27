# Rural Rising Philippines

Rural Rising Philippines' advocacy website, hosted on GitHub Pages and editable through Pages CMS.

## Edit website content

1. Go to <https://app.pagescms.org> and sign in with GitHub.
2. If this is the first visit, install the Pages CMS GitHub App for the `Rural-Rising-PH` organization and allow access to this repository.
3. Open `rural-rising-ph.github.io` in Pages CMS.
4. Choose a section under **Website content**, make the changes, and save.

Saving in the CMS creates a commit in GitHub. GitHub Pages will rebuild the public site automatically. Only GitHub users who have been granted access to the organization and repository should be allowed to edit.

The editable content is stored as JSON in `_data`. The page layout remains in `index.html`, while `styles.css` and `site.js` control the design and interaction. Images uploaded through the CMS are stored in `assets`.

## Publish with GitHub Pages

In the GitHub repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select the `main` branch and the `/ (root)` folder, then save.

The public address is <https://rural-rising-ph.github.io/>.

## Preview locally

Because the site now uses Jekyll data, preview it with Jekyll rather than a basic file server:

```bash
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

The public site is still static and does not require PHP, WordPress, a database, or a running application server.
