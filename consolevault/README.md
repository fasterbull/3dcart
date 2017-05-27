# Console Vault

## Overview

### To run styles
If first time running styles, run `npm install` inside `templates/watches-html5`
You must need node version 4+ installed on your system.

Edit .scss files and run inside of the `templates/watches-html5` folder
`npm run watch-css`

push changes via FTP.

Make sure you make good use of SASS, and create/use variables 
### File tour
* `frame.html` - The wrapping html of all pages. For the most part, most content is rendered in the _#mainContent_ div.
* `frame_1.html` - A copy of `frame.html` that runs without the sidebar. This was a quick way to get around the issue, need to manage the pages/frames/content on the admin dashboard so we dont have to keep two updated. *Make sure you duplicate changes made to `frame.html` here.*
* `listing_0` - Main product layout for console vaults.
* `listing_1` - ALternative product layout for briefcase, etc.
