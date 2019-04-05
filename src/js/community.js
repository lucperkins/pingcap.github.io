function calcBannerTitleImg() {
  if (window.matchMedia('(max-width: 700px)').matches) {
    $('.signable img').attr('src', '/images/community/activities/meetup.svg')
    // $('.signable img').attr(
    //   'src',
    //   'https://download.pingcap.com/images/mobileDevCon.png'
    // )
  } else {
    $('.signable img').attr(
      'src',
      '/images/community/activities/meetup-active-img.jpg'
    )
    // $('.signable img').attr(
    //   'src',
    //   'https://download.pingcap.com/images/PCdevCon.png'
    // )
  }
}

function createEventListConsole(eventTitles, eventLinks) {
  $('.cld-days').hide()
  $('.cld-labels').hide()
  $('.event-list').show()
  for (let i = 0; i < eventTitles.length; i++) {
    var event = document.createElement('div')
    event.className = 'event'
    event.innerHTML =
      '<a href="' + eventLinks[i] + '">' + eventTitles[i] + '</a>'
    $('.event-list').append(event)
  }
}

$(document).ready(function() {
  var events = [
    {
      Date: new Date(2019, 1, 19),
      Title: 'TiDB DevCon 2019',
      Link: 'https://pingcap.com/community-cn/devcon2019',
    },
    {
      Date: new Date(2019, 3, 30),
      Title: 'Infra Meetup No.94 上海',
      Link: 'https://www.huodongxing.com/event/9485633962000',
    },
    {
      Date: new Date(2019, 3, 30),
      Title: 'Infra Meetup No.95 成都',
      Link: 'https://www.huodongxing.com/event/8485635374300',
    },
  ]
  var settings = {
    test: 'testme',
  }

  var element = document.getElementById('calendar')
  calendar(element, events, settings)

  // setClndrHeight()
  calcBannerTitleImg()
  $(window).resize(calcBannerTitleImg)

  // scrolls to specific section smoothly
  const hash = decodeURIComponent(location.hash)
  var extraH_contributor
  var extraH_arch
  if (window.matchMedia('(max-width: 500px)').matches) {
    extraH_contributor = 60
    extraH_arch = 60
  } else {
    extraH_contributor = 250
    extraH_arch = 60
  }
  if (hash) {
    if (hash == '#activities') {
      console.log('activities', extraH_arch)
      $('html, body').animate(
        {
          scrollTop: $('.activity__section').offset().top - extraH_arch,
        },
        1000
      )
    }
  }
  // displays events in this selected day
  $('.eventday').click(function() {
    var el = $(this)
    var eventTitles = []
    var eventLinks = []
    for (let i = 1; i < el[0].childNodes.length; i++) {
      eventTitles.push(el[0].childNodes[i].innerText)
      eventLinks.push(el[0].childNodes[i].childNodes[0].href)
    }
    createEventListConsole(eventTitles, eventLinks)
  })

  $('.close-icon').click(function() {
    $('.cld-days').show()
    $('.cld-labels').show()
    $('.event-list').hide()
    $('.event').remove()
  })
})
