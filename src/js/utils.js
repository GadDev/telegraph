/**
 * Dummy utility class to demonstrate a basic JS
 * structure and assoiciated test
 * @param {Object} params - containing:
 * @param {String} homePagePath - the pathname of the homepage (defaults to '/')
 * @param {String} articlePagePath - the pathname of an article page (defaults to '/:post')
 */
class Utils {
	constructor(params) {
		this.params = Object.assign(
			{
				homePagePath: "/",
				articlePagePath: "/article",
			},
			params
		);
	}

	/**
	 * Is the user on the hompage
	 * @return {Boolean}
	 */
	isHomePage() {
		return document.location.pathname === this.params.homePagePath;
	}
	isArticlePage() {
		return document.location.pathname === this.params.articlePagePath;
	}
}

module.exports = Utils;
