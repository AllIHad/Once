exports.handler = async (event, context) => {
    const guides = [
        { title: 'Pls show your ticket to the staff', author: 'Sana kuu' },
        { title: 'Do not push each other while concer', author: 'Momo' },
        { title: 'Bring your light stick', author: 'All Members' }
    ]

    if (context.clientContext.user) {
        return {
            statusCode: 200,
            body: JSON.stringify(guides)
        }
    }
    return {
        statusCode: 401,
        body: JSON.stringify({ mssg: 'You need to log in, be able to see the content' })
    }
}  