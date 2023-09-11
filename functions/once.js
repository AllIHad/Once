exports.handler = async () => {
    console.log('function ran')

    const data = {nama : 'Ibad', age: '20', job: 'Software Developer'}

    // Return data
    return{
        statusCode: 200,
        body: JSON.stringify(data)
    }
}