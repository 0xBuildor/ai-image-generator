export const runtime = 'edge' // 'nodejs' is the default
export async function GET(request:Request) {
    // Connect to our Microsoft Azure Function Endpoint
    const response = await fetch("https://ai-image-generator-ytb-app.azurewebsites.net/api/getchatgptsuggestion", {
        cache: 'no-store'
    }); 
    

    const textData = await response.text();
    console.log(textData)
    return new Response(JSON.stringify(textData.trim()), {
        status:200,
    });
   
}
