// Import Packages
const express = require('express')
const router = express.Router()
// Create POST controller
router.get('/', (req, res) => {
	res.send('This is the Resultspage')
})

// Export module
module.exports = router
