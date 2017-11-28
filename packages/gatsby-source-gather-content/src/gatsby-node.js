exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators

  // Create nodes here, generally by downloading data
  // from a remote API.
  const data = await fetch(REMOTE_API)
  
  /*
  //all items from a project
  // curl https://api.gathercontent.com/items?project_id=PROJECT_ID -u USER_EMAIL:API_KEY -H "Accept: application/vnd.gathercontent.v0.5+json"
  
  let items = fetch(`https://api.gathercontent.com/items?project_id=${PROJECT_ID}`, options)

  // single item
  // curl https://api.gathercontent.com/items/ITEM_ID -u USER_EMAIL:API_KEY -H "Accept: application/vnd.gathercontent.v0.5+json"

  let item = fetch(`https://api.gathercontent.com/items/${ITEM_ID}`, options)

  */

  // Process data into nodes.
  data.forEach(datum => createNode(processDatum(datum)))

  // We're done, return.
  return
}
