let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

//created body div
let body = document.createElement('div')
body.setAttribute('class', 'dog-content')

//created img in body div
let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
body.append(dogImage)

//create another div in body div with dog details
let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
body.append(dogDetails)

//created description h3
let description = document.createElement('h3')
description.append('Description:')
dogDetails.append(description)

//created paragraph p
let paragraph = document.createElement('p')
paragraph.append('This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.')
dogDetails.append(paragraph)

//created another h3
let feeding = document.createElement('h3')
feeding.append('Feeding Times:')
dogDetails.append(feeding)

//created list items
let listItem1 = document.createElement('li')
listItem1.append('9:00 am')
dogDetails.append(listItem1)

let listItem2 = document.createElement('li')
listItem2.append('12:00 am')
dogDetails.append(listItem2)

let listItem3 = document.createElement('li')
listItem3.append('5:00 am')
dogDetails.append(listItem3)

//displays in body of html code
content.append(body)
