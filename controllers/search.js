// Packages
const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
	res.render('/results')
})

// Views
// Create here a controller that accepts GET requests and renders the "search" page

// Export
module.exports = router
