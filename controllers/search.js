// Packages
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.send('This is the Searchpage')
})

// Views
// Create here a controller that accepts GET requests and renders the "search" page

// Export
module.exports = router
