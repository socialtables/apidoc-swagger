/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 * @apiDeprecated
 * @apiParam {Number} id Users unique ID.
 * @apiParam (Parameter) {Boolean} [includePicture] Whether to include the picture in the response
 * @apiParam (Parameter) {string="Y","N"} [includeOptional] Example of a optionally including a querystring
 * @apiDescription Get user information and optionally include the picture
 * @apiHeader {String} [accept] Specify image/png to recieve an image response
 * @apiSuccess {String} firstname Firstname of the User
 * @apiSuccess {String} lastname  Lastname of the User
 * @apiSuccess {String} [picture] Optional picture of the User
 */

/**
 * @api {get} /team/:id Get team information
 * @apiName GetTeam
 * @apiGroup Team
 * @apiParam {Number} id Team Id.
 * @apiDescription Get team information
 * @apiSuccess {Number} id Id of the team
 * @apiSuccess {String} name Name of the team
 */


/**
 * @api {post} /user Create a user
 * @apiName CreateUser
 * @apiGroup User
 * @apiParam (Parameter) {String} firstname First Name for the new user
 * @apiParam (Parameter) {String} lastname Last Name for the new user
 * @apiParam (Parameter) {String} email Email Address
 * @apiParam (Parameter) {String} [opt_in] Opt in to marketing things
 * @apiDescription Create a new user. Email needs to be unique
 * @apiDeprecated
 * @apiSuccess (200) {Object} data
 * @apiSuccessExample {json} Sample Response:
 * HTTP/1.1 200 OK
 * {
 * "id": 308,
 * "firstname": 'Bobby',
 * "lastname": 'Sample'
 * }
 */

