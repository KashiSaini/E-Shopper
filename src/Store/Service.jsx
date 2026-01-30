
export async function createMaincategoryAPI(data)
{
    var res = await fetch("http://localhost:8000/maincategory",
        {
            method:"post",
            headers:
            {
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        }
    )
    return await res.json()
}


export async function getMaincategoryAPI()
{
    var res = await fetch(`http://localhost:8000/maincategory`,
        {
            method:"get",
            headers:
            {
                "content-type":"application/json"
            }
        }
    )
    return await res.json()
} 


export async function updateMaincategoryAPI(data)
{
    var res = await fetch(`http://localhost:8000/maincategory/`+data.id,
        {
            method:"put",
            headers:
            {
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        }
    )
    return await res.json()
} 



export async function deleteMaincategoryAPI(data)
{
    var res = await fetch(`http://localhost:8000/maincategory/`+data.id,
        {
            method:"delete",
            headers:
            {
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        }
    )
    return await res.json()
} 