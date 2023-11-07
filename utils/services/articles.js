export const getAllArtciles = () => {
    const q = `query {
        allArticles {
            nodes {
                p1
                p2
            }
        }
    }`


    return fetch('http://localhost:3001/graphql', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({query: q})
    })
    .then(r => r.json())
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })

}