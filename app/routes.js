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


// Benefit type

router.post('/claim-closure/v1/have-you-started', function (req, res) {

  let benefitType = req.session.data['benefit-type']

  if (benefitType === 'Employment and Support Allowance') {
    res.redirect('/claim-closure/v1/permitted-work')
  } else {
    res.redirect('/claim-closure/v1/have-you-started')
  }
})

// Permitted Work

router.post('/claim-closure/v1/yes-permitted-work', function (req, res) {

  let permittedWork = req.session.data['permitted-work']

  if (permittedWork === 'No') {
    res.redirect('/claim-closure/v1/have-you-started')
  } else {
    res.redirect('/claim-closure/v1/yes-permitted-work')
  }
})

// Starting work

router.post('/claim-closure/v1/are-you-being-paid', function (req, res) {

  let alreadyStarted = req.session.data['have-you-started']

  if (alreadyStarted === 'No') {
    res.redirect('/claim-closure/v1/next-7-days')
  } else {
    res.redirect('/claim-closure/v1/are-you-being-paid')
  }
})

router.post('/claim-closure/v1/no-next-7-days', function (req, res) {

  let sevenDays = req.session.data['next-7-days']

  if (sevenDays === 'No') {
    res.redirect('/claim-closure/v1/no-next-7-days')
  } else {
    res.redirect('/claim-closure/v1/are-you-being-paid')
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

// 16 or more hours

router.post('/claim-closure/v1/more-than-5-weeks', function (req, res) {

  let yourHours = req.session.data['more-than-16']

  if (yourHours === 'No') {
    res.redirect('/claim-closure/v1/no-more-than-16')
  } else {
    res.redirect('/claim-closure/v1/more-than-5-weeks')
  }
})


// Found work version 2

// No claimant commitment

router.post('/claim-closure/v2/reason', function (req, res) {

  let claimantCommitment = req.session.data['claimant-commitment']

  if (claimantCommitment === 'No') {
    res.redirect('/claim-closure/v2/no-claimant-commitment')
  } else {
    res.redirect('/claim-closure/v2/reason')
  }
})

// Employment type

router.post('/claim-closure/v2/hours', function (req, res) {

  let employmentType = req.session.data['employment-type']

  if (employmentType === 'Full time') {
    res.redirect('/claim-closure/v2/hours')
  } else if (employmentType === 'Part time') {
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
    res.redirect('/claim-closure/v2/no-hours')
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
