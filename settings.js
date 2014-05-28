var settings = {
    site: {
        URL: 'http://localhost:3000',  //Complete URL to root. No trailing slash.
        name: 'VERIA CMS',	//Name of Site
        tagline: 'This is a fresh installation!' //Tagline used in title and site description
    },
    database: {
        client: 'sqlite3',
        connection: {
            filename : './config/veria.db'
        }
    },
	plugins: {
		disqus: {
			enabled: false,
			shortname: ''
		}
	},
    theme: {
        name: 'default',
        index: {
            sidebar: {
                avatarURL: 'http://localhost:3000/assets/images/logo.jpg',
                name: 'My Name!!',
                tagline: 'This my tag line, or a little bit about me!!',
                socialLinks:  // social links can be removed or replaced. Just replace with empty array if not required.
                    [{
                        name: 'Facebook',
                        icon: 'http://localhost:3000/assets/images/social-facebook.png',
                        URL: '#'
                    },
                    {
                        name: 'Twitter',
                        icon: 'http://localhost:3000/assets/images/social-twitter.png',
                        URL: '#'
                    },
                    {
                        name: 'Youtube',
                        icon: 'http://localhost:3000/assets/images/social-youtube.png',
                        URL: '#'
                    },
                    {
                        name: 'Gmail',
                        icon: 'http://localhost:3000/assets/images/social-gmail.png',
                        URL: '#'
                    }]
            }
        }
    }
}

module.exports = settings;  