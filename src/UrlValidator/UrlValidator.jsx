import React from "react"
import axios from "axios"

function UrlValidator()
{
    const [url, setUrl] = React.useState("Programming")
    const [result, setResullt] = React.useState([[],[],[],[]])
    const baseUrl = "https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search="

    setTimeout(()=>{
        if(url === "")
        {
            document.getElementById("result").style.display="none"
        }
    },200)

    React.useEffect(() => {
        if(url === "")
        {
            document.getElementById("result").style.display="none"
        }
        else{
            setTimeout(()=>{
                axios.get(baseUrl+url).then((response) => {
                    setResullt(response.data)
                    });
                document.getElementById("result").style.display="block"
            },500)
        }

    },[url]);

  return(
      <div>
          <h1>Wiki Search</h1>
            <input placeholder="Search..." value={url} onChange={(e)=>{setUrl(e.target.value)}}/>
            <div id="result">
            {
                result[1].map((element, index)=>{
                    return(
                         <a target="_blank" href={result[3][index]}>{element}</a>
                    )
                })
            }
            </div>
      </div>
  )
}
export default UrlValidator