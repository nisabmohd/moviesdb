const data=async (link)=>{
    const resp=await fetch(link)
    const data=await resp.json()
    return data
}
export default data;