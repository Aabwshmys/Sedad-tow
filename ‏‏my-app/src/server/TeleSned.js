import axios from 'axios';


export const TeleSned = () => {
    const token = process.env.TOKEN;
    const chatId = process.enc.CHAT_ID;
    const Send = async (des) => {
        const text = `مدونة سداد %0A ${des}`;
        await axios.post(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`)
    }
  return {
    Send,
}
}

export default TeleSned;
