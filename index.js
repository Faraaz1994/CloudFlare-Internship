
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

class ElementHandler {
  element(element) {
    if (element.tagName == 'h1') {
      element.setInnerContent("Hey there!!!")
    }
    else if (element.tagName == 'p') {
      element.setInnerContent("Hope you are staying safe")
    }
    else if (element.tagName == 'a') {
      element.setAttribute("href", "https://github.com/Faraaz1994/Resume/blob/master/Faraaz%20Ahmed.pdf");
      element.setInnerContent("Do not click!!!!")
    }
  }

}

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  let response = await fetch('https://cfw-takehome.developers.workers.dev/api/variants');
  const responseJson = await response.json()
  //return 0 or 1
  let index = Math.round(Math.random());
  response = await fetch(responseJson.variants[index]);
  return new HTMLRewriter().on('*', new ElementHandler()).transform(response)

}