const contentfulManagement = require("contentful-management")

const CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN = process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN;
const CONTENTFUL_SPACE_ID = '5snoiaxo9zl5';
const CONTENTFUL_ENVIRONMENT = 'master';

module.exports = function () {
    const contentfulClient = contentfulManagement.createClient({
        accessToken: CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
    })

    return contentfulClient
        .getSpace(CONTENTFUL_SPACE_ID)
        .then(space => space.getEnvironment(CONTENTFUL_ENVIRONMENT))
}