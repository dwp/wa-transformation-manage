const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// Found work version 1

  // No claimant commitment

  router.post('/claim-closure/v1/reason', function (req, res) {

    let claimantCommitment = req.session.data['claimant-commitment']

    if (claimantCommitment === 'No') {
      res.redirect('/claim-closure/v1/no-claimant-commitment')
    } else {
      res.redirect('/claim-closure/v1/reason')
    }
  })

  // Reason routing

  // Starting work

  router.post('/claim-closure/v1/dob', function (req, res) {

    let alreadyStarted = req.session.data['have-you-started']

    if (alreadyStarted === 'No') {
      res.redirect('/claim-closure/v1/next-7-days')
    } else {
      res.redirect('/claim-closure/v1/dob')
    }
  })

  router.post('/claim-closure/v1/no-next-7-days', function (req, res) {

    let sevenDays = req.session.data['next-7-days']

    if (sevenDays === 'No') {
      res.redirect('/claim-closure/v1/no-next-7-days')
    } else {
      res.redirect('/claim-closure/v1/dob')
    }
  })

  // Being paid

  router.post('/claim-closure/v1/more-than-16', function (req, res) {

    let gettingPaid = req.session.data['are-you-being-paid']

    if (gettingPaid === 'No') {
      res.redirect('/claim-closure/v1/no-being-paid')
    } else {
      res.redirect('/claim-closure/v1/more-than-16')
    }
  })

  router.post('/claim-closure/v1/no-more-than-16', function (req, res) {

    let beingPaid = req.session.data['are-you-being-paid']

    if (beingPaid === 'Yes') {
      res.redirect('/claim-closure/v1/more-than-5-weeks')
    } else {
      res.redirect('/claim-closure/v1/no-more-than-16')
    }
  })

  // 16 or more hours

  router.post('/claim-closure/v1/more-than-5-weeks', function (req, res) {

    let yourHours = req.session.data['more-than-16']

    if (yourHours === 'No') {
      res.redirect('/claim-closure/v1/are-you-being-paid')
    } else {
      res.redirect('/claim-closure/v1/more-than-5-weeks')
    }
  })


// Found work version 2

  // Reasons

  router.post('/claim-closure/v2/dob', function (req, res) {

    let reason = req.session.data['reason']

    if (reason === 'Found work') {
      res.redirect('/claim-closure/v2/dob')
    } else {
      res.redirect('/claim-closure/v2/no-reason')
    }
  })

  // Employment type

  router.post('/claim-closure/v2/hours', function (req, res) {

    let employmentType = req.session.data['employment-type']

    if (employmentType === 'Full time') {
      res.redirect('/claim-closure/v2/more-than-5-weeks')
    } else if (employmentType === 'Part time') {
      res.redirect('/claim-closure/v2/hours')
    } else if (employmentType === 'Self employment') {
      res.redirect('/claim-closure/v2/hours')
    } else {
      res.redirect('/claim-closure/v2/no-employment-type')
    }
  })

  // Employment type

  router.post('/claim-closure/v2/more-than-5-weeks', function (req, res) {

    let hours = req.session.data['hours']

    if (hours === '16 hours or more') {
      res.redirect('/claim-closure/v2/more-than-5-weeks')
    } else {
      res.redirect('/claim-closure/v2/are-you-being-paid')
    }
  })

  // Payment amount

  router.post('/claim-closure/v2/no-being-paid', function (req, res) {

    let benefitType = req.session.data['benefit-type']
    let earnings = +req.session.data['earnings-per-week']

    if (earnings > '79.70') {
      res.redirect('/claim-closure/v2/more-than-5-weeks')
    } else {
      res.redirect('/claim-closure/v2/no-being-paid')
    }
  })

  // Start date

  router.post('/claim-closure/v2/when-did-you-start', function (req, res) {

    let started = req.session.data['have-you-started']

    if (started === 'Yes') {
      res.redirect('/claim-closure/v2/when-did-you-start')
    } else {
      res.redirect('/claim-closure/v2/when-do-you-start')
    }
  })
